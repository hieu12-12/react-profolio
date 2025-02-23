import React from 'react';

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 shadow-lg py-8 border-t border-gray-700">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between items-center">
        {/* Social Links Section */}
        <div className="flex flex-col items-start text-left space-y-3">
          <h3 className="text-2xl font-bold tracking-wide text-white">Stay Connected</h3>
          <div className="flex space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/hieu12-12"
              className="transform transition duration-300 hover:scale-110 hover:text-gray-400"
              aria-label="GitHub"
            >
              <svg fill="currentColor" className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* Stack Overflow */}
            <a
              href="https://stackoverflow.com/users/29759789/hieu-tran"
              className="transform transition duration-300 hover:scale-110 hover:text-gray-400"
              aria-label="Stack Overflow"
            >
              <svg fill="currentColor" className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24">
                <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/hieu-tran-86684420b/"
              className="transform transition duration-300 hover:scale-110 hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <svg fill="currentColor" className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="border-l border-gray-500 h-16 mx-6"></div>
        <div className="text-right text-gray-300 text-sm flex flex-col items-center">
          <p className="text-sm font-semibold text-gray-400 tracking-wide">Designed with Passion by <span className="text-gray-200">Hieu Tran</span></p>
          <p className="text-xs font-medium text-gray-500 mt-1">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
