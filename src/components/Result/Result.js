import React from 'react';
import './Result.css';

export default function Result({ targets }) {
  return (
    <ul className="result">
      {targets.map((target, i) => {
        return (
          <li className="result__item" key={i}>
            <p className="result__text">You found</p>
            <input
              className="result__input"
              type="number"
              placeholder="How many? (number)"
            ></input>
            <img
              className="result__img"
              src={target.src}
              alt={target.name}
              width="50"
            />
          </li>
        );
      })}
    </ul>
  );
}
