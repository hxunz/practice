// N을 한번 사용했을 경우의 값을 구한다.
// N을 두번 사용했을 경우의 값을 구한다(N + N, NxN, N / N, NN)
// N을 세번 사용했을 경우의 값을 구한다. (N + N) + N, (N + N) - N, (N + N)xN, (N + N) / N, (N + N)N
// 위의 경우를 8번 반복한다
// 값이 numbers와 같은 경우 count + 1을 한다.

const solution = (N, number) => {
  let twoTimes = 0;

  //N을 두번 사용한 경우
  if (N + N === number) {
    twoTimes++
  }
  if (N * N === number) {
    twoTimes++
  }
  if (N / N === number) {
    twoTimes++
  }
  if (Number(N.toString() + N.toString()) === number) {
    twoTimes++
  }

  let threeTimes = 0;
  // N을 세번 사용한 경우
  if (N + N + N === number) {
    threeTimes++
  }
  if (N + N - N === number) {
    threeTimes++
  }
  if ((N + N) * N === number) {
    threeTimes++
  }
  if ((N + N) / N === number) {
    threeTimes++
  }

  if ((N * N) - N === number) {
    threeTimes++
  }
  if ((N * N) * N === number) {
    threeTimes++
  }
  if ((N * N) / N === number) {
    threeTimes++
  }

  if ((N / N) + N === number) {
    threeTimes++
  }
  if ((N / N) * N === number) {
    threeTimes++
  }
  if ((N / N) - N === number) {
    threeTimes++
  }
  if ((N / N) / N === number) {
    threeTimes++
  }

  if (((Number(N.toString() + N.toString()) + N) === number)) {
    threeTimes++
  }
  if (((Number(N.toString() + N.toString()) - N) === number)) {
    threeTimes++
  }
  if (((Number(N.toString() + N.toString()) * N) === number)) {
    threeTimes++
  }
  if ((Number(N.toString() + N.toString()) / N) === number) {
    threeTimes++
  }

  //N을 네번 사용할 경우
  let four = 0;
  if (N + N + N + N === number) {
    four++
  }
  if ((N + N + N) * N === number) {
    four++
  }
  if ((N + N + N) - N === number) {
    four++
  }
  if ((N + N + N) / N === number) {
    four++
  }

  if (((N * N) - N) + N === number) {
    four++
  }
  if (((N * N) - N) * N === number) {
    four++
  }
  if (((N * N) - N) - N === number) {
    four++
  }
  if (((N * N) - N) / N === number) {
    four++
  }

  if (((N / N) + N) + N === number) {
    four++
  }
  if (((N / N) + N) - N === number) {
    four++
  }
  if (((N / N) + N) * N === number) {
    four++
  }
  if (((N / N) + N) / N === number) {
    four++
  }

  if ((((Number(N.toString() + N.toString()) + N) + N) === number)) {
    four++
  }
  if ((((Number(N.toString() + N.toString()) + N) - N) === number)) {
    four++
  }
  if ((((Number(N.toString() + N.toString()) + N) * N) === number)) {
    four++
  }
  if ((((Number(N.toString() + N.toString()) + N) / N) === number)) {
    four++
  }

  if (N === number) {
    return 1
  } else if (twoTimes) {
    return 2
  } else if (threeTimes) {
    return 3
  } else if (four) {
    return 4
  } else {
    return -1
  }
}

test('count', () => {
  expect(solution(5, 12)).toEqual(4);
  expect(solution(2, 11)).toEqual(3);
});
