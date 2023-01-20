const solution = (babbling) => {
  //aya, ye, woo, ma 같은 단어가 연속으로 사용되었는지 아닌지 확인하는 정규 표현식
  const regexp1 = /(aya|ye|woo|ma)\1+/;

  //aya, ye, woo, ma가 있는지 아닌지 확인하는 정규 표현식
  const regexp2 = /^(aya|ye|woo|ma)+$/;
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    !regexp1.test(babbling[i]) && regexp2.test(babbling[i]) ? count++ : 0
  }

  return count
};

test('solution', () => {
  expect(solution(["aya", "yee", "u", "maa"])).toEqual(1);
  expect(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])).toEqual(2);
  expect(solution(['woowo'])).toEqual(0);
  expect(solution(['woayao'])).toEqual(0);
  expect(solution(['maayama'])).toEqual(1);
});
