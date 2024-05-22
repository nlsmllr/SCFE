import React from 'react';
import '../../globals.css';

interface SidebarProps {
  categories: string[];
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ categories, isOpen, toggleSidebar }) => {
  return (
    <>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? '⮜' : '⮞'}
      </button>
      <nav className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <ul>
          {categories.map((category, index) => (
            <li className='menuBlock' key={index}>{category}</li>
          ))}
        </ul>
      </nav>
    </>
  );
};
