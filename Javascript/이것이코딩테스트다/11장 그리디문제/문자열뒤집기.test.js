const solution = (s) => {
  // 0이 연속중인 경우와 1이 연속중인 경우 각각 카운트를한다.
  let zeroCount = 0;
  let oneCount = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === '0' && s[i + 1] !== '0') {
      zeroCount += 1;
    }
    if (s[i] === '1' && s[i + 1] !== '1') {
      oneCount += 1;
    }
  }
  // 카운트가 더 적은 숫자의 카운트 값을 리턴한다.
  return zeroCount > oneCount ? oneCount : zeroCount
}

test('reverse', () => {
  expect(solution('0001100')).toEqual(1);
  expect(solution('1111')).toEqual(0);
  expect(solution('00000001')).toEqual(1);
  expect(solution('11001100110011000001')).toEqual(4);
  expect(solution('11101101')).toEqual(2);
});
