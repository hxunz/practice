/**
* ## 이해
*
* 미지의 것: 그 구간에 깔려 있는 블록의 숫자 배열을 구하라
* 자료
*   - 숫자 0이 적힌 블록들이 설치된 도로에 다른 숫자가 적힌 블록들을 설치
    - 블록에 적힌 번호가 n 일 때, 가장 첫 블록은 n * 2번째 위치에 설치
    - 그 다음은 n * 3, 그 다음은 n * 4, ...위치에 설치
    - 기존에 설치된 블록은 빼고 새로운 블록을 집어넣습니다.
    - 블록은 1이 적힌 블록부터 숫자를 1씩 증가시키며 순서대로 설치
* 조건
*   -
*
* ## 계획
*   - 각 숫자에 자신을 제외한 최대 약수를 배열에 넣는다.
    - 이를 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const findNumber = (num) => {
  if (num === 1) {
    return 0;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return num / i;
    }
  }
  return 1;
}

const solution = (begin, end) => {
  let blocks = [];

  for (let i = begin; i <= end; i++) {
    blocks.push(findNumber(i));
  }
  console.log('blocks::: ', blocks);
  return blocks;
};

test('solution', () => {
  expect(solution(1, 10)).toEqual([0, 1, 1, 2, 1, 3, 1, 4, 3, 5]);
})