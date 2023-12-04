class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "스택이 비어있습니다";
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();

test('스택에 요소를 추가한다', () => {
  stack.push(10);
  expect(stack.items).toEqual([10]);
});

test('스택에서 요소를 제거한다', () => {
  stack.pop();
  expect(stack.items).toEqual([]);
});

test('스택이 비어있는지 확인한다', () => {
  expect(stack.isEmpty()).toBe(true);
  stack.push(10);
  expect(stack.isEmpty()).toBe(false);
  stack.pop();
  expect(stack.isEmpty()).toBe(true);
});

test('스택의 크기를 확인한다', () => {
  stack.push(10);
  expect(stack.size()).toEqual(1);
});
