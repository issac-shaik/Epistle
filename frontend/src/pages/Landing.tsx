import { motion } from "framer-motion";
import Epistle from "../EpistleHome.png";
import LandingSS from "../LandingSS.png";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-zinc-900 text-white min-h-screen flex flex-col"
    >
      <nav className="border-b border-gray-700 flex items-center justify-between px-4 md:px-12 py-4">
        <div>
          <img className="h-16 w-16" src={Epistle} alt="Epistle" />
        </div>
        <div className="flex space-x-4">
          <Link to={"/signup"}>
            <button className="bg-white text-black py-2 px-6 rounded-md font-semibold hover:bg-gray-300 transition duration-300">
              Get started
            </button>
          </Link>
          <Link to={"/signin"}>
            <button className="bg-black text-white py-2 px-6 rounded-md font-semibold hover:bg-gray-600 transition duration-300">
              Sign In
            </button>
          </Link>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-between flex-grow mx-2 md:mx-32 min-h-screen">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:text-7xl text-5xl sm:mt-48 mt-52 font-bold text-center mb-8"
        >
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-500 mb-6">
            A simpler alternative to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-sky-600 block mt-6">
              Medium.
            </span>
          </p>
          <p className="lg:text-5xl text-2xl bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-500 pt-8 ">
            No hidden charges, everything's free.
          </p>
          <p className="block md:hidden lg:text-3xl text-xl bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-slate-500 pt-8 ">
            Get started now.
          </p>
        </motion.h1>
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-4xl"
          src={LandingSS}
          alt="Landing Screenshot"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-20"
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Landing;
