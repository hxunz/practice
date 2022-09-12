const solution = (A, B) => {
  // A 배열을 오름차순 정렬하고 B 배열은 내림차순 정렬한다.
  const newA = A.sort((a, b) => a - b);
  const newB = B.sort((a, b) => b - a);

  // 둘 배열을 동시에 순회하면서 각 요소끼리 곱한 값을 새로운 배열에 넣는다
  return newA.map((it, index) => it * newB[index]).reduce((acc, cur) => acc + cur, 0);
  // 새로운 배열의 요소들의 누적값을 구한 후 리턴한다.
}

test('acc', () => {
  expect(solution([1, 4, 2], [5, 4, 4])).toEqual(29);
});
