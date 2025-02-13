import React from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import CartShop from "../sections/CartShop";

const Header = () => {
  return (
    <header className="bg-white text-cyan-800 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <a href="#" className="mr-4">
            <img
              src="/images/logoipsum-345.svg"
              alt="Logo"
              className="w-[150px] md:w-[200px]"
            />
          </a>
        </div>

        <div className="hidden md:flex space-x-8 ">
          <a
            href="#"
            className=" hover:text-cyan-600 transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className=" hover:text-cyan-600 transition duration-300"
          >
            Shop
          </a>
          <a
            href="#"
            className=" hover:text-cyan-600 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className=" hover:text-cyan-600 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <CiSearch className="size-7 text-cyan-800 hover:text-cyan-600 cursor-pointer transition duration-300" />
          <CiUser className="size-7 text-cyan-800 hover:text-cyan-600 cursor-pointer transition duration-300" />
          <CartShop itemCount={3} />
        </div>
      </nav>
    </header>
  );
};

export default Header;