function Header() {
  const header = {
    title: "Sara J. Ryan",
    tagline: "Aspiring Full Stack Developer",
  };

  return (
    <header>
      <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-gray-900 shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 inner">
          <a className="text-4xl no-underline text-blue-400 font-serif">{header.title}</a>
          <br />
          <span className="font-mono text-sm text-gray-500">{header.tagline}</span>
        </div>
        <aside className="sm:mb-0 self-center">
          <a href="/" className="text-md no-underline text-gray-300 hover:text-blue-400 ml-2 px-1">About</a>
          <a href="/portfolio" className="text-md no-underline text-gray-300 hover:text-blue-400 ml-2 px-1">Portfolio</a>
          <a href="/contact" className="text-md no-underline text-gray-300 hover:text-blue-400 ml-2 px-1">Contact</a>
          <a href="/resume" className="text-md no-underline text-gray-300 hover:text-blue-400 ml-2 px-1">Resume</a>
        </aside>
      </nav>
    </header>
  );
}

export default Header;