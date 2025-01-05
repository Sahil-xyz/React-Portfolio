import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">About Me</h2>
            <p className="text-sm">
              Hi, I'm a passionate web developer creating seamless digital experiences. Let's build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
            <li>
                <a href="#home" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">Projects</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Contact Me</h2>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:your-email@example.com" className="hover:text-white">sahiltambe185@gmail.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-white">+91 9321563567</a></li>
              <li>
                <p>Social : </p>  
                <a href="https://www.linkedin.com/in/sahil-tambe-647a99280/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn </a>, 
                <a href="https://github.com/Sahil-xyz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
          © 2025 Sahil xyz. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
