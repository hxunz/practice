class Bag {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const bag = new Bag();

test('백이 비어있는지 확인한다', () => {
  expect(bag.isEmpty()).toBe(true);
});

test('백에 요소를 추가한다', () => {
  bag.add(10);
  expect(bag.items).toEqual([10]);
});

test('백의 크기를 확인한다', () => {
  expect(bag.size()).toEqual(1);
});
