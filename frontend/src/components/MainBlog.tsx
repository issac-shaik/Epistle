import { Blog } from "../hooks";

export const MainBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex justify-center px-10 lg:px-48 mx-auto max-w-screen-lg text-slate-700">
      <div className=" mt-12">
        <div className="font-bold pb-10 text-5xl">{blog.title}</div>
        <div className="flex ">
          <div>
            <img
              className="w-12 h-12 rounded-full hover:cursor-pointer border"
              src={`https://api.dicebear.com/8.x/croodles/svg?seed=${blog.author.avatarUrl}`}
              alt="https://api.dicebear.com/8.x/croodles/svg?seed=Anonymous"
            />
          </div>
          <div className="flex flex-col px-4 font-semibold">
            <div>{blog.author.name}</div>
            <div>{blog.timePublished}</div>
          </div>
        </div>
        <div className="pt-12">{blog.content}</div>
      </div>
    </div>
  );
};
