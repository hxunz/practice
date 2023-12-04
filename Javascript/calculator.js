const readlineSync = require('readline-sync');

const num1 = readlineSync.questionFloat('첫 번째 숫자를 입력하세요: ');
const num2 = readlineSync.questionFloat('두 번째 숫자를 입력하세요: ');
const calculator = readlineSync.question('연산자를 선택하세요 (+, -, *, /): ');

// 덧셈
const add = (a, b) => a + b;

// 뺄셈
const subtract = (a, b) => a - b;

// 곱셈
const multiply = (a, b) => a * b;

// 나눗셈
const divide = (a, b) => a / b;

let result;
if (calculator === '+') {
  result = add(num1, num2);
} else if (calculator === '-') {
  result = subtract(num1, num2);
} else if (calculator === '*') {
  result = multiply(num1, num2);
} else if (calculator === '/') {
  result = divide(num1, num2);
} else {
  console.log('올바른 연산자를 입력하세요.');
  process.exit(0);
}

console.log('결과:', result);
