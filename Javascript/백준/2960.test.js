// 아직 모든 수를 지우지 않았다면, 다시 2번 단계로 간다.

const solution = (n, k) => {
  // 2부터 N까지 모든 정수를 적는다.
  let numbers = [];
  for (i = 2; i <= n; i++) {
    numbers.push(i)
  }

  // 아직 지우지 않은 수 중 가장 작은 수를 찾는다.이것을 P라고 하고, 이 수는 소수이다.
  let p = numbers[0];
  let count = 0;
  let prime = [];

  // P를 지우고, 아직 지우지 않은 P의 배수를 크기 순서대로 지운다.
  while (numbers.length > 0) {
    if (count > k) {
      break;
    }
    
    prime.push(p);
    let num = numbers[0];
    numbers[0] = null;
    count = count + 1;
    if (count === k) {
      return num
    }

    for (i = 1; i * p < numbers.length; i++) {
      const number = numbers[i * p]
      numbers[i * p] = null;
      count = count + 1;
      
      if (count === k) {
        return number;
      }
    }
    numbers = numbers.filter((it) => it !== null);

    p = numbers[0];
  }
  return p;
}

test('findPrime', () => {
  expect(solution(10, 3)).toEqual(6);
  expect(solution(15, 12)).toEqual(7);
  expect(solution(10, 7)).toEqual(9);
});
