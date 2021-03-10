import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import { images, imagelist, targetlist } from './utils/cardData';
import Result from './components/Result/Result';

function getTargetArray(arrayOfObject, targets) {
  let targetArry = [];
  targets.map((target) => {
    for (var i = 0; i < arrayOfObject.length; i++) {
      if (target === arrayOfObject[i].name) {
        targetArry.push(arrayOfObject[i]);
      }
    }
  });
  return targetArry;
}

function getNumberOfTarget(arrayOfObject, targets) {
  let count = 0;
  let numberOfTarget = [];
  targets.map((target) => {
    for (var i = 0; i < arrayOfObject.length; i++) {
      if (arrayOfObject[i].name === target) {
        count += 1;
      }
    }
    numberOfTarget.push(count);
    count = 0;
  });
  return numberOfTarget;
}

const targetArry = getTargetArray(images, targetlist);
const targetNumber = getNumberOfTarget(imagelist, targetlist);

function App() {
  return (
    <div className="App">
      <h1 className="App__title">I-Spy game</h1>
      <p className="App__description">
        Find the animals, type the number and click confirm to see if you find
        them all. You could click the animal to help you count. Have fun!
      </p>
      <CardList images={imagelist} targetName={targetlist} />
      <Result targets={targetArry} targetNumber={targetNumber} />
    </div>
  );
}

export default App;
