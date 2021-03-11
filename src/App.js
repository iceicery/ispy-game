import React, { useState } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import {
  images_animal,
  imagelist_animal,
  targetlist_animal,
} from './utils/cardData';
import { images_vegi, imagelist_vegi, targetlist_vegi } from './utils/vegiData';
import Result from './components/Result/Result';

function App() {
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

  const targetArry_animal = getTargetArray(images_animal, targetlist_animal);
  const targetNumber_animal = getNumberOfTarget(
    imagelist_animal,
    targetlist_animal
  );
  const targetArry_vegi = getTargetArray(images_vegi, targetlist_vegi);
  const targetNumber_vegi = getNumberOfTarget(imagelist_vegi, targetlist_vegi);
  const [targetArry, setTargetArry] = useState(targetArry_animal);
  const [targetNumber, setTargetNumber] = useState(targetNumber_animal);
  const [imagelist, setImageList] = useState(imagelist_animal);

  function changeTheme() {
    if (imagelist === imagelist_animal) {
      setTargetArry(targetArry_vegi);
      setTargetNumber(targetNumber_vegi);
      setImageList(imagelist_vegi);
      return;
    }
    setTargetArry(targetArry_animal);
    setTargetNumber(targetNumber_animal);
    setImageList(imagelist_animal);
  }
  return (
    <div className="App">
      <h1 className="App__title">I-Spy game</h1>
      <p className="App__description">
        Find the animals, type the number and click confirm to see if you find
        them all. You could click the animal to help you count. Have fun!
      </p>
      <CardList images={imagelist} targetName={targetArry} />
      <Result
        targets={targetArry}
        targetNumber={targetNumber}
        changeTheme={changeTheme}
      />
    </div>
  );
}

export default App;
