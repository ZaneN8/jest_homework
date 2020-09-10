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
export function evenArray(numberArray) {
  return numberArray.filter(function(var i = 0;))
} 
// return array with sum of numbers
// arraySum(numberArray); // => 10;  hint use reduce

// return true if every item greater than 0
// allNumbersGreaterThanZero(numberArray); // => true; use every

// return true if one or more items in array are odd
// someNumbersAreOdd(numberArray); // => true; use some

// return array double and even
// evensOnlyAndDoubleArray(numberArray); // => [4,8]; // use map and filter

// find an item method return 'not found' if not found
// findItem(numberArray, 1); //=> 1

// sort array desc order
// sortArray(numberArray); //=> [4,3,2,1] *desc*
