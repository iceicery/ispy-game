import apple from '../images/apple.png';
import avacado from '../images/avacado.png';
import banana from '../images/banana.png';
import broccoli from '../images/broccoli.png';
import carrot from '../images/carrot.png';
import cucumber from '../images/cucumber.png';
import kale from '../images/kale.png';
import pear from '../images/pear.png';
import pineapple from '../images/pineapple.png';
import pumpkin from '../images/pumpkin.png';
import starfruit from '../images/starfruit.png';
import strawberry from '../images/strawberry.png';
import watermelon from '../images/watermelon.png';

export const images_vegi = [
  { name: 'apple', src: apple },
  { name: 'avacado', src: avacado },
  { name: 'banana', src: banana },
  { name: 'broccoli', src: broccoli },
  { name: 'carrot', src: carrot },
  { name: 'cucumber', src: cucumber },
  { name: 'kale', src: kale },
  { name: 'pear', src: pear },
  { name: 'pineapple', src: pineapple },
  { name: 'pumpkin', src: pumpkin },
  { name: 'starfruit', src: starfruit },
  { name: 'strawberry', src: strawberry },
  { name: 'watermelon', src: watermelon },
];

const numberOfCopy = [2, 3, 4, 4, 5, 5, 6, 6, 3, 4, 2, 4, 3];

function copyImages(times, images) {
  let newImages = [];
  for (var j = 0; j < times.length; j++) {
    for (var i = 0; i < times[j]; i++) {
      newImages.push(images[j]);
    }
  }
  return newImages;
}

function shuffle(images) {
  let data = images;
  for (let i = data.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
}

function getNamesOfArray(array) {
  var nameOfArray = [];
  array.map((item, i) => nameOfArray.push(item.name));
  return nameOfArray;
}

function getNRandomTarget(array, n) {
  const nameOfArray = getNamesOfArray(array);
  shuffle(nameOfArray);
  return nameOfArray.slice(0, n);
}

shuffle(numberOfCopy);

export const imagelist_vegi = shuffle(copyImages(numberOfCopy, images_vegi));
export const targetlist_vegi = getNRandomTarget(images_vegi, 2);
