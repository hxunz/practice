const solution = (str1, str2) => {
  //   주어진 문자열에서 대문자를 소문자로 바꾼다.
  const newStr1 = str1.toLowerCase();
  const newStr2 = str2.toLowerCase();

  // 주어진 문자열을 단어 두개씩 잘라서 새로운 배열에 넣는다
  let arrStr1 = [];
  let arrStr2 = [];

  for (i = 0; i < newStr1.length; i++) {
    if (newStr1.slice(i, i + 2).length === 2) {
      arrStr1.push(newStr1.slice(i, i + 2));
    }
  }

  for (i = 0; i < newStr2.length; i++) {
    if (newStr2.slice(i, i + 2).length === 2) {
      arrStr2.push(newStr2.slice(i, i + 2));
    }
  }

  // 숫자나 특수문자가 있으면 배열에서 지운다. 
  const newArr1 = arrStr1.map(it => it.replace(/[^a-zA-Z]/g, "")).filter(it => it.length === 2);
  const newArr2 = arrStr2.map(it => it.replace(/[^a-zA-Z]/g, "")).filter(it => it.length === 2);

  if (newArr1.length === 0 || newArr2.length === 0) {
    return 65536;
  }

  // 이 두 배열의 교집합과 합집합을 구한다.
  let intersection = 0;
  let union = 0;
  const set = [...new Set([...newArr1, ...newArr2])];
  set.forEach((it) => {
    const arr1 = newArr1.filter(e => e === it).length;
    const arr2 = newArr2.filter(e => e === it).length;
    intersection += Math.min(arr1, arr2);
    union += Math.max(arr1, arr2);
  })

  // 나누고 65536 곱하고 소수점 버려서 리턴 
  const result = Math.floor((intersection / union) * 65536);
  return result;
};

test('news', () => {
  expect(solution('FRANCE', 'french')).toEqual(16384);
  expect(solution('handshake', 'shake hands')).toEqual(65536);
  expect(solution('aa1+aa2', 'AAAA12')).toEqual(43690);
  expect(solution('E=M*C^2', 'e=m*c^2')).toEqual(65536);
});
