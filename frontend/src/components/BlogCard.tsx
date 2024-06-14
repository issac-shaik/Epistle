import axios from "axios";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  avatarUrl: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  avatarUrl,
}: BlogCardProps) => {
  //const getAvatarUrl = axios.get("")
  return (
    <div className="border-b border-b-slate-200 p-4">
      <div className="flex flex-row items-center">
        <img
          className="w-12 h-12 rounded-full"
          src="https://api.dicebear.com/8.x/croodles/svg?seed=Scar"
          alt="Rounded avatar"
        />
        <div className="font-medium text-md pl-2">{authorName}</div>
        <div className="pl-2 text-slate-500 text-md">
          {" "}
          <span className="font-bold">·</span> {publishedDate}
        </div>
      </div>

      <div className="font-bold text-2xl">
        {title.length > 50 ? title.slice(0, 100) + "..." : title}
      </div>
      <div className="font-normal pt-2">
        {content.length > 200 ? content.slice(0, 200) + "..." : content}
      </div>
      <div className="font-light text-sm pt-4 ">
        {content.length > 250 ? (
          <div>{Math.ceil(content.length / 250)} mins read </div>
        ) : (
          <div> Less than a min read </div>
        )}
      </div>
    </div>
  );
};
