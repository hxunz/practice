const solution = (M, arr, start = 0, end = Math.max(...arr)) => {
  // start값을 0, end 값을 arr의 가장 큰 값, mid 를 start와 mid의 중간값으로 둔다.
  let mid = Math.floor((start + end) / 2);

  // mid 보다 긴 떡만 잘라야한다.
  let newArr = arr.filter((it) => it > mid);

  //arr에서 mid를 뺀 다음에 다 더한 값을 구한다.
  let sumLength = newArr.reduce((acc, cur) => acc + (cur - mid), 0);

  // arr에서 mid를 뺀 다음에 다 더한 값이 M이면 이때의 mid 값을 리턴한다.
  if (sumLength === M || start > end) {
    return mid;
  }

  // arr에서 mid를 뺀 다음에 다 더한 값이 M보다 작으면 end를 mid - 1로 바꾸고 mid값은 새로 계산된다.
  if (sumLength < M) {
    return solution(M, arr, start, end = mid - 1)
  }

  // arr에서 mid를 뺀 다음에 다 더한 값이 M보다 크면 start를 mid + 1로 바꾸고 mid값은 새로 계산된다.
  if (sumLength > M) {
    return solution(M, arr, start = mid + 1, end)
  }
};

test('findHeight', () => {
  expect(solution(6, [19, 15, 10, 17])).toEqual(15);
  expect(solution(7, [19, 15, 10, 17])).toEqual(14);
  expect(solution(13, [19, 15, 10, 17])).toEqual(12);
  expect(solution(14, [19, 15, 10, 17])).toEqual(12);
  expect(solution(15, [19, 15, 10, 17])).toEqual(12);
});
