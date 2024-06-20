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
  const isoDateString = timePublished;

  // Convert ISO string to Date object
  const date = new Date(isoDateString);

  // Create a new Date object for IST using UTC methods
  const istOffset = 60 * 1000; // IST offset in milliseconds
  const istDate = new Date(date.getTime() + istOffset);

  // Format the date to a human-readable string without the time zone and seconds
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata", // Ensure the correct time zone is used for formatting
  };

  const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(
    istDate
  );
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-b-slate-200 mt-4 bg-black text-white">
        <div className="flex flex-row items-center">
          <div>
            <img
              className="w-12 h-12 rounded-full hover:cursor-pointer border bg-slate-200"
              src={avatarUrl}
              alt="https://api.dicebear.com/8.x/croodles/svg?seed=Anonymous"
            />
          </div>
          <div className="font-medium text-md pl-2">{authorName}</div>
          <div className="pl-2 text-slate-500 text-md">
            {" "}
            <span className="font-bold">·</span> {formattedDate}
          </div>
        </div>

        <div className="font-bold text-2xl text-sky-400">
          {title.length > 50 ? title.slice(0, 100) + "..." : title}
        </div>
        <div className="font-normal pt-2">
          {content.length > 200 ? content.slice(0, 200) + "..." : content}
        </div>
        <div className="font-light text-sm pt-4 pb-4">
          {content.length > 1000 ? (
            <div>{Math.ceil(content.length / 1500)} mins read </div>
          ) : (
            <div> Less than a min read </div>
          )}
        </div>
      </div>
    </Link>
  );
};
