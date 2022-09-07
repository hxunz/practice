const solution = (num) => {
  return (num %2 === 0) ? 'Even' : 'Odd'
}

test('evenOrOdd', () => {
  expect(solution(3)).toEqual('Odd');
});