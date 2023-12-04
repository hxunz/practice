const solution = (X, Y) => {
  //짝꿍 = X,Y를 비교하여 같은 숫자가 있는 경우
  //짝꿍이 없으면 -1
  //짝꿍이 0으로만 구성되어있으면 0
  const xnum = X.split('');
  const ynum = Y.split('');

  const intersection = ynum.filter(n => xnum.includes(n));
  console.log('intersection::: ', intersection);

  const filter = intersection.filter((it) => it !== '0')
  console.log('filter::: ', filter);
  const sort = intersection.sort((a, b) => b - a);
  console.log('sort::: ', sort);

  if (intersection.length === 0) {
    return '-1'
  } else if (filter.length === 0) {
    return '0'
  }
  return intersection.join('');
};

test('solution', () => {
  expect(solution("100", "11")).toEqual('1');
  // expect(solution("11", "100")).toEqual('1');
  // expect(solution("3403", "13203")).toEqual('330');
  // expect(solution('100', '2345')).toEqual('-1');
  // expect(solution("100", "203045")).toEqual('0');
  // expect(solution("100", "123450")).toEqual('10');
  // expect(solution("12321", "42531")).toEqual('321');
  // expect(solution("5525", "1255")).toEqual('552');
})