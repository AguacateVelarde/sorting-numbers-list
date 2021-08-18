const assert = require("assert");

function _getReducerList(list) {
  let currentActiveNumber = Number.MIN_SAFE_INTEGER;
  return list.reduce((accumulator, current) => {
    if (currentActiveNumber < current) {
      accumulator.push(current);
      currentActiveNumber = current;
    }

    return accumulator;
  }, []);
}

function sortingNumbers(list = []) {
  assert(list);
  const matrixSortingLists = [];

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      const newList = _getReducerList(list);
      matrixSortingLists.push(newList);
      list.shift();
    }
  }

  return _getSortAndBiggerElementList(matrixSortingLists);
}

function _getSortAndBiggerElementList(matrix) {
  const lastIndex = matrix.length - 1;
  return matrix.sort(_handlerSorting)[lastIndex] ?? [];
}

function _handlerSorting(a, b) {
  return a.length - b.length;
}

module.exports = sortingNumbers;
