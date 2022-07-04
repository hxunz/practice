const bubbleSort = (arr) => {
  for (i = 0; i < arr.length-1; i++) {
    for (j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

test('bubbleSort', () => {
  expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});
