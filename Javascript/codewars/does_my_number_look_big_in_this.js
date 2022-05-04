// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  const number = String(value).split('');
  let result = 0;
  
  for (i=0; i < number.length; i++) {
    const num = parseInt(number[i], 10);
    result += Math.pow(num, number.length)
  }
  
  return result === value ? true : false;
}
