import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import BlogsShimmer from "../components/BlogsShimmer";
import { Footer } from "../components/Footer";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return (
      <div className="">
        <div className="">
          <BlogsShimmer />
          <BlogsShimmer />
          <BlogsShimmer />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar blog={blogs} />
      <div className="flex justify-center">
        <div className="max-w-2xl mx-4 sm:mx-10 cursor-pointer pt-4">
          {blogs
            .slice()
            .reverse()
            .map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                avatarUrl={blog.author.avatarUrl}
                authorName={blog.author.name}
                title={blog.title}
                content={blog.content}
                timePublished={blog.timePublished}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
