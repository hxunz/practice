  function solution(arr) {
    const newArr = arr.filter((it) => it !== Math.min(...arr))
    return arr.length > 1 ? newArr : [-1]
  }

test('removeSmallestNumber', () => {
  expect(solution([4, 3, 2, 1])).toEqual([4, 3, 2]);
  expect(solution([1, 1, 2, 3])).toEqual([2, 3]);
});
