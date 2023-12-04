const solution = (n) => {
  //빈 배열을 n만큼 만든다.
  //각 배열에 0을 넣는다. 이때 배열의 길이는 1부터 n까지 점점 증가한다.
  //빈 배열의 각 첫번째 인덱스에 1부터 숫자를 넣는다.
  let arr = [];
  let arrLength = 1;
  let arrNumber = 1;

  for (let i = 0; i < n; i++) {
    arr.push([])
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arrLength; j++) {
      arr[i].push(0)
    }
    arrLength++
  };

  for (let i = 0; i < n; i++) {
    let number = arrNumber;
    for (let j = 0; j < n; j++) {
      arr[i][0] = arrNumber;

      arr[n - 1][j] = number
      number++
    }
    arrNumber++
  };

  for (let i = n - 1; i > 0; i--) {
    if (arr[i].some((it) => it !== 0)) continue;
  }

  console.log('arr::: ', arr);
};

test('solution', () => {
  // expect(solution(1)).toEqual([1]);
  // expect(solution(2)).toEqual([1, 2, 3]);
  expect(solution(3)).toEqual([1, 2, 6, 3, 4, 5]);
  // expect(solution(4)).toEqual([1, 2, 9, 3, 10, 8, 4, 5, 6, 7]);
});
