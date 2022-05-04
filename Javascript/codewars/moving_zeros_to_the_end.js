// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
  let array = arr.filter((num) => num !== 0);
  
  for (i=0; i < arr.length; i++) {
    if (arr[i] === 0) {
      array.push(0)
    }
  }
  
  return array;
}