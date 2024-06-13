import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@issac-shaik/epistle-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { toast } from "sonner";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  //Getting the zod inference from the npm pkg
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = res.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs/");
      toast(`Please wait while we sign you in!`, {
        position: "bottom-center",
        className: "max-w-fit",
      });
    } catch (e) {
      toast(`Incorrect Email Password.`, {
        position: "bottom-center",
        className: "max-w-fit",
      });
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center px-20 sm:px-10 md:px-10 lg:px-32 xl:px-52 bg-black text-slate-400">
      <div>
        <h1 className="text-3xl text-sla font-bold text-center">
          {type === "signup" ? "Create an account" : "Login to your account"}
        </h1>
        <p className="font-medium text-center mt-2 pb-10 text-amber-500">
          {type === "signup" ? "Already have one? " : "Don't have an account? "}
          {type === "signup" ? (
            <Link to={"/signin"} className="underline">
              Login
            </Link>
          ) : (
            <Link to={"/signup"} className="underline">
              Sign up
            </Link>
          )}
        </p>
        {type === "signup" ? (
          <LabelledInput
            label="Name"
            placeholder="Enter your name"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                name: e.target.value,
              });
            }}
          />
        ) : null}
        <LabelledInput
          label="Email"
          placeholder="example@gmail.com"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              username: e.target.value,
            });
          }}
        />
        <LabelledInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setPostInputs({
              ...postInputs,
              password: e.target.value,
            });
          }}
        />
        <button
          onClick={sendRequest}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-10 w-full font-semibold border-none"
        >
          {type === "signup" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div className="flex flex-col font-semibold pt-5">
      <label>{label}</label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="h-10 my-2 p-1 px-3 border border-gray-300 rounded-lg bg-slate-300 text-slate-800 placeholder-slate-500 focus:outline-none"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Auth;
