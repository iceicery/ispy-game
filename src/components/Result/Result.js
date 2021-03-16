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
  const popupClass = isPopupOpen ? 'result__popup' : 'result__popup-hidden';
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
      <div className={popupClass}>
        {inputs.some((item) => item === false) ? (
          <>
            <img
              src="https://media1.tenor.com/images/9c9520226d408801a72861562d41d52d/tenor.gif?itemid=4601461"
              alt="test"
            />
            <p>Try Again! You can do it!</p>
          </>
        ) : (
          <>
            <img
              src="https://media.tenor.com/images/324ebfe888cb034c05a8f16c483de109/tenor.gif"
              alt="text"
            />
            <p>'Great Job! You did it!'</p>
          </>
        )}
      </div>
    </form>
  );
}
