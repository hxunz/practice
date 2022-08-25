const solution = (strArr) => {
  let mapStr = new Map();
  for (i = 0; i < strArr.length; i++) {
    mapStr.set(strArr[i], (mapStr.get(strArr[i]) || 0) + 1);
  }

  const mapStrLength = [...mapStr.keys()].length;
  
  return strArr.length === mapStrLength ? true : false;
}

test('check', () => {
  expect(solution(['a', 'b', 'c', 'd', 'a', 'c', 'b', 'e', 'f', 'e', 'c', 'd'])).toEqual(false);
  expect(solution(['a', 'b', 'c', 'd'])).toEqual(true);
});
