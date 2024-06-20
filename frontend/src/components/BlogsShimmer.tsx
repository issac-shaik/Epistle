const BlogsShimmer = () => {
  return (
    <div className="flex items-center justify-center bg-black text-white ">
      <div className="animate-pulse p-2 max-w-2xl w-full mt-10 sm:mx-2  mx-4">
        <div className="flex flex-row items-center mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div className="ml-2 flex-1">
            <div className="h-3 bg-gray-300 rounded w-20 mb-1"></div>
            <div className="h-3 bg-gray-300 rounded w-32"></div>
          </div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded mb-1"></div>
        <div className="h-3 bg-gray-300 rounded mb-1"></div>
        <div className="h-3 bg-gray-300 rounded mb-1 w-5/6"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default BlogsShimmer;
