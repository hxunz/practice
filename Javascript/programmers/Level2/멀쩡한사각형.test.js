/**
* ## 이해
*
* 미지의 것: 사용할 수 있는 정사각형의 개수를 구하라
* 자료
*   - 모든 격자칸은 1cm x 1cm 크기
* 조건
*   -
*
* ## 계획
*   - 원래 사용할 수 있는 정사각형의 개수 - 사용할 수 없는 정사각형의 개수
      - (w*h)-(w+h-w와h의 최대공약수)
*
* ## 실행
*
* ## 반성
*
*/

const gcd = (w, h) => {
  const min = Math.min(w, h);

  for (let i = min; i > 0; i--) {
    if (w % i === 0 && h % i === 0) {
      return i
    }
  }
}

const solution = (w, h) => {
  return (w * h) - (w + h - gcd(w, h))
};

test('solution', () => {
  expect(solution(8, 12)).toEqual(80)
});
