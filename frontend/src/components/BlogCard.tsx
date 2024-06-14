import { Avatar } from "./Avatar";

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
  console.log(avatarUrl);
  return (
    <div>
      <div>{avatarUrl}</div>
      <div>
        {authorName} . {publishedDate}
      </div>
      <div>{title}</div>
      <div>
        {content.length > 100 ? content.slice(0, 100) + "..." : content}
      </div>
      <div>
        {content.length > 250 ? (
          <div>{Math.ceil(content.length / 250)} mins read </div>
        ) : (
          <div> Less than a min read </div>
        )}
      </div>
      <div className="border border-b-slate-400 h-1 w-full"></div>
    </div>
  );
};
