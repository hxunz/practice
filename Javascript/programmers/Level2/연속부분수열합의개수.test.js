const solution = (elements) => {
  let sum = [];
  for (let i = 1; i <= elements.length; i++) {
    const el = elements.concat(elements.slice(0, i));
    for (let j = 0; j < elements.length; j++) {
      sum.push(el.slice(j, j + i).reduce((acc, cur) => acc + cur, 0));
    }
  }

  const set = new Set(sum);

  return [...set].length;
};

test('solution', () => {
  expect(solution([7, 9, 1, 1, 4])).toEqual(18);
});
