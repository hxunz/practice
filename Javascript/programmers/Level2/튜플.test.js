const solution = (s) => {
  // 정규식을 사용해서 문자열에서 특수문자를 제거한다. 
  // , 를 기준으로 잘라준다.
  // 숫자를 카운트한다. 
  // 3 - 1 가장 많이 쓰인 숫자 순서대로 정렬한다. 
  // 중복을 제거한다.
  // 이를 리턴한다. 
  const str = s.replace(/[\{\}]/g, '').split(',');

  const numCount = new Map();
  str.map((it) => {
    if (numCount.has(it) === false) {
      return numCount.set(it, 0);
    }
  });

  str.map((num) => {
    if (numCount.has(num) === true) {
      return numCount.set(num, numCount.get(num) + 1);
    }
  });

  const newStr = [...numCount];
  newStr.sort((a, b) => b[1] - a[1]);

  return newStr.map((n) => Number(n[0]));
};

test('findTuples', () => {
  expect(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")).toEqual([2, 1, 3, 4]);
  expect(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")).toEqual([2, 1, 3, 4]);
  expect(solution("{{20,111},{111}}")).toEqual([111, 20]);
  expect(solution("{{123}}")).toEqual([123]);
  expect(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")).toEqual([3, 2, 4, 1]);
});
