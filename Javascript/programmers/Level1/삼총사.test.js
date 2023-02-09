//이해 -> 학생들 중 삼총사를 만들 수 있는 방법의 수를 구하라

//주어진 자료 -> 학생들의 번호를 나타내는 정수 배열,
//주어진 조건 -> 서로 다른 학생의 정수 번호가 같을 수 있다.

//계획
// 1. 주어진 number를 순회한다.
// 2. 첫번째 인덱스 + 두번째 인덱스 + 세번째 인덱스 가 0이 아니라면 세번째인덱스+1을하면서 순회하는데 number 끝까지 다 순회했다면
// 3. 첫번째 인덱스 + 두번째 인덱스+1 + 그 다음인덱스가 세번째 인덱스 가 0이 아니라면 세번째 인덱스+1을 하면서 순회한다.
// 4. 2,3을 반복하다가 두번째 인덱스가 number배열 마지막에 위치하게 되면 첫번째 인덱스+1 + 그다음인덱스가 두번째인덱스 + 두번째인덱스의 다음인덱스가 세번째인덱스 라고 정한다.
// 5. 2,3 반복
// 2,3,4,5를 반복하다가 0이 나오면 그 값을 count+1한다.

//실행

// const solution = (number) => {
//   let count = 0;

//   for (let i = 0; i < number.length - 2; i++) {
//     for (let j = i + 1; j < number.length - 1; j++) {
//       for (let k = j + 1; k < number.length; k++) {
//         if (number[i] + number[j] + number[k] === 0) {
//           count += 1;
//         }
//       }
//     }
//   }
//   return count;
// };

//조합 풀이
const solution = (number) => {
  const combinations = getCombinations(number, 3);
  console.log('com::: ', combinations);

  return sum(combinations);
}

// [-2, 3, 0, 2, -5], 3
// [3, 0, 2, -5], 2
// [0, 2, -5], 1
const getCombinations = (number, fixedNum) => {
  // []
  // [[3, 0], [3, 2], [3, -5]]
  let result = [];

  if (fixedNum === 1) {
    // [[0], [2], [-5]]
    return number.map((it) => [it]);
  }

  // [3, 0, 2, -5]
  number.forEach((fixed, index, origin) => {
    // -2, 0, [-2, 3, 0, 2, -5]
    // 3, 0, [3, 0, 2, -5]
    // 0, 1, [3, 0, 2, -5]
    // 2, 2, [3, 0, 2, -5]
    const rest = origin.slice(index + 1);
    // rest = [3, 0, 2, -5]
    // rest, 2
    // rest = [0, 2, -5]
    // rest, 1
    // rest = [0, 2, -5]
    // rest, 1
    // rest = [2, -5]
    // rest, 1
    const combination = getCombinations(rest, fixedNum - 1);
    // [[0], [2], [-5]]
    // [[-5]]
    const attached = combination.map((it) => [fixed, ...it]);
    // [[3, 0], [3, 2], [3, -5]]
    // [[0, 2], [0, -5]]
    // [[2, -5]]
    result.push(...attached);
  })
  return result;
  //?return 하고 안하고의 차이는 머지?
}

const sum = (combinations) => {
  return combinations.map((it) => it.reduce((acc, cur) => acc + cur), 0).filter((sum) => sum === 0).length;
}

test('solution', () => {
  expect(solution([-2, 3, 0, 2, -5])).toEqual(2);
});
