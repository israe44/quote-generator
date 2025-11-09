// components/Navbar.js
import React from 'react';

function Navbar({ onCategoryChange, currentCategory }) {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'love', name: 'Love' },
    { id: 'motivation', name: 'Motivation' },
    { id: 'wisdom', name: 'Wisdom' },
    { id: 'creativity', name: 'Creativity' }
  ];
  
  return (
    <nav>
      <ul className="nav-list">
        {categories.map((category) => (
          <li 
            key={category.id}
            className={currentCategory === category.id ? 'active' : ''}
            onClick={() => onCategoryChange(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;