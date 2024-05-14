import React, { useState } from 'react';
import '../../globals.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Ensure you have react-icons installed

export const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="header flex justify-between items-center p-4 bg-zinc-800 text-white">
      <h2 className="inter-h5">Welcome to the Smart Cities Front End</h2>
      <div>
        <button onClick={toggleMenu} className="inter-body-base md:pr-4">
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      <ul className={`absolute bg-zinc-700 w-full left-0 bg-opacity-90 transition-transform duration-300 ease-in ${menuOpen ? 'md:top-16 top-11' : 'top-[-490px]'}`}>
        <li className="p-4 flex justify-center">
          <a href="#home" className="menuBlock">Home</a>
        </li>
        <li className="p-4 flex justify-center">
          <a href="#about" className="menuBlock">About</a>
        </li>
        <li className="p-4 flex justify-center">
          <a href="#services" className="menuBlock">Services</a>
        </li>
        <li className="p-4 flex justify-center">
          <a href="#contact" className="menuBlock">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
