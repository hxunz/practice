// 주어진 배열에 map을 사용해서 배열 내 요소들끼리 비교한다.
// 현재 요소랑 그 다음 요소랑 같으면 넘어가고
// 현재 요소랑 그 다음 요소랑 같지 않으면 현재 요소를 리턴

const solution = (arr) => {
  let uniqueNumbers = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      uniqueNumbers.push(arr[i]);
    }
  }

  return uniqueNumbers;
};

test('uniqueNumbers', () => {
  expect(solution([1,1,3,3,0,1,1])).toEqual([1,3,0,1]);
});
