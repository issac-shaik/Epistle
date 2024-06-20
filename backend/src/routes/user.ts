import { Hono } from "hono";
import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { sign, verify } from "hono/jwt";
import { signupInput, signinInput } from "@issac-shaik/epistle-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({
      error: "Username or password passed did not contain valid inputs",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        username: body.username,
        password: body.password,
        avatarUrl: body.avatarUrl,
      },
    });
    const jwtPayload = {
      id: user.id,
      avatarUrl: user.avatarUrl,
    };
    const jwt = await sign(jwtPayload, c.env.JWT_SECRET);
    return c.json({ jwt, jwtPayload });
  } catch (e) {
    console.error(e);
    c.status(403);
    return c.json({ error: "error while signing up" });
  } finally {
    await prisma.$disconnect();
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);

  if (!success) {
    c.status(400);
    return c.json({
      error: "Username or password passed did not contain valid inputs",
    });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findUnique({
      where: {
        username: body.username,
        password: body.password,
      },
    });
    if (!user) {
      c.status(403);
      return c.json({
        msg: "user not found",
      });
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (e) {
    console.log(e);
    c.status(403);
    return c.json({ error: "error while signing in" });
  }
});

//get all users
userRouter.get("/users", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const users = await prisma.user.findMany();
    return c.json(users);
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ error: "error while fetching users" });
  } finally {
    await prisma.$disconnect();
  }
});

userRouter.get("/users/:id", async (c) => {
  const { id } = c.req.param();
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) {
      c.status(404);
      return c.json({ error: "User not found" });
    }

    return c.json(user);
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ error: "error while fetching user" });
  } finally {
    await prisma.$disconnect();
  }
});
