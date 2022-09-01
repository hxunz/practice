const solution = (N, a) => {
  // 성적 낮은순서대로 정렬한다.
  const sortable = Object.fromEntries(
    Object.entries(a).sort(([, a], [, b]) => a - b)
  );

  // 공백으로 구분해서 출력한다.
  const name = Object.keys(sortable).join(' ');
  return name;
};

test('sort', () => {
  expect(solution(2, { '홍길동': 95, '이순신': 77 })).toEqual('이순신 홍길동');
});
