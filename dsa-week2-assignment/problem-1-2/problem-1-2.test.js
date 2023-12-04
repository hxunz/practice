// const solution = (numbers) => {
//   if (numbers.length === 0) return 0;

//   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//   return Math.floor(sum / numbers.length);
// };

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

const solution = (numbers) => {
  if (numbers.length === 0) return 0;

  const bag = new Bag();

  for (let i = 0; i < numbers.length; i++) {
    bag.add(numbers[i]);
  }

  const sum = bag.items.reduce((acc, curr) => acc + curr, 0);
  return Math.floor(sum / numbers.length);
};

test('숫자 배열의 평균을 구한다', () => {
  expect(solution([1, 2, 3, 4, 5])).toEqual(3);
  expect(solution([1, 3, 5, 7, 9, 11])).toEqual(6);
  expect(solution([2, 4, 6, 8, 10, 12, 13, 14, 15])).toEqual(9);
});
