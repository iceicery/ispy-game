import React, { useState } from 'react';
import './ResultInput.css';
import resultTranagle from '../../images/blueTriangle.png';

export default function ResultInput({
  target,
  idx,
  targetNumber,
  onChange,
  isCorrect,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  function checkIsCorrect(e) {
    setIsPopupOpen(true);
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
      {isPopupOpen &&
        (isCorrect ? (
          <div className="resultinput__found">
            <img
              width="50"
              className="resultinput__triangle"
              src={resultTranagle}
              alt="talking bubble triangle"
            />
            Great Job! You found them all!
          </div>
        ) : (
          <div className="resultinput__found">
            <img
              width="50"
              className="resultinput__triangle"
              src={resultTranagle}
              alt="talking bubble triangle"
            />
            Try again! You can do it.
          </div>
        ))}
    </li>
  );
}
