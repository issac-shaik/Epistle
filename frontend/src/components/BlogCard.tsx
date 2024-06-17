import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  avatarUrl: string;
  id: number;
  timePublished: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  timePublished,
  avatarUrl,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-b-slate-200 p-4 cursor-pointer">
        <div className="flex flex-row items-center">
          <div>
            <img
              className="w-12 h-12 rounded-full hover:cursor-pointer border"
              src={`https://api.dicebear.com/8.x/croodles/svg?seed=${avatarUrl}`}
              alt="https://api.dicebear.com/8.x/croodles/svg?seed=Anonymous"
            />
          </div>
          <div className="font-medium text-md pl-2">{authorName}</div>
          <div className="pl-2 text-slate-500 text-md">
            {" "}
            <span className="font-bold">·</span> {timePublished}
          </div>
        </div>

        <div className="font-bold text-2xl">
          {title.length > 50 ? title.slice(0, 100) + "..." : title}
        </div>
        <div className="font-normal pt-2">
          {content.length > 200 ? content.slice(0, 200) + "..." : content}
        </div>
        <div className="font-light text-sm pt-4 ">
          {content.length > 1000 ? (
            <div>{Math.ceil(content.length / 1000)} mins read </div>
          ) : (
            <div> Less than a min read </div>
          )}
        </div>
      </div>
    </Link>
  );
};
