import { Link } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { BackgroundBeams } from "../components/ui/backgroundbeams";

export function Publish() {
  return (
    <div className="h-screen flex flex-col">
      <Link to={"/blogs"}>
        <Appbar />
      </Link>
      <div className="h-lvh w-full bg-neutral-950 relative flex flex-col items-center justify-start antialiased pt-16">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-sky-600  text-center font-sans font-bold">
            Start writing on Epistle now
          </h1>

          <input
            type="text"
            placeholder="Enter the blog title"
            className="mt-10 py-2 px-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10  bg-neutral-700 text-neutral-200 placeholder:text-neutral-200"
          />
          <textarea
            className=" mt-10 relative z-10 bg-neutral-700 h-[150px] min-h-[20px] w-full resize-none rounded-lg px-3 py-2.5 font-sans text-sm font-normal text-neutral-200  placeholder:text-neutral-200 placeholder:font-medium placeholder:text-base"
            placeholder="Enter the blog content here"
          ></textarea>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}
