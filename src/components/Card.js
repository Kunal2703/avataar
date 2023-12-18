import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import './Card.css';

export const Card = (props) => {
  const [show, setShown] = useState(false);

  const styleProps = useSpring({
    transform: show ? 'scale(1.03)' : 'scale(1)',
    boxShadow: show
      ? '0 20px 25px rgb(0 0 0 / 25%)'
      : '0 2px 10px rgb(0 0 0 / 8%)',
  });

  return (
    <div>
      <animated.div
        className='card'
        style={styleProps}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        <img src={props.src} alt={props.caption} className='card-image' />
        <div className='caption'>
          <p>{props.caption}</p>
        </div>
      </animated.div>
    </div>
  );
}
