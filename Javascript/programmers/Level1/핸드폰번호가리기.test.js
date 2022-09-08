const solution = (phone_number) => {
  // 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 * 으로 가린 문자열을 리턴
  return phone_number.split('').map((it, index) => {
    if (index < phone_number.length - 4) {
      return '*'
    } else {
      return it
    }
  }).join('');
}

test('newCellPhoneNumber', () => {
  expect(solution("01033334444")).toEqual("*******4444");
  expect(solution("027778888")).toEqual("*****8888");
});
