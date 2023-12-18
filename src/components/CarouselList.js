import { v4 as uuidv4 } from 'uuid';

import { Card } from './Card';

export const carouselImages = [
  {
    key: uuidv4(),
    content: <Card src='images/image1.png' caption='Modern kitchen utensils' />,
  },
  {
    key: uuidv4(),
    content: <Card src='images/image2.png' caption='White flower vase' />,
  },
  {
    key: uuidv4(),
    content: (
      <Card src='images/image3.png' caption='Modern black flower vase' />
    ),
  },
  {
    key: uuidv4(),
    content: <Card src='images/image4.png' caption='Combo of 3 flower vases' />,
  },
  {
    key: uuidv4(),
    content: <Card src='images/image5.png' caption='Modern grey flower vase' />,
  },
  {
    key: uuidv4(),
    content: (
      <Card src='images/image6.png' caption='White zero-shaped flower vase' />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card
        src='images/image7.png'
        caption='Combo of modern white flower vases'
      />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card src='images/image8.png' caption='Adorable pink flower vase' />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card src='images/image9.png' caption='Beautiful white flower vase' />
    ),
  },
  {
    key: uuidv4(),
    content: (
      <Card src='images/image10.png' caption='Beautiful white flower vase' />
    ),
  },
];
