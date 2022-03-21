// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
  const n = cc.length;
  const number = cc.substring(n-4);
  let newNumber = '';
  if (n <= 4) {
    return cc
  }
  else {
    for (i = 0; i < n-4; i++) {
      newNumber += '#';
    }
    return newNumber + number;
  }
}
