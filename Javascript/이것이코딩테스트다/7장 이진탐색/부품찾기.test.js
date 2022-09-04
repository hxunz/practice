const binarySearch = (array, target, start = 0, end = array.length - 1) => {
  const mid = Math.floor((start + end) / 2);
  if (target === array[mid]) {
    return true;
  }

  if (start > end) {
    return false;
  }

  if (target > array[mid]) {
    return binarySearch(array, target, mid + 1, end);
  } else {
    return binarySearch(array, target, start, mid - 1);
  }
};

const run = (array, targets, result = []) => {
  if (targets.length === 0) {
    return result;
  }

  const [target] = targets;

  const found = binarySearch(array, target);
  return run(array, targets.slice(1), [...result, found]);
}

const solution = (N, M) => {
  const array = [...N].sort((a, b) => a - b);
  return M.map((it) => binarySearch(array, it))
    .map((it) => it ? "yes" : "no").join(" ")
  // return run(array, M).map((it) => it ? "yes" : "no").join(" ");



};

// const solution = (N, M) => {
//   let result = [];

//   for (i = 0; i < M.length; i++) {
//     if (N.includes(M[i])) {
//       result.push('yes')
//     } else {
//       result.push('no')
//     }
//   }

//   return result.join(' ')
// }

test('findStuff', () => {
  expect(solution([8, 3, 7, 9, 2], [5, 7, 9])).toEqual('no yes yes')
});
