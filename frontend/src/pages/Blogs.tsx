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
      <Appbar />
      <div className="flex justify-center">
        <div className="max-w-2xl">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              avatarUrl={blog.author.avatarUrl}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              timePublished={blog.timePublished || "June 13, 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
