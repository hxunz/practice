const solution = (x) => {
  const sum = x.toString().split('').map((it) => Number(it)).reduce((acc, cur) => acc + cur, 0);
  return x % sum === 0 ? true : false
}

test('하샤드수', () => {
  expect(solution(10)).toEqual(true);
});
