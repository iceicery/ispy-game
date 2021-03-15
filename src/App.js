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
import Footer from './components/Footer/Footer';
import moreIcon from './images/more.svg';

function App() {
  function getTargetArray(arrayOfObject, targets) {
    let targetArry = [];
    targets.forEach((target) => {
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
    targets.forEach((target) => {
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
  const [isTextShow, setIsTextShow] = useState(true);

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

  function handleToggleText() {
    setIsTextShow((isTextShow) => !isTextShow);
  }

  const textContainerClass = isTextShow
    ? 'App__text-container'
    : 'App__text-container_hidden';
  return (
    <div className="App">
      <div className="App__phone">
        <div className={textContainerClass}>
          <h1 className="App__title">I-Spy game</h1>
          <p className="App__description">
            Find the animals, type the number and click confirm to see if you
            find them all. You could click the animal to help you count. Have
            fun!
          </p>
        </div>
        <div className="App__game">
          <img
            src={moreIcon}
            alt="click to get description"
            className="App__more"
            onClick={handleToggleText}
          />
          <CardList images={imagelist} targetArry={targetArry} />
          <Result
            targets={targetArry}
            targetNumber={targetNumber}
            changeTheme={changeTheme}
          />
        </div>
      </div>
      <div className="App__laptop">
        <div className={textContainerClass}>
          <h1 className="App__title">I-Spy game</h1>
          <p className="App__description">
            Find the animals, type the number and click confirm to see if you
            find them all. You could click the animal to help you count. Have
            fun!
          </p>
          <Result
            targets={targetArry}
            targetNumber={targetNumber}
            changeTheme={changeTheme}
          />
        </div>

        <CardList images={imagelist} targetArry={targetArry} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
