import { Link } from "react-router-dom";
import Epistle from "../Epistle.svg";
import Profile_icon from "../Profile_icon.png";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Appbar = () => {
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    const res = axios.get(`${BACKEND_URL}/`);
  });
  return (
    <div className="border-b flex justify-between bg-slate-100">
      <div>
        <img
          className="w-16 h-16 rounded-full cursor-pointer"
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
              className="select-none rounded-full bg-gradient-to-tr from-sky-400 to-sky-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-200/10 transition-all hover:shadow-lg hover:shadow-gray-200/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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
