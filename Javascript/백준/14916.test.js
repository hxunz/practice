// 5, 2

// 1. 거스름돈을 5원으로 나눈다.
    //나누어 떨어지면 몫을 리턴한다.
    //나누어 떨어지지 않으면 (전체 거스름돈) - (5 x 몫) -> 남은 거스름돈
        //몫은 count에 저장한다.
// 2. 남은 거스름돈을 2원으로 나눈다.
    //나누어 떨어지면 몫을 count에 더한다.
    //나누어 떨어지지 않으면 -1을 리턴한다.

const solution = (n) => {
  let count = 0;
  let exchange = 0;

  if (n % 5 === 0) {
    return n / 5;
  } else {
    exchange = n - (5 * Math.floor(n / 5));
    count = Math.floor(n / 5);
  }

  if (exchange % 2 === 0) {
    return count = count + exchange / 2
  } else {
    return -1
  }

};

test('14916', () => {
  expect(solution(13)).toEqual(5);
});
