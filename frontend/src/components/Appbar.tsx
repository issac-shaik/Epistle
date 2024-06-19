import { Link } from "react-router-dom";
import Epistle from "../Epistle.svg";
import Profile_icon from "../Profile_icon.png";

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
      <div className="flex">
        {/* <img
          className="w-12 h-12 rounded-full mx-8 hover:cursor-pointer mt-2 border"
          src="https://api.dicebear.com/8.x/croodles/svg?seed=hello"
          alt="Rounded avatar"
        /> */}
        <div className="mt-3">
          <Link to={"/publish"}>
            <button
              className="select-none rounded-full bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Create
            </button>
          </Link>
        </div>

        <img
          className="w-10 h-10 mx-8 hover:cursor-pointer mt-4"
          src={Profile_icon}
          alt="user"
        />
      </div>
    </div>
  );
};
