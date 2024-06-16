import Epistle from "../Epistle.svg";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between bg-white">
      <div>
        <img
          className="w-16 h-16 rounded-full"
          src={Epistle}
          alt="Rounded avatar"
        />
      </div>
      <div>
        <img
          className="w-12 h-12 rounded-full mx-8 hover:cursor-pointer mt-2 border"
          src="https://api.dicebear.com/8.x/croodles/svg?seed="
          alt="Rounded avatar"
        />
      </div>
    </div>
  );
};
