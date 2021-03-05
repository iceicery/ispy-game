import React, { useState } from 'react';
import ResultInput from '../ResultInput/ResultInput';
import './Result.css';

export default function Result({ targets, targetNumber }) {
  const [inputs, setInputs] = useState(Array(targets.length).fill(''));
  const setInput = (idx, value) => {
    setInputs(Object.assign([...inputs], { [idx]: value }));
  };
  return (
    <ul className="result">
      {targets.map((target, i) => (
        <ResultInput
          target={target}
          key={i}
          idx={i}
          targetNumber={targetNumber}
          onChange={setInput}
          isCorrect={inputs[i]}
        />
      ))}
    </ul>
  );
}
