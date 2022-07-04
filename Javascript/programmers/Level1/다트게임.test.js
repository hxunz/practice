// 주어진 문자열 dartResult를 문자열을 기준으로 잘라서 새로운 배열로 만든다.
// s는 그냥 숫자만 변환, d는 앞의 숫자를 제곱, t는 앞의 숫자를 세제곱해서 다시 또 새로운 배열에 넣는다.
// 이 배열을 반복문 돌면서 요소들을 더한다.
// 근데 *을 만나면 * 이전의 요소들에 전부 다 *2를 해준다.
// 근데 #을 만나면 # 바로 앞의 요소에 -1을 곱한다.
// 그리고 이렇게 더한 값들을 리턴해준다.

// const getResult = (acc, dartArr) => {
//   const maxLength = dartArr.length;
//   if (dartArr[i+1] === '*') {
//     acc *= 2;
//     if (i + 4 < maxLength && dartArr[i+4] === '*') {
//       acc *= 2;
//       if (i + 7 < maxLength && dartArr[i+7] === '*') {
//         acc *= 2;
//       }
//     } 
//   } else if (i + 3 < maxLength && dartArr[i + 3] === '*') {
//     acc *= 2;
//       if (i + 7 < maxLength && dartArr[i+7] === '*') {
//         acc *= 2;
//       }
//   } else if (i + 5 < maxLength && dartArr[i+5] === '*') {
//     acc *= 2;
//   } 
//   return acc;
// }``

const solution = (dartResult) => {
  const dartArr = [...dartResult];
  console.log('dartArr::: ', dartArr);
  // const dartStrings = dartResult.replace(/\d/g, '');
  // console.log('dartStrings::: ', dartStrings);
  // ['1', 'S', '2', 'D', '3', 'T', '*']
  let dart = [];
  const dartArrLength = dartArr.length;
  for (i = 1; i < dartArrLength; i++) {
    if (dartArr[i] === 'S') {
      let result = Number(dartArr[i - 1]);
      // if (dartArr[i+1] === '*') {
      //   result *= 2;
      //   if (i + 4 < dartArrLength && dartArr[i+4] === '*') {
      //     result *= 2;
      //     if (i + 7 < dartArrLength && dartArr[i+7] === '*') {
      //       result *= 2;
      //     }
      //   } 
      // }
      // dart.push(getResult(result, dartArr));

      dart.push(result);
    } 
    if (dartArr[i] === 'D') {
      let result = Math.pow(dartArr[i-1], 2);
      // if (dartArr[i+1] === '*') {
      //   result *= 2;
      //   if (i + 4 < dartArrLength && dartArr[i+4] === '*') {

      //   }
      // }
      dart.push(result);
      // dart.push(getResult(result, dartArr));
    }
    if (dartArr[i] === 'T') {
      dart.push(Math.pow(dartArr[i-1],3));
      // dart.push(getResult(Math.pow(dartArr[i-1], 3), dartArr));
    }
  }
  console.log('dart::: ', dart);
}

test('dart', () => {
  expect(solution('1S*2D3T')).toEqual(33);
  expect(solution('1S2D3T*')).toEqual(64);
  expect(solution('1S*2D*3T')).toEqual(37);
  expect(solution('1S*2D3T*')).toEqual(37);
});
