function squareDigits(num){
  num = num.toString();
  const number = num.split('');
  const result = number.map(n => {
    return Math.pow(n, 2);
  });
  const answer = result.join('');
  const ans = parseInt(answer);
  return ans;
}

// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript