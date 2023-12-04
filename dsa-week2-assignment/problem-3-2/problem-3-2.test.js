// const solution = (people, remove) => {
//   let position = 0;
//   for (let i = 2; i <= people; i++) {
//     position = (position + remove) % i;
//   }

//   return position + 1;
// }

const solution = (people, remove) => {
  const queue = Array.from({ length: people }, (_, index) => index + 1);

  while (queue.length > 1) {
    for (let i = 0; i < remove - 1; i++) {
      queue.push(queue.shift());
    }
    queue.shift();
  }

  return queue[0];
};

test('N명의 사람이 있을 때 M번째 사람을 없앨 때 마지막에 죽는 사람의 순서를 반환한다', () => {
  expect(solution(7, 3)).toEqual(4);
  expect(solution(7, 2)).toEqual(7);
  expect(solution(10, 3)).toEqual(4);
});
