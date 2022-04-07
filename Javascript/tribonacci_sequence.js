// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature, n) {
  let numArr = signature;
  
  if (n < 4) {
    return signature.slice(0, n);
  } else {
    for (i=0; i < n-3; i++) {
      numArr.push((numArr[i] + numArr[i+1] + numArr[i+2]));
    }
    return numArr;
  }
}