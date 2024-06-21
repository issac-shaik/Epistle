import { Appbar } from "../components/Appbar";
import { MainBlog } from "../components/MainBlog";
import MainBlogShimmer from "../components/MainBlogShimmer";
import { useBlog } from "../hooks";
import { Link, useParams } from "react-router-dom";
export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: Number(id || ""),
  });
  if (loading || !blog) {
    return (
      <div>
        <Appbar />
        <MainBlogShimmer />
      </div>
    );
  }
  return (
    <div className="h-screen">
      <Link to={"/blogs"}>
        <Appbar />
      </Link>
      <MainBlog blog={blog} />
    </div>
  );
};
