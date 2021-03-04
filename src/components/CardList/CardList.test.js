//copyImages is a function makeing copy of each element of images array.
//argument times and images are arrays that have same length.
//the function make {times[i]} copies for {images[i]} and return an array

function copyImages(times, images) {
  let newImages = [];
  for (var j = 0; j < times.length; j++) {
    for (var i = 0; i < times[j]; i++) {
      newImages.push(images[j]);
    }
  }
  return newImages;
}

test('copy image function', () => {
  expect(copyImages([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 2, 3, 3, 3]);
  expect(copyImages([3, 2, 1], [2, 2, 3])).toEqual([2, 2, 2, 2, 2, 3]);
  expect(copyImages([5, 3, 2, 1], [2, 1, 3, 5])).toEqual([
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    3,
    3,
    5,
  ]);
});
