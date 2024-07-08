import React, { useState } from 'react';
import '../../globals.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../SC_logo_header.svg'

export const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="header">
      <div className="flex items-baseline">
        <a href="/"><Image src={logo} alt={'logo no text'} height={70}/></a>
      </div>
      <div className="flex items-end">
        <div className={`absolute md:relative bg-zinc-700 md:bg-transparent w-full md:w-auto left-0 md:left-auto right-0 bg-opacity-90 md:flex md:flex-row transition-transform duration-3000 ease-in ${menuOpen ? 'md:top-0 top-14' : 'top-[-490px]'}`}>
          <ul className="flex flex-col md:flex-row justify-end">
            <li className="p-4 md:p-0 md:mx-4 flex justify-center md:justify-start">
              <Link href="/" className="menuBlock">Home</Link>
            </li>
            <li className="p-4 md:p-0 md:mx-4 flex justify-center md:justify-start">
              <Link href="#about" className="menuBlock">Über uns</Link>
            </li>
            <li className="p-4 md:p-0 md:mx-4 flex justify-center md:justify-start">
              <Link href="#services" className="menuBlock">Service</Link>
            </li>
            <li className="p-4 md:p-0 md:mx-4 flex justify-center md:justify-start">
              <Link href="/Contact" className="menuBlock">Kontakt</Link>
            </li>
          </ul>
        </div>
        <button onClick={toggleMenu} className="relative inter-body-base md:ml-4 focus:outline-none" style={{ width: '25px', height: '40px' }}>
          <span className="absolute inset-0 flex justify-center items-end">
            {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </span>
        </button>
      </div>
    </nav>
  );
};