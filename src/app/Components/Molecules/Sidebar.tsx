// src/components/Sidebar.tsx

import React from 'react';
import '../../globals.css';
import { Categories } from '../../../Constants/categories';

interface SidebarProps {
  categories: (Categories | 'All')[];
  onCategorySelect: (category: Categories | 'All') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ categories, onCategorySelect }) => {
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
            <li className='menuBlock' key={index} onClick={() => onCategorySelect(category)}>
              <a href={`#${category}`}>{category}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
