function solution(s) {
  const arr = s.toLowerCase().split('');

  //p의 개수 세기
  let p = 0;
  arr.map((it) => {
    if (it === 'p') {
      return p++
    }
  })

  //y의 개수 세기
  let y = 0;
  arr.map((it) => {
    if (it === 'y') {
      return y++
    }
  })

  //둘 비교하기
  return p === y ? true : false

}

test('countStr', () => {
  expect(solution("pPoooyY")).toEqual(true);
});
