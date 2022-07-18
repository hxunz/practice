// 주어진 문자열 dartResult를 문자열을 기준으로 잘라서 새로운 배열로 만든다.
// s는 그냥 숫자만 변환, d는 앞의 숫자를 제곱, t는 앞의 숫자를 세제곱해서 다시 또 새로운 배열에 넣는다.
// 이 배열을 반복문 돌면서 요소들을 더한다.
// 근데 *을 만나면 * 이전의 요소들에 전부 다 *2를 해준다.
// 근데 #을 만나면 # 바로 앞의 요소에 -1을 곱한다.
// 그리고 이렇게 더한 값들을 리턴해준다.

const solution = (dartResult) => {
  let dartArr = [];
  let dartNumbers = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
      dartArr.push(10);
      i++;
    } else {
      dartArr.push(dartResult[i]);
    }
  }
  console.log('dartArr::: ', dartArr);

  for (i = 1; i < dartArr.length; i++) {
    if (dartArr[i] === 'S') {
      dartNumbers.push(Number(dartArr[i - 1]));
    } else if (dartArr[i] === 'D') {
      dartNumbers.push(Math.pow(dartArr[i - 1], 2));
    } else if (dartArr[i] === 'T') {
      dartNumbers.push(Math.pow(dartArr[i - 1], 3));
    } else if (dartResult[i] === "#") {
      dartNumbers[dartNumbers.length - 1] *= -1;
    } else if (dartResult[i] === "*") {
      dartNumbers[dartNumbers.length - 1] *= 2;
      dartNumbers[dartNumbers.length - 2] *= 2;
    }
  }
  console.log('dartNumbers::: ', dartNumbers);

  return dartNumbers.reduce((acc, cur) => acc + cur, 0);
};

test('dart', () => {
  expect(solution('1S2D*3T')).toEqual(37);
  expect(solution('1D2S#10S')).toEqual(9);
  expect(solution('1D2S0T')).toEqual(3);
});
