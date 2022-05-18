// 1. 이해
// 자연수 n이 주어진다
// 3진법으로 바꾼다
// 숫자를 뒤집는다
// 다시 10진법으로 바꾼다.

// 2. 계획
// 자연수 n을 3진법으로 바꾼다
// 숫자를 뒤집는다
// 다시 10진법으로 바꾼다.

function toDecimal(notation, newNumber) {
  const reverseNum = [...newNumber].reverse();
  
  return reverseNum.reduce((acc, curr, i) => acc + Math.pow(notation, i) * curr, 0);
}

const solution = (notation, number, result = '') => {
  if (number < notation) {
    const newNumber = result.split('').reverse().concat(number.toString()).join('');
    return toDecimal(notation, newNumber);
  }

  return solution(
    notation,
    Math.floor(number / notation),
    (number % notation) + result
  )
}


// test('2진법으로 바꾸기', () => {
//   expect(solution(0)).toBe('0');
//   expect(solution(1)).toBe('1');
//   expect(solution(2)).toBe('10');
//   expect(solution(3)).toBe('11');
//   expect(solution(4)).toBe('100');
//   expect(solution(5)).toBe('101');
//   expect(solution(6)).toBe('110');
//   expect(solution(7)).toBe('111');
// });

// test('2진법 뒤집기', () => {
//   expect(solution(0)).toBe('0');
//   expect(solution(1)).toBe('1');
//   expect(solution(2)).toBe('01');
//   expect(solution(3)).toBe('11');
//   expect(solution(5)).toBe('101');
// });

// test('2진법 뒤집기', () => {
//   expect(solution(0)).toBe(0);
//   expect(solution(2)).toBe(1);
//   expect(solution(3)).toBe(3);
//   expect(solution(5)).toBe(5);
// });

// test('3진법 뒤집기', () => {
//   expect(solution(45)).toBe(7);
//   expect(solution(125)).toBe(229);
// });

test('N진법 뒤집기', () => {
  expect(solution(3, 45)).toBe(7);
  expect(solution(2, 5)).toBe(5);
})
