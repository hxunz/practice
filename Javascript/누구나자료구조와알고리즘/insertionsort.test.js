const insertionSort = (arr) => {
  for (i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (j = i - 1; currentValue < arr[j]; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr
};

test('insertionSort', () => {
  expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  expect(insertionSort([4, 3, 2, 5, 1])).toEqual([1, 2, 3, 4, 5]);
});
