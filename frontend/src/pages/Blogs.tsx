import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Appbar blog={blogs} />
      <div className="flex justify-center">
        <div className="max-w-2xl mx-4 sm:mx-10 cursor-pointer pt-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id || Number("1")}
              avatarUrl={blog.author.avatarUrl || "avatar"}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title || "How to get rich in 2024"}
              content={
                blog.content ||
                "To be financially secure, you need to keep investing"
              }
              timePublished={blog.timePublished || "June 13, 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
