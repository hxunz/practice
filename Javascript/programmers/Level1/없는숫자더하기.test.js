// 1.이해
//주어진 Numbers에 없는 숫자들을 더해라

// 2. 계획
// 0-9 더하면 45
// 45 - numbers

// 3. 실행

const solution = (numbers) => {
  const allNum = numbers.reduce((total, current) => total + current, 0);

  return 45 - allNum;
}


// const solution = (numbers) => {
//   const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//   let lostNum = [];

//   for (let i = 0; i < number.length; i++) {
//     if (numbers.includes(number[i]) === false) {
//       lostNum.push(number[i])
//     }
//   }

//   return lostNum.reduce((acc, cur) => acc + cur);
// };


test('solution', () => {
  expect(solution([1, 2, 3, 4, 6, 7, 8, 0])).toEqual(14);
  expect(solution([5, 8, 4, 0, 6, 7, 9])).toEqual(6);
});
