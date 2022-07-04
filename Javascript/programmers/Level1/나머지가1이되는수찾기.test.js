// n까지의 숫자를 담은 배열을 만든다
// 이 배열을 돌면서 나머지를 구하는 연산자를 실행시킨다.
// 이때 몫이 1인 경우 리턴해준다.

const solution = (n) => {
  let numbers = [];
  for (i = 1; i <= n; i++) {
    numbers.push(i);
  }

  const number = numbers.filter(num => n % num === 1);
  return number[0];
};

test('findNumber', () => {
  expect(solution(10)).toEqual(3);
  expect(solution(12)).toEqual(11);
});
