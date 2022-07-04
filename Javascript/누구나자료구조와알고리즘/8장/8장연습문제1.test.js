const solution = (arr1, arr2) => {
  let largerArr;
  let smallerArr;
  let hashTable = {};
  let sameNumber = [];
  
  if (arr1.length > arr2.length) {
    largerArr = arr1;
    smallerArr = arr2;
  } else {
    largerArr = arr2;
    smallerArr = arr1;
  }

  for (const number of largerArr) {
    hashTable[number] = true;
  }

  for (i = 0; i < smallerArr.length; i++) {
    if (hashTable[smallerArr[i]]) {
       sameNumber.push(smallerArr[i]);
    }
  }

  return sameNumber;
};

test('hashTable', () => {
  expect(solution([1,2,3,4,5], [0,2,4,6,8])).toEqual([2,4]);
});