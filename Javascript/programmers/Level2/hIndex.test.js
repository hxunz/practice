const solution = (citations) => {
  // citations 배열을 뒤에서부터 순회하면서 i번 이상 인용된 논문의 개수가 i이상이라면 i return

  for (i = citations.length; i >= 0; i--) {
    const countDocs = citations.filter((it) => it >= i).length;

    if (countDocs >= i) {
      return i
    }
  }
};

test('findHIndex', () => {
  expect(solution([3, 0, 6, 1, 5])).toEqual(3);
  expect(solution([1, 2, 3])).toEqual(2);
  expect(solution([6, 5, 5, 5, 3, 2, 1, 0])).toEqual(4);
  expect(solution([10, 10, 10, 10, 10])).toEqual(5);
  expect(solution([0, 0, 0, 0, 0])).toEqual(0);
  expect(solution([3, 4, 5, 11, 15, 16, 17, 18, 19, 20])).toEqual(7);
  expect(solution([3, 0, 6, 1, 5])).toEqual(3);
  expect(solution([0, 0, 0, 0, 1])).toEqual(1);
  expect(solution([9, 7, 6, 2, 1])).toEqual(3);
  expect(solution([1, 1, 5, 7, 6])).toEqual(3);
  expect(solution([0])).toEqual(0);
  expect(solution([0, 0])).toEqual(0);
  expect(solution([0, 1, 2, 3, 3, 3, 3, 3, 3, 4, 10, 20, 30, 40])).toEqual(4);
  expect(solution([3, 1, 1, 4])).toEqual(2);
  expect(solution([1, 1, 5, 7, 6])).toEqual(3);
  expect(solution([1, 3, 5, 7, 9, 11])).toEqual(4);
  expect(solution([6, 5, 4, 1, 0])).toEqual(3);
  expect(solution([10, 11, 12, 13])).toEqual(4);
});

