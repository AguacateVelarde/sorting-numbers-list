const sortingNumbers = require("./reduce-numbers");

test("should return OK", (done) => {
  const firstTesting = sortingNumbers([
    9, 44, 32, 12, 7, 45, 31, 98, 35, 41, 8, 20, 27, 32, 83, 64, 61, 28, 39, 93,
    29, 92, 17,
  ]);
  expect(firstTesting).toStrictEqual([8, 20, 27, 32, 83, 93]);
  done();
});

test("should return the same array", (done) => {
  const secondTesting = sortingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const secondResponse = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(secondTesting).toStrictEqual(secondResponse);

  done();
});

test("should return a empty array cause send a empty array too", (done) => {
  const thirdTesting = sortingNumbers([]);
  const thirdResponse = [];
  expect(thirdTesting).toStrictEqual(thirdResponse);

  done();
});

test("should return the first element", (done) => {
  const fourtyTesting = sortingNumbers([9, 9, 9, 9, 9, 9, 9, 9]);
  const fourtyResponse = [9];
  expect(fourtyTesting).toStrictEqual(fourtyResponse);
  done();
});
