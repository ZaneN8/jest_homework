import {
  // methods,
  // methods,
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray,
} from "../app";

// hint of look in before_each before_all
describe("originalArray Test", () => {
  test("originalArray should return it self", () => {
    expect(originalArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});

describe("doubleArray Test", () => {
  test("doubleArray should return the array doubled", () => {
    expect(doubleArray([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
  });

  test("doubleArray should return the array doubled", () => {
    expect(doubleArray([5, 7, 2, 9])).toEqual([10, 14, 4, 18]);
  });
});

describe("evensOnlyArray", () => {
  test("evensOnlyArray should return evens only", () => {
    expect(evensOnlyArray([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
  });

  test("evensOnlyArray should return evens only", () => {
    expect(evensOnlyArray([5, 12, 14, 8, 1, 7, 8])).toEqual([12, 14, 8, 8]);
  });
});

describe("arraySum", () => {
  test("return sum of array", () => {
    expect(arraySum([1, 2, 3, 4, 5])).toEqual(15);
  });

  test("return sum of array", () => {
    expect(arraySum([1, 7, 3, 5, 5])).toEqual(21);
  });
});

describe("allNumbersGreaterThanZero", () => {
  test("If it returns true if every number is greater then zero", () => {
    expect(allNumbersGreaterThanZero([1, 2, 3, 4, 5])).toEqual(true);
  });

  test("If it returns true if every number is greater then zero", () => {
    expect(allNumbersGreaterThanZero([1, -4, 3, 4, 5])).toEqual(false);
  });
});

describe("someNumbersAreOdd", () => {
  test(" Are some numbers odd", () => {
    expect(someNumbersAreOdd([1, 2, 3, 4, 5, 6, 7])).toEqual(true);
  });

  test(" Are some numbers odd", () => {
    expect(someNumbersAreOdd([2, -2, 4, 6, 8])).toEqual(false);
  });
});

describe("evensOnlyAndDoubleArray", () => {
  test(" Are numbers even and multiplied by 2", () => {
    expect(evensOnlyAndDoubleArray([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([
      4,
      8,
      12,
      16,
    ]);
  });

  test(" Are numbers even and multiplied by 2", () => {
    expect(evensOnlyAndDoubleArray([20, 40, 43, 49])).toEqual([40, 80]);
  });
});

describe("findItem", () => {
  test("Can we find an item if it exists or say if it is not found", () => {
    expect(findItem([5, 2, 8, 1, 9])).toEqual(1);
  });

  test("Can we find an item if it exists or say if it is not found", () => {
    expect(findItem([16, 3, 2, 10])).toEqual("not found");
  });
});

describe("sortArray", () => {
  test("Does it sort the array in descending order", () => {
    expect(sortArray([3, 7, 8, 0, 6])).toEqual([8, 7, 6, 3, 0]);
  });

  test("Does it sort the array in descending order", () => {
    expect(sortArray([10, 5, 9, 2, 4])).toEqual([10, 9, 5, 4, 2]);
  });
});
