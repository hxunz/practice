const solution = (seoul) => {
  // String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환
  return `김서방은 ${seoul.indexOf('Kim') }에 있다`
}

test('newProcession', () => {
  expect(solution(["Jane", "Kim"])).toEqual("김서방은 1에 있다");
});
