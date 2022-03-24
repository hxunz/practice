// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {  
  const intNum = numbers.filter(word => word >= 0);
  
  const number = intNum.sort((a, b) => a-b);
  
  return number[0] + number[1];
}
