import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

export default function CardList({ images, targetName }) {
  return (
    <ul className="cardlist ">
      <div className="cardlist__bg"></div>
      {images.map((image, i) => (
        <Card image={image} key={i} id={i} targetName={targetName} />
      ))}
    </ul>
  );
}
