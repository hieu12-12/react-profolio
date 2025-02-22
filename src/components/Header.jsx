import React from "react";

function Header() {
  const header = {
    title: "Hieu Tran",
    tagline: "Aspiring Full Stack Developer",
  };

  return (
    <header className="w-full bg-gradient-to-r from-gray-900 to-black shadow-lg">
      <nav className="container mx-auto flex items-center py-5 px-8">
        {}
        <div className="flex-1">
          <a href="/" className="block">
            <h1 className="text-4xl font-black text-white tracking-widest">
              {header.title}
            </h1>
            <p className="text-lg text-gray-400 mt-1">
              {header.tagline}
            </p>
          </a>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block h-12 w-px bg-gray-700 mx-8"></div>

        {/* Right Section: Navigation */}
        <div className="flex space-x-8">
          <a
            href="/about"
            className="text-lg font-medium text-gray-300 hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="/portfolio"
            className="text-lg font-medium text-gray-300 hover:text-white transition duration-300"
          >
            Portfolio
          </a>
          <a
            href="/contact"
            className="text-lg font-medium text-gray-300 hover:text-white transition duration-300"
          >
            Contact
          </a>
          <a
            href="/resume"
            className="text-lg font-medium text-gray-300 hover:text-white transition duration-300"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
