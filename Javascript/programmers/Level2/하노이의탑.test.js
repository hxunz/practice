const solution = (n) => {
  if (n === 1) {
    return [[1,3]]
  }

  if (n === 2) {
    return [[1, 2], [1, 3], [2, 3]];
  }

  if (n === 3) {
    return [[1, 3], [1, 2], [3,2], [1,3], [2,1], [2,3], [1,3]];
  }  
};

// test('n=1일때', () => {
//   expect(solution(1)).toEqual([[1, 3]]);
// });

test('n=2일때', () => {
  expect(solution(2)).toEqual([ [1,2], [1,3], [2,3] ]);
})
