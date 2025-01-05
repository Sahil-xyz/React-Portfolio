import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/400"
              alt="Your Portrait"
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-12 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              About Me
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hi there! I'm <span className="font-semibold text-gray-800">Sahil</span>, a passionate web developer dedicated to crafting exceptional digital experiences. With a strong background in front-end and back-end development, I specialize in creating responsive and user-friendly websites that leave a lasting impression.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Over the past 2-3 years, I have honed my skills in technologies like HTML, CSS, Javascript, React, Tailwind CSS, Node.js, MongoDB, Java, Github, Figma, etc. I'm constantly exploring new tools and techniques to stay ahead in the ever-evolving world of web development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beyond coding, I enjoy exploring nature, playing volleyball, and trekking. Let's collaborate to bring your ideas to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
