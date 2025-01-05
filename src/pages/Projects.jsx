import React from "react";
import footballProject from "../assets/football_pro.png";
import portfolioProject from "../assets/portfolio_pro.png";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-50 via-fuchsia-100 to-teal-50 py-10">
      <div className="container mx-auto px-5">
        <h1 className="text-7xl font-bold text-center bg-gradient-to-br from-red-600 to-slate-700 bg-clip-text text-transparent mb-10">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:p-10">
          {/* Football Academy Project */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-slate-700">
              <img
                src={footballProject}
                alt="Football Academy Website"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 p-4 pt-0"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-700 mb-3">
                  Football Academy Website
                </h2>
                <p className="text-slate-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  velit dolores ad aut officiis nostrum rerum quaerat ab error
                  optio!
                </p>
                <button className="px-4 py-2 bg-slate-900 text-white rounded border-2 border-slate-900 hover:bg-slate-100 hover:text-slate-950 hover:border-2 hover:border-slate-950 transition-colors">
                  <a className="h-full w-full" href="https://rising-sun-fa.vercel.app/">View Project</a>
                </button>
              </div>
            </div>
          </div>

          {/* Portfolio Project */}
          <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-slate-700">
              <img
                src={portfolioProject}
                alt="Personal Portfolio Website"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 p-4"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-700 mb-3">
                  Personal Portfolio Website
                </h2>
                <p className="text-slate-600 text-sm mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                  fugit iste dolore laboriosam blanditiis sint numquam eligendi
                  voluptatem dolorum alias?
                </p>
                <button className="px-4 py-2 bg-slate-900 text-white rounded border-2 border-slate-900 hover:bg-slate-100 hover:text-slate-950 hover:border-2 hover:border-slate-950 transition-colors">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
