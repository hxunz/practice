// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number){
  let num = 0;
  for (i=1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      num += i;
    }
  }
  return num;
}