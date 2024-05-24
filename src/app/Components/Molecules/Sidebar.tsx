// src/components/Sidebar.tsx

import React from 'react';
import '../../globals.css';
import { Categories } from '../../../Constants/categories';

interface SidebarProps {
  categories: Categories[];
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
