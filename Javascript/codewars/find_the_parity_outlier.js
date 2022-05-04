// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers){
  const odd = [];
  const even = [];
  
  for (i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      even.push(integers[i])
    } else {
      odd.push(integers[i])
    }
  }
  
  return (odd.length === 1) ? odd[0] : even[0];
}