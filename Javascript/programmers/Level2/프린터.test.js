// priorities의 길이만큼 유니크한 값을 새로 만든다.
// 이 배열에서 첫번째 값이 중요도가 가장 높은지 확인한다
// 2-1. 이 값을 인쇄하고 count 1을 해준다
// 2-2. 이 값이 요청한 문서라면 count 값을 리턴한다.
// 이 첫번째 값이 가장 중요도가 높은 값이 아니라면 맨 뒤로 보낸다.
// 2, 3번을 반복한다.

const checkPrinterOrder = (newPriorities,location,count = 0) => {
  const maxPriority = Math.max(...newPriorities.map((it) => it[1]));
  const firstPriority = newPriorities[0];
  if (maxPriority === firstPriority[1]) {
    newPriorities.shift();
    count++;
    if (location === firstPriority[0]) {
      return count;
    }
  } else {
    newPriorities.push(firstPriority);
    newPriorities.shift();
  }
  return checkPrinterOrder(newPriorities, location, count);
}
  
const printer = (priorities,location) => {
  const newPriorities = priorities.map((it, index) => [index, it]); 
  return checkPrinterOrder(newPriorities, location);
};

test('printer', () => {
  expect(printer([2, 1, 3, 2], 2)).toEqual(1);
  expect(printer([1, 1, 9, 1, 1, 1], 0)).toEqual(5);
  expect(printer([4, 7, 2, 1, 3, 9, 4],4)).toEqual(5);
});
