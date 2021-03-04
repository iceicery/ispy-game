import React from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import { imagelist } from './utils/cardData';

function getImgSrc(arrayOfObject, key) {
  for (var i = 0; i < arrayOfObject.length; i++) {
    if (arrayOfObject[i].name === key) {
      return arrayOfObject[i].src;
    }
  }
}

function getNumberOfTarget(arrayOfObject, target) {
  let count = 0;
  for (var i = 0; i < arrayOfObject.length; i++) {
    if (arrayOfObject[i].name === target) {
      count += 1;
    }
  }
  return count;
}

const dogImg = getImgSrc(imagelist, 'dog');
const pigImg = getImgSrc(imagelist, 'pig');
console.log(getNumberOfTarget(imagelist, 'pig'));

function App() {
  return (
    <div className="App">
      <h1>I-Spy game</h1>
      <CardList images={imagelist} targetName={['dog', 'pig']} />
      <div>
        <img src={dogImg} alt="dog" />
        <p>You found</p>
        <input type="text"></input>
        <img src={pigImg} alt="pig" />
        <p>You found </p>
        <input type="text"></input>
      </div>
    </div>
  );
}

export default App;
