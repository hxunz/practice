const evenNumbers = (numberArr, evenArr=[]) => {
  if (numberArr.legnth === 0) {
    return evenArr;
  }

  if (numberArr[0] % 2 === 0) {
    evenArr.push(numberArr[0]);
  } 
  return evenNumbers(numberArr.slice(1, numberArr.length), evenArr);
}

test('evenNumbers', () => {
  expect(evenNumbers([1,2,3,4])).toEqual([2,4]);
});
