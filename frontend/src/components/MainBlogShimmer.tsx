export const MainBlogShimmer = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 md:px-48 mx-auto max-w-screen-lg min-h-screen">
      <div className="mt-12 w-full">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded mb-11    "></div>
          <div className="flex border border-slate-400 rounded-3xl py-4 px-2 sm:max-w-72 mb-12">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div className="flex flex-col px-4 flex-1">
              <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-4/6"></div>
            <div className="h-4 bg-gray-300 rounded w-3/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlogShimmer;
