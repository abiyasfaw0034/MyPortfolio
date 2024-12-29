import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    console.log(`Scrolling to ${sectionId}`);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex flex-row justify-between bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-200 text-xl py-5 px-10 border-b border-b-gray-700">
        <a
          className="text-teal-400 font-bold text-3xl hover:cursor-pointer"
          onClick={() => handleScrollToSection("front")}
        >
          &lt;/A&gt;
        </a>
        <div className="hidden md:flex gap-24">
          <div
            onClick={() => handleScrollToSection("about")}
            className="cursor-pointer hover:text-teal-400 transition-colors"
          >
            About
          </div>
          <div
            onClick={() => handleScrollToSection("work")}
            className="cursor-pointer hover:text-teal-400 transition-colors"
          >
            Work
          </div>
          <div
            onClick={() => handleScrollToSection("contact")}
            className="cursor-pointer hover:text-teal-400 transition-colors"
          >
            Contact
          </div>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-teal-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Sidebar Menu */}
      {menuOpen && (
        <div className="absolute z-10 top-0 right-0 bg-gray-900 w-64 h-screen text-gray-200 flex flex-col items-start px-5 py-10 shadow-lg md:hidden">
          <div
            onClick={() => handleScrollToSection("about")}
            className="cursor-pointer hover:text-teal-400 transition-colors mb-5"
          >
            About
          </div>
          <div
            onClick={() => handleScrollToSection("work")}
            className="cursor-pointer hover:text-teal-400 transition-colors mb-5"
          >
            Work
          </div>
          <div
            onClick={() => handleScrollToSection("contact")}
            className="cursor-pointer hover:text-teal-400 transition-colors"
          >
            Contact
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
