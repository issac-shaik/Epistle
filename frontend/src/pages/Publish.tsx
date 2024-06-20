import { Link, useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { BackgroundBeams } from "../components/ui/backgroundbeams";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import {
  Editor,
  BtnBold,
  BtnItalic,
  EditorProvider,
  Toolbar,
  BtnUnderline,
  BtnStrikeThrough,
  BtnLink,
  BtnBulletList,
  BtnNumberedList,
} from "react-simple-wysiwyg";

export function Publish() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [timePublished, setTimePublished] = useState("");
  const navigate = useNavigate();

  function onChange(e) {
    setDescription(e.target.value);
  }
  return (
    <div className="h-screen flex flex-col">
      <Link to={"/blogs"}>
        <Appbar />
      </Link>
      <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-start antialiased pt-4">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-sky-600  text-center font-sans font-bold">
            Start writing on Epistle now
          </h1>

          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Enter the blog title"
            className="mt-10 py-2 px-4 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10  bg-neutral-700 text-neutral-200 placeholder:text-neutral-200"
          />
          {/* TEXT EDITOR */}
          <div className="mt-5 relative z-10  text-neutral-200">
            <div className="text-neutral-200 font-xl pb-3">
              Enter the blog content:
            </div>
            <EditorProvider>
              <div
                className=""
                style={{
                  maxHeight: "250px",
                  overflowY: "auto",
                }}
              >
                <Editor
                  containerProps={{
                    style: { resize: "vertical", backgroundColor: "#3f3f46" },
                  }}
                  value={description}
                  onChange={onChange}
                >
                  <Toolbar>
                    <BtnBold />
                    <BtnItalic />
                    <BtnUnderline />
                    <BtnStrikeThrough />
                    <BtnBulletList />
                    <BtnNumberedList />
                    <BtnLink />
                  </Toolbar>
                </Editor>
              </div>
            </EditorProvider>
          </div>

          {/* Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={async () => {
                const res = await axios.post(
                  `${BACKEND_URL}/api/v1/blog`,
                  {
                    title,
                    content: description,
                    timePublished,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                navigate(`/blog/${res.data.id}`);
              }}
              className="shadow-[inset_0_0_0_2px_#475569] font-semibold relative z-10 text-white px-12 py-4 rounded-full tracking-widest bg-transparent hover:border-none hover:bg-sky-400 hover:text-white transition duration-200"
            >
              Publish
            </button>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}
