
import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-6 md:px-12 lg:px-24 text-center text-sm text-slate">
      <p>
        Designed & Built with ❤️ by{" "}
        <a 
          href="#" 
          className="text-teal hover:underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Engineering Student
        </a>
      </p>
      <p className="mt-2">© {new Date().getFullYear()} All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
