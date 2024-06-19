import { Blog } from "../hooks";

export const MainBlog = ({ blog }: { blog: Blog }) => {
  const isoDateString = "2024-06-17T11:50:35.502Z";

  // Convert ISO string to Date object
  const date = new Date(isoDateString);

  // Create a new Date object for IST using UTC methods
  const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
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
    <div className="flex justify-center px-10 lg:px-48 mx-auto max-w-screen-lg text-slate-700">
      <div className=" mt-12">
        <div className="font-bold pb-10 text-5xl">{blog.title}</div>
        <div className="flex ">
          <div>
            <img
              className="w-12 h-12 rounded-full hover:cursor-pointer border"
              src={blog.author.avatarUrl}
              alt="https://api.dicebear.com/8.x/croodles/svg?seed=Anonymous"
            />
          </div>
          <div className="flex flex-col px-4 font-semibold">
            <div>{blog.author.name}</div>
            <div className="font-medium">{formattedDate}</div>
          </div>
        </div>
        <div className="pt-12">{blog.content}</div>
      </div>
    </div>
  );
};
