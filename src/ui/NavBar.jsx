function NavBar() {
  return (
    <div className="flex flex-row justify-between bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-200 text-xl py-5 px-10 border-b border-b-gray-700">
      <div></div>
      <div className="flex gap-24">
        <div>about</div>
        <div>work</div>
        <div>contact</div>
      </div>
    </div>
  );
}

export default NavBar;
