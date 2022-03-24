// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {  
  // const number = numbers에서 제일 작은 수
  const number = Math.min(...numbers);
  
  // const nums = numbers - 제일 작은 수 제외
  const nums = numbers.filter(word => word !== number);
  
  // const num = nextnum에서 제일 작은 수 
  const num = Math.min(...nums);
  
  return number + num
}