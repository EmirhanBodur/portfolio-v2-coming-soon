import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-4">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/emirhanbdr34/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
        aria-label="Instagram"
      >
        <FaInstagram className="text-pink-500 text-2xl group-hover:scale-110 transition-transform" />
        <span className="absolute -bottom-7 opacity-0 group-hover:opacity-100 text-xs text-gray-300 transition-all">
          Instagram
        </span>
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com/emirhanndev"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-black transition-all duration-300"
        aria-label="X (Twitter)"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-current text-gray-300 group-hover:text-white transition-colors"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        <span className="absolute -bottom-7 opacity-0 group-hover:opacity-100 text-xs text-gray-300 transition-all">
          X (Twitter)
        </span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/emirhanbodur/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-blue-600 transition-all duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-white text-2xl" />
        <span className="absolute -bottom-7 opacity-0 group-hover:opacity-100 text-xs text-gray-300 transition-all">
          LinkedIn
        </span>
      </a>
    </div>
  );
};

export default SocialLinks;
