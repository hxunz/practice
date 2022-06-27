const selectionsort = (arr) => {
  for (i = 0; i < arr.length; i++) {
    //가장 작은 수 찾기
    let minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    //elements 스왑하기
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
};

test('selectionsort', () => {
  expect(selectionsort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
  expect(selectionsort([6,5,4,3,2,1])).toEqual([1,2,3,4,5,6]);
});
