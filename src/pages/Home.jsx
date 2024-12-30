import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-black bg-gradient-to-r from-black to-slate-800 overflow-y-scroll snap-y snap-mandatory">
      {/* Text Section */}
      <div className="flex flex-col items-center justify-center h-full w-full p-10 text-gray-50 text-center space-y-6 md:space-y-8 lg:space-y-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Hello, I am Sahil.
        </h2>
        <h5 className="text-6xl md:text-7xl lg:text-8xl font-extrabold">
          Web Developer
        </h5>
        <p className="text-lg md:text-xl lg:text-2xl">
          Transforming Ideas into{' '}
          <span className="text-slate-500">Digital Masterpieces.</span>
        </p>
        <div className="flex justify-center items-center gap-6 mt-5">
          <a href="https://github.com/Sahil-xyz"><FaGithub className="text-4xl md:text-5xl hover:text-slate-600 rounded-full" /></a>
          <a href="https://www.linkedin.com/in/sahil-tambe-647a99280/"><CiLinkedin className="text-4xl md:text-5xl hover:text-blue-500 rounded-full" /></a>
          <a href="https://www.instagram.com/_sahiil505/"><FaInstagram className="text-4xl md:text-5xl hover:text-fuchsia-600 rounded-full" /></a>
          <a href="https://leetcode.com/u/sahilxyz505/"><SiLeetcode className="text-4xl md:text-5xl hover:text-orange-400 rounded-full" /></a>
        </div>
        <div className="mt-5">
          <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 py-2 px-6 md:py-3 md:px-8 rounded-lg text-sm md:text-lg">
            Connect Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
