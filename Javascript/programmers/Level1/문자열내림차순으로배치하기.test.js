function solution(s) {
  // 큰것부터 작은 순으로 정렬하는데 대문자는 소문자보다 작다
  const arr = s.split('');

  //대문자 정렬
  let upperArr = [];
  arr.map((it) => {
    if (it.toUpperCase() === it) {
      return upperArr.push(it)
    }
  });
  upperArr.sort((a, b) => {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  })

  //소문자 정렬
  let lowerArr = [];
  arr.map((it) => {
    if (it.toLowerCase() === it) {
      return lowerArr.push(it)
    }
  })
  lowerArr.sort((a, b) => {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  })

  return [...lowerArr, ...upperArr].join('')
}

test('strSort', () => {
  expect(solution("Zbcdefg")).toEqual("gfedcbZ");
});
