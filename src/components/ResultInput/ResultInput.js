import React from 'react';
import './ResultInput.css';
export default function ResultInput({ target, idx, targetNumber, onChange }) {
  function checkIsCorrect(e) {
    if (parseInt(e.target.value) === targetNumber[idx]) {
      onChange(idx, true);
    } else {
      onChange(idx, false);
    }
  }
  return (
    <li className="resultinput__item">
      <input
        className="resultinput__input"
        type="number"
        placeholder="How many? (number)"
        name={target}
        onChange={checkIsCorrect}
      ></input>
      <img
        className="resultinput__img"
        src={target.src}
        alt={target.name}
        width="50"
      />
    </li>
  );
}
