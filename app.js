export const originalArray = (arr) => {
  return arr;
};

// return array with double values in array
//doubleArray(numberArray); // => [2,4,6,8];  hint use map

export function doubleArray(numberArray) {
  return numberArray.map(function (num) {
    return num * 2;
  });
}

// return array with all even numbers
// evensOnlyArray(numberArray); // => [2,4,6,8];  hint use filter

export function evensOnlyArray(numberArray) {
  return numberArray.filter(function (num) {
    return num % 2 == 0;
  });
}

// return array with sum of numbers
// arraySum(numberArray); // => 10;  hint use reduce

export function arraySum(numberArray) {
  return numberArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
}

// return true if every item greater than 0
// allNumbersGreaterThanZero(numberArray); // => true; use every

// export const allNumbersGreaterThanZero = (numberArray) => numberArray > 0;

export function allNumbersGreaterThanZero(numberArray) {
  return numberArray.every(function (number) {
    return number > 0;
  });
}

// return true if one or more items in array are odd
// someNumbersAreOdd(numberArray); // => true; use some

export function someNumbersAreOdd(numberArray) {
  return numberArray.some(function (num) {
    return num % 2 == 1;
  });
}

// return array double and even
// evensOnlyAndDoubleArray(numberArray); // => [4,8]; // use map and filter

export function evensOnlyAndDoubleArray(numberArray) {
  return numberArray
    .filter(function (number) {
      return number % 2 == 0;
    })
    .map(function (number) {
      return number * 2;
    });
}

// find an item method return 'not found' if not found
// findItem(numberArray, 1); //=> 1

export function findItem(numberArray) {
  const found = numberArray.find((number) => number === 1);
  if (found != 1) {
    return "not found";
  }
  return found;
}

// sort array desc order
// sortArray(numberArray); //=> [4,3,2,1] *desc*

export function sortArray(numberArray) {
  return numberArray.sort(function (a, b) {
    return b - a;
  });
}
