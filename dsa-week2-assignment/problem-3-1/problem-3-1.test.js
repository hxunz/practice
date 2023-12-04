class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "큐가 비어있습니다";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const queue = new Queue();

test('큐에 요소를 추가한다', () => {
  queue.enqueue(10);
  expect(queue.items).toEqual([10]);
});

test('큐에서 요소를 제거한다', () => {
  queue.dequeue();
  expect(queue.items).toEqual([]);
});

test('큐가 비어있는지 확인한다', () => {
  expect(queue.isEmpty()).toBe(true);
  queue.enqueue(10);
  expect(queue.isEmpty()).toBe(false);
  queue.dequeue();
  expect(queue.isEmpty()).toBe(true);
});

test('큐의 크기를 확인한다', () => {
  queue.enqueue(10);
  expect(queue.size()).toEqual(1);
});
