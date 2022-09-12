const solution = (arr1, arr2) => {
  // 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과
  // 같은 위치의 인덱스 값끼리 더한다
  let newArr = [];
  for (i = 0; i < arr1.length; i++) {
    let sum = [];
    for (j = 0; j < arr1[i].length; j++) {
      sum.push(arr1[i][j] + arr2[i][j])
    }
    newArr.push(sum);
  }
  return newArr;
}

test('newProcession', () => {
  expect(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]])).toEqual([[4, 6], [7, 9]]);
  expect(solution([[1], [2]], [[3], [4]])).toEqual([[4], [6]]);
});
