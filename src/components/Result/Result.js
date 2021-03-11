import React, { useState } from 'react';
import ResultInput from '../ResultInput/ResultInput';
import './Result.css';

export default function Result({ targets, targetNumber, changeTheme }) {
  const [inputs, setInputs] = useState(Array(targets.length).fill(''));
  const setInput = (idx, value) => {
    setInputs(Object.assign([...inputs], { [idx]: value }));
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  function onConfirmClick(e) {
    e.preventDefault();
    setIsPopupOpen(true);
  }
  function onAgainClick(e) {
    e.preventDefault();
    window.location.reload(false);
  }
  function onChangeThemeClick(e) {
    e.preventDefault();
    changeTheme();
  }

  return (
    <form className="result">
      <ul className="result__input-list">
        {targets.map((target, i) => (
          <ResultInput
            target={target}
            key={i}
            idx={i}
            targetNumber={targetNumber}
            onChange={setInput}
            isCorrect={inputs[i]}
            isPopupOpen={isPopupOpen}
          />
        ))}
      </ul>
      <div className="result__button-list">
        <button
          className="result__button result__confirm"
          onClick={onConfirmClick}
        >
          confirm
        </button>
        <button className="result__button result__again" onClick={onAgainClick}>
          play again
        </button>
        <button
          className="result__button result__theme"
          onClick={onChangeThemeClick}
        >
          Change Theme
        </button>
      </div>
    </form>
  );
}
