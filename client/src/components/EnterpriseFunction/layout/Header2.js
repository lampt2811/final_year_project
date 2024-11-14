import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showJobDropdown, setShowJobDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleJobDropdown = () => {
    setShowJobDropdown(!showJobDropdown);
  };

  return (
    <div className="sticky top-0 z-50">
      <header className="bg-slate-600 md:flex md:justify-between md:items-center md:px-4 md:py-0">
        <div className="flex items-center justify-between px-4 py-1 md:p-0">
          <div className="flex items-center space-x-4">
            <div className="w-11">
              <Link to={"/enterprisehomepage"} className="text-white font-semibold">VietRecruiment</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <i className="cursor-pointer ml-3 mr-2 fa-solid fa-bars scale-150"></i>
            </button>
          </div>
        </div>

        <nav
          className={`px-3 pt-1 pb-1 md:flex ${showMenu ? "block" : "hidden"}`}
        >
          <Link
            className="block w-fit px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 md:ml-4"
            to={"/enterpriselogin"}
          >
            Login
          </Link>

          <Link
            className="block w-fit px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 md:ml-4"
            to={"/enterpriseregister"}
          >
            Register
          </Link>

          <Link
            className="block w-fit px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 md:ml-4"
            to={"/userhomepage"}
          >
            Find jobs and apply CV
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
