// 1.이해
//주어진 Numbers에 없는 숫자들을 더해라

// 2. 계획
// 0-9 더하면 45
// 45 - numbers

// 3. 실행

function solution(numbers) {
  const allNum = numbers.reduce((total, current) => total + current, 0);
  
  return 45 - allNum;
}