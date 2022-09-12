const solution = (s) => {
  const arr = s.split(' ').map((it) => Number(it));
  return `${Math.min(...arr)} ${Math.max(...arr)}`
}

test('findMaxAndMinNumber', () => {
  expect(solution("1 2 3 4")).toEqual("1 4");
});
