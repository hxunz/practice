// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
  let sum = 0;
  n.toString().split('').map(str => {
    sum += Number(str);
  });

  if (sum < 10) {
    return sum;
  } else {
    return digital_root(sum);
  }
}