import { Appbar } from "../components/Appbar";
import { MainBlog } from "../components/MainBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: Number(id || ""),
  });
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="h-screen">
      <Appbar />
      <MainBlog blog={blog} />
    </div>
  );
};
