/**
* ## 이해

* 미지의 것: 수웅이가 준비한 음식의 양을 칼로리가 적은 순서대로 나타내는 정수 배열 food가 주어졌을 때, 대회를 위한 음식의 배치를 나타내는 문자열을 return
* 자료
*   - 한명은 왼쪽부터 한명은 오른쪽부터 먹는다.
    - 가운데에는 물이 있다.
    - 물을 먼저 마시는 사람이 이긴다.
    - 음식의 순서는 칼로리가 적은 순서대로 먹는다.
    - food에는 음식이 칼로리가 적은 순서대로 담겨 있다.
    - food[0]은 물의 양이고 항상 1이다.
    - food[i]는 i번 음식의 수이다. food = [1,2] -> 1번 음식이 2개라는 의미
* 조건
*   - 음식의 종류와 양이 같고 먹는 순서도 같다.
    - 음식이 1개면 둘 다 못 먹는다.
*
* ## 계획
*   - 왼쪽 사람이 먹을 수 있는 음식 순서대로 나열한다.
      - food를 첫번째 인덱스부터 반복문을 돈다.
      - 이때 food의 값을 2로 나누는데 이 때 나머지는 버린다.
      - 위 값만큼 빈 배열에 해당 food의 인덱스를 넣는다.
    - 오른쪽 사람이 먹을 수 있는 음식 순서대로 나열한다.
      - 왼쪽 사람 음식을 거꾸로 뒤집는다.
    - 왼쪽 사람이 먹을 수 있는 음식을 나열하고 0을 넣고 오른쪽 사람이 먹을 수 있는 음식을 문자열로 나열한다.
      - 왼쪽 사람 음식 + 0 + 오른쪽 사람 음식
    - 이를 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

// const solution = (food) => {
//   let eat = [];
//   for (let i = 1; i < food.length; i++) {
//     eat.push(Math.floor(food[i] / 2))
//   }
//   let left = '';
//   eat.forEach((count, index) => {
//     left += `${(index + 1)}`.repeat(count)
//   });

//   let right = left.split('').reverse().join('');

//   const result = left + '0' + right
//   return result;
// };

const counts = (food) => food.slice(1).map((it) => Math.floor(it / 2));
const leftEat = (foodCounts) => foodCounts.reduce((acc, cur, index) => acc + `${index + 1}`.repeat(cur), '');
const rightEat = (leftEat) => leftEat.split('').reverse().join('');

const solution = (food) => {
  const foodCounts = counts(food);
  const left = leftEat(foodCounts);
  const right = rightEat(left);

  return left + '0' + right;
};

test('solution', () => {
  expect(solution([1, 3, 4, 6])).toEqual("1223330333221");
  expect(solution([1, 7, 1, 2])).toEqual("111303111");
});
