// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text){
  const arrText = [...text];
  const lowerText = arrText.map(str => str.toLowerCase());
  
  let countNum = lowerText.reduce(function (allNumbers, number) {
    if (number in allNumbers) {
      allNumbers[number]++;
    } else {
      allNumbers[number] = 1;
    }
    return allNumbers;
  }, {});
  
  const result = Object.values(countNum).filter(num => num > 1);
  
  return result.length === 0 ? 0 : result.length;
}