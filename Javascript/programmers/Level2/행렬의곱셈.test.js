const solution = (arr1, arr2) => {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr.push([]);
    for (let j = 0; j < arr2[0].length; j++) {
      newArr[i].push(0);
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr1[0].length; k++) {
        newArr[i][j] += arr1[i][k] * arr2[k][j]
      }
    }
  }
  return newArr;
}

test('matrixMultiplication', () => {
  expect(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]])).toEqual([[15, 15], [15, 15], [15, 15]]);
  expect(solution([[1, 2, 3], [4, 5, 6]], [[1, 4], [2, 5], [3, 6]])).toEqual([[14, 32], [32, 77]]);
})