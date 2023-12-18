import React from 'react';

import { SearchIcon } from './SearchIcon';
import { Menu } from './Menu';

import './Header.css';

const Header = () => {
  const categories = [
    'Home',
    'Electronics',
    'Books',
    'Music',
    'Movies',
    'Clothes',
    'Games',
    'Furniture',
    'Travel',
    'Botanical',
    'Category Name',
  ];

  return (
    <nav>
      <header>
        <div className='content'>
          <a className='brand' href='/'>
            <img src='logo.png' alt='' className='logo' />
            <span className='company-name'>E-COMM</span>
          </a>
          <Menu categories={categories} />
          <div className='search-box'>
            <SearchIcon />
            <input
              type='text'
              className='search-input'
              placeholder='Search something'
            />
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Header;
