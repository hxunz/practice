/**
* ## 이해
*
* 미지의 것: 우승 시 받을 수 있는 가장 큰 상금 금액을 return
* 자료
*   - 3가지의 연산문자(+, -, *) 만으로 이루어진 연산 수식
    - 같은 순위의 연산자는 없어야 합니다
    - 계산된 결과가 음수라면 해당 숫자의 절댓값으로 변환하여 제출
    - 제출한 숫자가 가장 큰 참가자를 우승자로 선정
* 조건
*   - 피연산자가 음수인 수식도 입력으로 주어지지 않습니다.
    - 같은 연산자끼리는 앞에 있는 것의 우선순위가 더 높습니다.
*
* ## 계획
*   - 연산 수식의 조합을 구한다.
    - 연산 수식 조합에 따라 계산하고 이를 빈 배열에 넣는다.
    - 가장 작은 값을 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const combinations = [
  ['+', '-', '*'],
  ['+', '*', '-'],
  ['-', '+', '*'],
  ['-', '*', '+'],
  ['*', '+', '-'],
  ['*', '-', '+'],
];

const operate = {
  '+': (x, y) => { x + y },
  '-': (x, y) => { x - y },
  '*': (x, y) => { x * y }
}


const calculate = (combination, expression) => {
  let expressions = [];
  let temp = '';
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*') {
      expressions.push(temp);
      expressions.push(expression[i]);
      i += 1
      temp = '';
    }
    temp = temp + expression[i]
  }
  if (temp) {
    expressions.push(temp)
  }

  combination.forEach((operator) => {
    while (true) {
      if (expressions.length === 1) {
        return expressions[0];
      }
      let index = expressions.indexOf(operator);
      if (index === -1) {
        return;
      }

      let value = 0;
      if (expressions[index] === '+') {
        value = Number(expressions[index - 1]) + Number(expressions[index + 1])
        expressions = [...expressions.slice(index - 2, index), value, ...expressions.slice(index + 2)]
      }
      if (expressions[index] === '-') {
        value = Number(expressions[index - 1]) - Number(expressions[index + 1])
        expressions = [...expressions.slice(index - 2, index), value, ...expressions.slice(index + 2)]
      }
      if (expressions[index] === '*') {
        value = Number(expressions[index - 1]) * Number(expressions[index + 1])
        expressions = [...expressions.slice(index - 1), value, ...expressions.slice(index + 2)]
        console.log('expressions::: ', expressions);
      }
    }

  });
  return expressions[0];
};

test('calculate', () => {
  // expect(calculate(['+', '-', '*'], '100+200*300')).toEqual(90000);
  // expect(calculate(['+', '-', '*'], '100+200+300')).toEqual(600);
  expect(calculate(['*', '-', '+'], '100+200*300')).toEqual(60100);
  // expect(calculate(['*', '+', '-'], "100-200*300-500+20")).toEqual(60420);
});

const solution = (expression) => {
  let values = [];
  combinations.forEach((combination) => {
    let value = Math.abs(calculate(combination, expression));
    values.push(value);
  })
  // console.log('values::: ', values);
};

// test('solution', () => {
//   expect(solution("100-200*300-500+20")).toEqual(60420);
// });
