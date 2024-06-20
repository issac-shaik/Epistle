import { Blog } from "../hooks";

export const MainBlog = ({ blog }: { blog: Blog }) => {
  const isoDateString = blog.timePublished;

  // Convert ISO string to Date object
  const date = new Date(isoDateString);

  // Calculate IST offset (UTC+5:30)
  const istOffsetMinutes = 5 * 60 + 30; // IST is UTC+5:30
  const istOffsetMilliseconds = istOffsetMinutes * 60 * 1000;

  // Create a new Date object for IST by adding the offset to UTC time
  const istDate = new Date(date.getTime() + istOffsetMilliseconds);

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
    <div className="flex justify-center px-10 md:px-48 mx-auto max-w-screen-lg h-">
      <div className=" mt-12">
        <div className="font-bold pb-10 text-5xl">{blog.title}</div>
        <div className="flex border border-slate-400 rounded-3xl py-4 px-2 sm:max-w-72">
          <div>
            <img
              className="w-12 h-12 rounded-full  border bg-white"
              src={blog.author.avatarUrl}
              alt="https://api.dicebear.com/8.x/croodles/svg?seed=Anonymous"
            />
          </div>
          <div className="flex flex-col px-4 font-semibold">
            <div className="underline">{blog.author.name}</div>
            <div className="font-medium">{formattedDate}</div>
          </div>
        </div>
        <div
          className="pt-12"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
};
