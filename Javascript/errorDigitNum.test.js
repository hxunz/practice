const solution = (num) => {
  const strNum = num.toString();
  console.log('strNum::: ', strNum);

  // let smallNum = '';

  // for (i = 1; i < strNum.length; i++) {
  //   if (strNum[0] === '1') {
  //     if (strNum[i] !== '0' && strNum[i] !== '1') {

  //     }
  //   }
  // }
  const regexAllCase = new RegExp(strNum.slice(0, 1), "gi");

  for (i = 1; i < strNum.length; i++) {

    if (regexAllCase === '1') {
      if (new RegExp(strNum.slice(i, i + 1), "gi") !== '0' && new RegExp(strNum.slice(i, i + 1), "gi") !== '1') {
        smallNum = strNum.replace(new RegExp(strNum.slice(i, i + 1)), '0');
      }
    }

    if (regexAllCase !== '1') {
      smallNum = strNum.replace(regexAllCase, '1');
    }
  }

  const bigNum = strNum.replace(regexAllCase, '9');
  console.log('bigNum::: ', bigNum);

  console.log('smallNum::: ', smallNum);
}

test('num', () => {
  // expect(solution(10018)).toEqual(80088);
  expect(solution(909)).toEqual(898);
});
