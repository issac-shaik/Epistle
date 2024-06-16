import { Hono } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@issac-shaik/epistle-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

//route protection
blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  try {
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id);
      await next();
    }
  } catch (error) {
    c.status(403);
    return c.json({
      message: "Inputs are not correct",
    });
  }
});

//create blog
blogRouter.post("/", async (c) => {
  const time = Date.now();
  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: "Inputs not valid" });
  }

  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(authorId),
      timePublished: new Date(time),
    },
  });
  return c.json({
    id: blog.id,
  });
});

//update blog

blogRouter.put("/update", async (c) => {
  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: "Inputs not correct" });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const userId = c.get("userId");
  try {
    const blog = await prisma.post.update({
      where: {
        id: body.id,
        authorId: Number(userId),
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.json(blog);
  } catch (error) {
    console.error(error);
    return c.json({
      error: "Cannot update the blog, you're not the owner",
    });
  }
});

//get all blogs
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        timePublished: true,
        author: {
          select: {
            name: true,
            avatarUrl: true,
          },
        },
      },
    });

    return c.json({
      blogs,
    });
  } catch (e) {
    c.status(411);
    return c.json({
      message: "Error while fetching blog posts",
    });
  }
});

//get blog with id
blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        title: true,
        timePublished: true,
        content: true,
        author: {
          select: {
            name: true,
            avatarUrl: true,
          },
        },
      },
    });
    return c.json({
      blog,
    });
  } catch (e) {
    c.status(411);
    return c.json({
      message: "Error while fetching blog post",
    });
  }
});
