
import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-10 py-6 px-6 md:px-12 lg:px-24 text-center text-sm text-slate">
      <div className="pb-4">
        <div className="w-12 h-1 bg-teal/30 mx-auto rounded-full mb-4"></div>
      </div>
      <p className="mb-2">
        Designed & Built with{" "}
        <span className="inline-block animate-pulse-slow text-teal">❤️</span> by{" "}
        <a 
          href="#about" 
          className="text-teal hover:underline font-medium transition-colors"
        >
          Vansh Goyal
        </a>
      </p>
      <p>© {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
