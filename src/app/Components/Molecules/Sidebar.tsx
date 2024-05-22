import React from 'react';
import '../../globals.css';

interface SidebarProps {
  categories: string[];
}

export const Sidebar: React.FC<SidebarProps> = ({ categories }) => {
  return (
    <div className="sidebar-container group">
      <div className="hover-area">
        <div className='lineContainer'>
          <div className="custom-arrow" />
        </div>
      </div>
      <nav className="sidebar">
        <ul>
          {categories.map((category, index) => (
            <li className='menuBlock' key={index}>
              <a href={`#${category}`}>{category}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
