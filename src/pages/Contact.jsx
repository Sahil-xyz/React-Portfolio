import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-zinc-50 via-fuchsia-100 to-teal-50 flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mt-8 flex flex-col items-center justify-center">
          <p className="text-slate-600">Reach me at:</p>
          <a
            href="mailto:sahiltambe185@gmail.com"
            className="text-teal-500 hover:underline"
          >
            sahiltambe185@gmail.com
          </a>
          <a className="text-teal-500 hover:underline">
            +91 9321563567
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
