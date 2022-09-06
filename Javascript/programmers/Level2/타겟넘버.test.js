// 1 1 1 1 1
// -1 1 1 1 1
// [1, 1, 1, 1, 1]
// 1 [1, 1, 1, 1]
// -1 [1, 1, 1, 1]
// [1, 1, 1], 1, 0; === 3
//   1[1, 1], 1, 1 ===== 2
//      1[1], 1, 2  ===== 1
//        1, 1, 3   0
//        -1, 1, 1 <=== 1
//     -1[1], 1, 0  ===== 1
//        1, 1, 1 <=== 1
//       -1, 1, -1  0
//  -1[1, 1], 1, -1 ===== 1
//    1[1], 1, 0 ===== 1
//      1, 1, 1 <== 1
//     -1, 1, -1   0
//   -1[1], 1, -2   =   0
//     1, 1  -1  
//     -1,1, -3
  
const solution = (numbers, target, acc = 0) => {
  if (numbers.length === 0) {
    return target === acc ? 1 : 0;
  }

  const [first] = numbers;

  const plus = first;
  const minus = -first;

  return solution(numbers.slice(1), target, acc + plus) +
    solution(numbers.slice(1), target, acc + minus);


  if (first === target && !second) {
    return 1;
  }

  let count = 0;
  if (-first + second + third === target) {
    count = count + 1;
  }

  if (-first - second + third === target) {
    count = count + 1;
  }

  if (-first + second - third === target) {
    count = count + 1;
  }

  if (first - second + third === target) {
    count = count + 1;
  }

  if (first - second - third === target) {
    count = count + 1;
  }

  if (first + second - third === target) {
    count = count + 1;
  }

  if (first + second + third === target) {
    count = count + 1;
  }


  return count;

};

test('countMoney', () => {
  expect(solution([1], 1)).toEqual(1);
  expect(solution([1, 1, 1], 1)).toEqual(3);
  expect(solution([1, 2, 4], 1)).toEqual(1);
  expect(solution([2, 4, 1], 1)).toEqual(1);
  expect(solution([4, 2, 1], 1)).toEqual(1);
  expect(solution([2, 2, 2], 6)).toEqual(1);
  expect(solution([1, 1, 1, 1, 1], 3)).toEqual(5);
  expect(solution([4, 1, 2, 1], 4)).toEqual(2);
});
