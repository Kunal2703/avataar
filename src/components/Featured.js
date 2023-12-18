import React from 'react';

import { MyCarousel } from './Carousel';

import { carouselImages } from './CarouselList';

import './Featured.css';

export const Featured = () => {
  return (
    <section className='featured'>
      <h1 className='heading'>Featured Products</h1>
      <h2 className='sub-heading'>
        Explore and discover a variety of products
      </h2>
      <MyCarousel
        cards={carouselImages}
        height='500px'
        width='50%'
        margin='0 auto'
        offset={3}
        showArrows={true}
      />
    </section>
  );
};
