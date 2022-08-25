const solution = (strArr) => {
  //문자열이 주어지는데, 거기서 빈도수가 높은 순으로 반환하는 함수를 작성하라

  let mapStr = new Map();
  for (i = 0; i < strArr.length; i++) {
    mapStr.set(strArr[i], (mapStr.get(strArr[i]) || 0) + 1);
  }

  const mapSort = new Map([...mapStr.entries()].sort((a, b) => b[1] - a[1]));

  return [...mapSort.keys()];
};

test('countStr', () => {
  expect(solution(['a', 'b', 'c', 'd', 'a', 'c', 'b', 'e', 'f', 'e', 'c', 'd'])).toEqual(['c', 'a', 'b', 'd', 'e', 'f']);
});
