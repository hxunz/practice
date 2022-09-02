// O((N + M) * K)
const solution = (K, A, B, count = 0) => {
  // count 값이 K가 될때까지 반복한다.
  if (count === K) {
    return A.reduce((acc, cur) => acc + cur, 0);
  }

  // 배열 A의 최소값을 구한다 O(N)
  let minA = Math.min(...A);
  // 배열 B의 최대값을 구한다 O(M)
  let maxB = Math.max(...B);
  // 서로 바꾸고 count + 1을 해준다
  // 최소값과 최대값의 위치를 모름
  let minAIndex = A.indexOf(minA); // O(N)
  let maxBIndex = B.indexOf(maxB); // O(M)

  // A[minAIndex]에 maxB를 쓴다.
  A[minAIndex] = maxB  // O(1)
  // B[maxBIndex]에 minA를 쓴다.
  B[maxBIndex] = minA  // O(1)

  return solution(K, A, B, count + 1);


  if (count === K) {
    return A.reduce((acc, cur) => acc + cur, 0);
  }

  let sortA = A.sort((a, b) => a - b);
  let sortB = B.sort((a, b) => a - b);

  sortA[0] = sortB[sortB.length - 1];
  sortB.pop();
  
  return solution(K, sortA, sortB, count + 1);
};

test('sumArr', () => {
  expect(solution(3, [1, 2, 5, 4, 3], [6, 7, 8, 9, 10])).toEqual(8 + 9 + 10 + 5 + 4);
  expect(solution(3, [1, 2, 5, 4, 3], [1, 1, 1, 1, 1])).toEqual(1 + 2 + 3 + 4 + 5);
  expect(solution(3, [1, 2, 5, 4, 3], [2, 2, 2, 2, 2])).toEqual(2 + 2 + 3 + 4 + 5);

});
