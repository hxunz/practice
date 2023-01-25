const solution = (number, limit, power) => {
  //공격력 = 자신의 기사 번호의 약수 개수 = 각 수가 power보다 높으면 power 값으로 대체됨
  //1부터 number까지의 약수의 개수를 구한다.
  let submultiple = getSubMultiple(number);
  //철의 무게 = 공격력1당 1kg = 공격력kg

  const weight = submultiple.map((it) => {
    if (it <= limit) {
      return it
    } else {
      return power
    }
  })

  return weight.reduce((acc, cur) => acc + cur, 0);
};

// const getSubMultiple = (number) => {
//   let submultipleCount = [];

//   while (number >= 0) {
//     let submultiple = [];

//     for (i = 1; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         submultiple.push(i);
//         if (number / i !== i) {
//           submultiple.push(number / i)
//         }
//       }
//     }
//     submultipleCount.push(submultiple.length);
//     number -= 1;
//   }

//   return submultipleCount;
// }

const getSubMultiple = (number, submultipleCount = []) => {
  let submultiple = [];

  if (number === 0) {
    return submultipleCount
  };

  for (i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      submultiple.push(i);
      if (number / i !== i) {
        submultiple.push(number / i)
      }
    }
  }
  submultipleCount.push(submultiple.length)

  return getSubMultiple(number -= 1, submultipleCount);
};


test('solution', () => {
  expect(solution(5, 3, 2)).toEqual(10);
  expect(solution(10, 3, 2)).toEqual(21);
});
