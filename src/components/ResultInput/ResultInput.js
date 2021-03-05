import React, { useState } from 'react';
import './ResultInput.css';

export default function ResultInput({
  target,
  idx,
  targetNumber,
  onChange,
  isCorrect,
}) {
  function checkIsCorrect(e) {
    if (parseInt(e.target.value) === targetNumber[idx]) {
      onChange(idx, true);
    } else {
      onChange(idx, false);
    }
  }
  return (
    <li className="result__item">
      <p className="result__text">You found</p>
      <input
        className="result__input"
        type="number"
        placeholder="How many? (number)"
        name={target}
        onChange={checkIsCorrect}
      ></input>
      <img
        className="result__img"
        src={target.src}
        alt={target.name}
        width="50"
      />
      {isCorrect ? <p>Great Job! You found all!</p> : <p>Please try again!</p>}
    </li>
  );
}
