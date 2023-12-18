import React, { useEffect, useState } from 'react';

export const Menu = ({ categories }) => {
  const [windowWidth, setWindowWidth] = useState(window.outerWidth);
  const [visibleCount, setVisibleCount] = useState(7);
  const [visibleItems, setVisibleItems] = useState([]);
  const [moreItems, setMoreItems] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.outerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 576) {
      setVisibleCount(1);
    } else if (windowWidth <= 720) {
      setVisibleCount(2);
    } else if (windowWidth < 1024) {
      setVisibleCount(3);
    } else if (windowWidth < 1200) {
      setVisibleCount(5);
    } else if (windowWidth < 1400) {
      setVisibleCount(6);
    } else {
      setVisibleCount(7);
    }
  }, [windowWidth, categories]);

  useEffect(() => {
    setVisibleItems(categories.slice(0, visibleCount));
    setMoreItems(categories.slice(visibleCount));
  }, [visibleCount, categories]);

  const handleMoreClick = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <ul className='menu'>
      {visibleItems.map((item, index) => (
        <li key={index} className='menu-item'>
          {item}
        </li>
      ))}
      {moreItems.length > 0 && (
        <li key='more' className='menu-item' onClick={handleMoreClick}>
          More &#9662;
          {openDropdown && moreItems.length > 0 && (
            <ul className='more-menu'>
              {moreItems.map((category, index) => (
                <li key={index} className='more menu-item'>
                  {category}
                </li>
              ))}
            </ul>
          )}
        </li>
      )}
    </ul>
  );
};
