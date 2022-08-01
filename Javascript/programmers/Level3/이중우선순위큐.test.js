const solution = (operations) => {
  const newOperations = operations.map((it) => it.split(' '));

  let queue = [];
  for (i = 0; i < newOperations.length; i++) {
    const [operation, value] = newOperations[i];
    if (operation === 'I') {
      queue.push(value);
      queue.sort((a, b) => a - b);
    }
    if (operation === 'D') {
      if (value === '-1') {
        queue.shift();
      } else if (value === '1') {
        queue.pop();
      }
    }
  };
  const newQueue = queue.map((it) => Number(it));
  if (newQueue.length === 0) {
    return [0, 0];
  } 
    
  return [newQueue[newQueue.length - 1], newQueue[0]]; 
};

test('queue', () => {
  expect(solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])).toEqual([0,0]);
  expect(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"])).toEqual([333, -45]);
  expect(solution(["I 4", "I 3", "I 2", "I 1", "D 1", "D 1", "D -1", "D -1", "I 5", "I 6"])).toEqual([6,5]);
});
