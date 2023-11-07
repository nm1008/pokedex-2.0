import logo from "../assets/images/pokeball.png";

const Navbar = () => {
  return (
    <header className="bg-gray-700 text-black-500 px-2 py-2 ">
      <nav className="flex items-center gap-[2.5vw]">
        <div className="flex gap-1">
          <a href="/" className="flex">
            <img src={logo} alt="pokeball" id="logo" className="w-8 mx-2" />
            <h1 className="text-white text-xl font-bold flex items-center">
              Poké App
            </h1>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
