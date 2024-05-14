import React, { useState } from 'react';
import '../../globals.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="header flex justify-between items-center p-4 bg-zinc-800 text-white">
      <h2 className="inter-h5 md:pl-14 ">Smart Cities Front End</h2>
      <div className="flex items-center md:pr-14">
        <div className={`absolute md:relative bg-zinc-700 md:bg-transparent w-full md:w-auto left-0 md:left-auto right-0 bg-opacity-90 md:flex md:flex-row transition-transform duration-3000 ease-in ${menuOpen ? 'md:top-0 top-10' : 'top-[-490px]'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-4 md:mr-4">
            <li className="p-4 md:p-0 md:mx-4 flex justify-center md:justify-start">
              <a href="#home" className="menuBlock">Home</a>
            </li>
            <li className="p-4 md:p-0 md:mx-4 flex justify-center md:justify-start">
              <a href="#about" className="menuBlock">About</a>
            </li>
            <li className="p-4 md:p-0 md:mx-4 flex justify-center md:justify-start">
              <a href="#services" className="menuBlock">Services</a>
            </li>
            <li className="p-4 md:p-0 md:mx-4 flex justify-center md:justify-start">
              <a href="#contact" className="menuBlock">Contact</a>
            </li>
          </ul>
        </div>
        <button onClick={toggleMenu} className="inter-body-base md:ml-4">
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </nav>
  );
};
