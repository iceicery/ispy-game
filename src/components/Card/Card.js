import React, { useState } from 'react';
import './Card.css';

export default function Card({ image, id, targetArry }) {
  const [isTarget, setIsTarget] = useState(false);
  const targetName = [];
  targetArry.forEach((item) => targetName.push(item.name));

  function onClickImg() {
    if (targetName.includes(image.name)) {
      setIsTarget(true);
      document.getElementById(`cardimg-${id}`).style.pointerEvents = 'none';
    }
  }
  const imgClass = `card__img card ${isTarget && 'card__img_active'}`;
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
