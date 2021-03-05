import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('I-Spy game');
  expect(linkElement).toBeInTheDocument();
});

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

test('get target array by names from exist array data(no duplicate data)', () => {
  expect(
    getTargetArray(
      [
        { name: 'test1', src: 'test1@' },
        { name: 'test2', src: 'test2@' },
      ],
      ['test1']
    )
  ).toEqual([{ name: 'test1', src: 'test1@' }]);
  expect(
    getTargetArray(
      [
        { name: 'test1', src: 'test1@' },
        { name: 'test2', src: 'test2@' },
        { name: 'test3', src: 'test3@' },
      ],
      ['test1', 'test2']
    )
  ).toEqual([
    { name: 'test1', src: 'test1@' },
    { name: 'test2', src: 'test2@' },
  ]);
});

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

test('get count of each target from an array', () => {
  expect(
    getNumberOfTarget(
      [
        { name: 'test1', src: 'test1@' },
        { name: 'test2', src: 'test2@' },
      ],
      ['test1']
    )
  ).toEqual([1]);
  expect(
    getNumberOfTarget(
      [
        { name: 'test1', src: 'test1@' },
        { name: 'test2', src: 'test2@' },
        { name: 'test2', src: 'test2@' },
        { name: 'test2', src: 'test2@' },
        { name: 'test3', src: 'test3@' },
      ],
      ['test1', 'test2']
    )
  ).toEqual([1, 3]);
});
