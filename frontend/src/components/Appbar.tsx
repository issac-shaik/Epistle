import { Link } from "react-router-dom";
import Epistle from "../Epistle.png";
import { useEffect, useState } from "react";
import { decodeToken, fetchUserData } from "./utils/auth";

export const Appbar = () => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [name, setName] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUserAvatar = async () => {
      if (token) {
        const userId = decodeToken(token);
        if (userId) {
          const userData = await fetchUserData(userId);
          if (userData && userData.data.avatarUrl && userData.data.name) {
            setAvatarUrl(userData.data.avatarUrl);
            setName(userData.data.name);
          }
        }
      }
    };

    getUserAvatar();
  }, [token]);
  if (!avatarUrl) {
    return <p>Loading...</p>;
  }

  return (
    <div className=" border-b flex items-center   justify-between bg-white rounded-md mx-4 mt-6">
      <div>
        <img
          className="m-4 h-11 w-32 cursor-pointer"
          src={Epistle}
          alt="Rounded avatar"
        />
      </div>
      <div className="flex">
        <div className="justify-center text-center items-center">
          <Link to={"/publish"}>
            <button
              className="my-6 select-none rounded-md bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-200/10 transition-all hover:shadow-lg hover:shadow-gray-200/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Create
            </button>
          </Link>
        </div>
        <div className="flex flex-col">
          <img
            className="w-16 h-16 mx-4 justify-center border rounded-full"
            src={avatarUrl}
            alt="Rounded avatar"
          />
          <h2 className="text-center mx-4 font-semibold text-black text-sm mr-4">
            {name}
          </h2>
        </div>
      </div>
    </div>
  );
};
