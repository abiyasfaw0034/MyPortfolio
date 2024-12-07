function NavBar() {
  const handleScrollToSection = (sectionId) => {
    console.log(`Scrolling to ${sectionId}`);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-row justify-between bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-200 text-xl py-5 px-10 border-b border-b-gray-700">
      <div></div>
      <div className="flex gap-24">
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
    </div>
  );
}

export default NavBar;
