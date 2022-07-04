// 주어진 두 매개변수 사이의 모든 숫자들을 담은 배열(numbers)을 만든다
// 주어진 숫자를 약수로 바꾸고 길이를 구하는 변수(submultiple)를 만든다 
// numbers를 순회하면서 요소 하나하나를 submultiple로 계산해본다. 
// submultiple이 짝수이면 numbers의 요소를 더하고 
// 그렇지 않으면(홀수이면) 뺀다
// 그리고 리턴

const solution = (left, right) => {
  let numbers = [];
  for (num = left; num <= right; num++) {
    numbers.push(num);
  }

  return numbers.reduce((acc, cur) => {
    return getSubMultipleCount(cur) % 2 === 0 ? acc + cur : acc - cur
  }, 0);
};

const getSubMultipleCount = (number) => {
  let submultiple = [];
  for (i = 1; i <= number; i++) {
    if (number % i === 0) {
      submultiple.push(i);
    }
  }
  return submultiple.length;
};

test('count', () => {
  expect(solution(13, 17)).toEqual(43)
})