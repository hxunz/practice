const solution = (queue1, queue2) => {
  const queueLength = queue1.length * 3;
  const Target = [...queue1, ...queue2].reduce((acc, cur) => acc + cur, 0) / 2;
  let queue1Total = queue1.reduce((acc, cur) => acc + cur, 0);
  let queue2Total = queue2.reduce((acc, cur) => acc + cur, 0);
  let queue1Point = 0;
  let queue2Point = 0;

  for (i = 0; i <= queueLength; i++) {
    if (queue1Total === Target) {
      return i;
    }

    if (queue1Total > queue2Total) {
      queue2.push(queue1[queue1Point]);
      queue1Total -= queue1[queue1Point];
      queue2Total += queue1[queue1Point];
      queue1Point += 1;
    } else if (queue1Total < queue2Total) {
      queue1.push(queue2[queue2Point]);
      queue1Total += queue2[queue2Point];
      queue2Total -= queue2[queue2Point];
      queue2Point += 1;
    }

  }

  return -1;
};

test('queue', () => {
  // expect(solution([3, 2, 7, 2], [4, 6, 5, 1])).toEqual(2);
  // expect(solution([1, 2, 1, 2], [1, 10, 1, 2])).toEqual(7);
  expect(solution([1, 1], [1, 5])).toEqual(-1);
  expect(solution([1, 1, 1], [5, 1, 1])).toEqual(4);
});
