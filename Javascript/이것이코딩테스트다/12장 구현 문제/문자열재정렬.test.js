const solution = (S) => {
  // 주어진 문자열을 쪼개서 배열로 만든다. 
  const s = S.split('');

  // 배열을 순회하면서 문자열과 숫자를 나눈다.
  let str = [];
  let num = [];
  s.map((it) => {
    if (isNaN(it)) {
      return str.push(it)
    } else {
      return num.push(it)
    }
  })

  // 문자열을 오른차순으로 정렬한다.
  const sortStr = str.sort().join('');

  // 숫자를 더한다
  const sumNumber = num.map((it) => Number(it)).reduce((acc, cur) => acc + cur)
  // 이 둘의 값을 이어서 출력한다.
  return sortStr + sumNumber
}

test('sortString', () => {
  expect(solution('K1KA5CB7')).toEqual('ABCKK13');
  expect(solution('AJKDLSI412K4JSJ9D')).toEqual('ADDIJJJKKLSS20')
})