// 주어진 sizes 2차원 배열내 각 배열들의 0번째 숫자들을 width라는 새로운 배열에 넣는다
// 주어진 sizes 2차원 배열내 각 배열들의 1번째 숫자들을 height라는 새로운 배열에 넣는다
// 이 배열들을 각각 내림차순으로 정렬한다
// width의 0번째 배열과 height의 0번째 배열을 곱한다
// 이 값을 리턴한다.

const solution = (sizes) => {
  let width = [];
  let height = [];

  for (i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      width = [...width, sizes[i][1]]
      height = [...height, sizes[i][0]]
    } else {
      width = [...width, sizes[i][0]]
      height = [...height, sizes[i][1]]
    }
  };

  return width.sort((a,b) => b-a)[0] * height.sort((a,b) => b-a)[0]
};

test('최소직사각형', () => {
  expect(solution([[60, 50], [30, 70], [60, 30], [80, 40]])).toEqual(4000);
});