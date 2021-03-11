import dog from '../images/dog.png';
import lamb from '../images/lamb.png';
import mouse from '../images/mouse.png';
import orca from '../images/orca.png';
import pig from '../images/pig.png';
import rattlesnake from '../images/rattlesnake.png';
import ray from '../images/ray.png';
import duck from '../images/duck.png';
import bird from '../images/bird.png';
import bear from '../images/bear.png';
import elephant from '../images/elephant.png';
import frog from '../images/frog.png';
import cow from '../images/cow.png';

export const images_animal = [
  { name: 'dog', src: dog },
  { name: 'lamb', src: lamb },
  { name: 'mouse', src: mouse },
  { name: 'orca', src: orca },
  { name: 'pig', src: pig },
  { name: 'rattlesnake', src: rattlesnake },
  { name: 'duck', src: duck },
  { name: 'ray', src: ray },
  { name: 'bird', src: bird },
  { name: 'bear', src: bear },
  { name: 'elephant', src: elephant },
  { name: 'frog', src: frog },
  { name: 'cow', src: cow },
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

export const imagelist_animal = shuffle(
  copyImages(numberOfCopy, images_animal)
);
export const targetlist_animal = getNRandomTarget(images_animal, 3);
