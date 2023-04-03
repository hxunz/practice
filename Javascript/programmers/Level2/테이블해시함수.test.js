/**
* ## 이해
*
* 미지의 것: 테이블의 해시 값을 return
* 자료
*   - 테이블은 2차원 행렬
    - 열은 컬럼을 나타내고, 행은 튜플
    - 첫 번째 컬럼은 기본키로서 모든 튜플에 대해 그 값이 중복되지 않도록 보장됩니다.
    - 테이블의 튜플을 col번째 컬럼의 값을 기준으로 오름차순 정렬을 하되,
      만약 그 값이 동일하면 기본키인 첫 번째 컬럼의 값을 기준으로 내림차순 정렬합니다.
    - 정렬된 데이터에서 S_i를 i 번째 행의 튜플에 대해
      각 컬럼의 값을 i 로 나눈 나머지들의 합으로 정의합니다.
    - row_begin ≤ i ≤ row_end 인 모든 S_i를 누적하여 bitwise XOR 한 값을 해시 값으로서 반환합니다.
* 조건
*   -
*
* ## 계획
*   - data를 정렬한다.
    - 정렬된 데이터를 계산한다.
    - row_begin ≤ i ≤ row_end 인 모든 S_i를 누적하여 bitwise XOR 한다.
*
* ## 실행
*
* ## 반성
*
*/

const sortData = (data, col) => {
  const result = data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    } else {
      return a[col - 1] - b[col - 1]
    }
  });
  return result;
}

const calculateData = (data, index) => {
  return data.reduce((acc, cur) => acc + (cur % index), 0)
}

const getXor = (arr) => {
  const result = arr.reduce((acc, cur) => {
    return acc ^ cur
  }, 0);
  return result;
}

const solution = (data, col, row_begin, row_end) => {
  //data를 정렬한다.
  const sortedData = sortData(data, col);
  //정렬된 데이터를 계산한다.
  const arr = [];
  for (let i = row_begin - 1; i < row_end; i++) {
    arr.push(calculateData(sortedData[i], i + 1));
  }
  // - row_begin ≤ i ≤ row_end 인 모든 S_i를 누적하여 bitwise XOR 한다.
  return getXor(arr);
};

test('sortData', () => {
  expect(sortData([[2, 2, 6], [1, 5, 10], [4, 2, 9], [3, 8, 3]], 2))
    .toEqual([[4, 2, 9], [2, 2, 6], [1, 5, 10], [3, 8, 3]])
})

test('calculateData', () => {
  expect(calculateData([1, 5, 10], 3))
    .toEqual(4)
})

test('getXor', () => {
  // expect(getXor([0, 4])).toBe(4);
  // expect(getXor([4, 4])).toBe(0);
  // expect(getXor([4, 4, 4])).toBe(4);
  expect(getXor([1, 2, 3])).toBe(0);
})

test('solution', () => {
  expect(solution([[2, 2, 6], [1, 5, 10], [4, 2, 9], [3, 8, 3]], 2, 2, 3)).toEqual(4)
});
