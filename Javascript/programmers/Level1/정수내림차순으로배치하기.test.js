const solution = (n) => {
  const num = n.toString().split('');
  return Number(num.sort((a, b) => b - a).join(''));
}

test('newNumber', () => {
  expect(solution(118372)).toEqual(873211);
});
