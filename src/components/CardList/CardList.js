import React from 'react';
import './CardList.css';
import Card from '../Card/Card';

export default function CardList({ images, targetArry }) {
  return (
    <div className="cardlist-box">
      <ul className="cardlist ">
        <div className="cardlist__bg"></div>
        {images.map((image, i) => (
          <Card image={image} key={i} id={i} targetArry={targetArry} />
        ))}
      </ul>
    </div>
  );
}
