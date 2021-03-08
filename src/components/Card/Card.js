import React, { useState } from 'react';
import './Card.css';

export default function Card({ image, targetName, id }) {
  const [isTarget, setIsTarget] = useState(false);
  const imgClass = `card__img card ${isTarget && 'card__img_active'}`;
  function onClickImg() {
    if (targetName.includes(image.name)) {
      setIsTarget(true);
      document.getElementById(`cardimg-${id}`).style.pointerEvents = 'none';
    }
  }

  return (
    <img
      id={`cardimg-${id}`}
      src={image.src}
      alt={image.name}
      className={imgClass}
      onClick={onClickImg}
    />
  );
}
