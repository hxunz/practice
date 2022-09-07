function solution(n) {
  let result = [];
  for (i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      result.push('수')
    } else {
      result.push('박')
    }
  }
  return result.join('')
}

test('수박수', () => {
  expect(solution(3)).toEqual('수박수');
});
