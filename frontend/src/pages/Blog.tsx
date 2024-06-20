import { Appbar } from "../components/Appbar";
import MainBlogShimmer from "../components/MainBlogShimmer";
import { MainBlog } from "../components/MainBlog";
import { useBlog } from "../hooks";
import { Link, useParams } from "react-router-dom";
export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: Number(id || ""),
  });
  if (loading) {
    return (
      <div>
        <MainBlogShimmer />
      </div>
    );
  }
  return (
    <div className="h-screen">
      <Link to={"/blogs"}>
        <Appbar blog={blog} />
      </Link>
      <MainBlog blog={blog} />
    </div>
  );
};
