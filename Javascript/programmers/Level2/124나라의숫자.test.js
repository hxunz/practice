const solution = (n) => {
  // 주어진 숫자 n을 3으로 나눴을때의 값을 내림해서 빈배열에 넣는다. 
  // 주어진 숫자 n을 3으로 나눴을때의 나머지가
  //   2 - 1 1이라면 1번 배열에 1을 추가
  //   2 - 2 2라면 1번 배열에 2를 추가
  //   2 - 3 0이라면 1번 배열에 4를 추가
  // 위 배열의 요소를 합치고 이를 리턴한다.
  const numbers = ['4', '1', '2'];
  let newNumber = '';

  while (n > 0) {
    newNumber = numbers[n % 3] + newNumber
    n = Math.floor((n - 1) / 3)
  }
  return newNumber
};

test('transNumber', () => {
  expect(solution(1)).toEqual('1');
  expect(solution(2)).toEqual('2');
  expect(solution(3)).toEqual('4');
  expect(solution(4)).toEqual('11');
  expect(solution(5)).toEqual('12');
  expect(solution(6)).toEqual('14');
  expect(solution(7)).toEqual('21');
  expect(solution(8)).toEqual('22');
  expect(solution(9)).toEqual('24');
  expect(solution(10)).toEqual('41');

});
