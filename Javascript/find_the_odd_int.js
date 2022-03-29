// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  const number = A.reduce(function (allNum, num) {
    if (num in allNum) {
      allNum[num]++;
    } else {
      allNum[num] = 1;
    }
    return allNum;
  }, {});
  
  let orderNum = '';
  
  for (i=0; i < Object.values(number).length; i++) {
    if (Object.values(number)[i] % 2 === 1) {
      orderNum += i;
    }
  }
  
  for (i=0; i < Object.keys(number).length; i++) {
    return parseInt(Object.keys(number)[orderNum]);
  }
}