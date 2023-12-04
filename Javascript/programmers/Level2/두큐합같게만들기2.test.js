//하나의 큐를 골라 원소를 추출(pop)하고, 추출된 원소를 다른 큐에 집어넣는(insert) 작업을 통해 각 큐의 원소 합이 같도록 만들려고 합니다. 이때 필요한 작업의 최소 횟수를 구하라
// 알고있는것 : 한 번의 pop과 한 번의 insert를 합쳐서 작업을 1회 수행한 것 , 
//  길이가 같은 두 개의 큐를 나타내는 정수 배열 queue1, queue2

const solution = (queue1, queue2) => {
  let queue = [...queue1, ...queue2];
  let queue1Sum = queue1.reduce((acc, cur) => acc + cur);
  let queue2Sum = queue2.reduce((acc, cur) => acc + cur);

  let count = 0;
  let queue1Target = 0;
  let queue2Target = queue.length / 2;

  while (queue2Target < queue.length) {
    if (queue1Sum === queue2Sum) {
      break;
    }

    if (queue1Sum > queue2Sum) {
      queue2.push(queue1[queue1Target]);
      queue1Sum -= queue[queue1Target];
      queue2Sum += queue[queue1Target];
      queue1Target++;
      count++;

    } else if (queue1Sum < queue2Sum) {
      queue1.push(queue2[queue2Target]);
      queue1Sum += queue[queue2Target];
      queue2Sum -= queue[queue2Target];
      queue2Target++;
      count++;
    }
  }

  if (queue1Sum === 0 || queue2Sum === 0) {
    return -1
  } else {
    return count;
  }
}

test('sameQueue', () => {
  expect(solution([3, 2, 7, 2], [4, 6, 5, 1])).toEqual(2);
  expect(solution([1, 2, 1, 2], [1, 10, 1, 2])).toEqual(7);
  expect(solution([1, 1], [1, 5])).toEqual(-1);
  expect(solution([1], [1])).toEqual(0);
})
