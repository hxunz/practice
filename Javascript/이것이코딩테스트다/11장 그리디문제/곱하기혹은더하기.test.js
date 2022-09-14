const solution = (s) => {
  // 주어진 문자열을 쪼개면서 숫자로 바꾼다.
  const numbers = s.split('').map((it) => Number(it));

  // 각 숫자를 순회하면서 곱한다
  // 2 - 1 0인 경우에는 다음 숫자랑 더한다.
  const acc = numbers.reduce((acc, cur) => {
    if (cur === 0) {
      return acc + cur
    }
    return acc * cur
  }, 1)

  return acc
}

test('countGroup', () => {
  expect(solution('02984')).toEqual(576);
  expect(solution('567')).toEqual(210);
});
