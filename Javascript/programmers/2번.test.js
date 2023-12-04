/**
* ## 이해
*
* 미지의 것: 도로를 빠져나올 수 있는 출발점의 개수를 구하라
* 자료
*   - > : 오른쪽으로 1칸
    - < : 왼쪽으로 1칸
    - 로봇은 도로의 아무 블록에서나 출발할 수 있다.
    - 최종 목표는 도로를 빠져나와야한다.
* 조건
*   - p의 길이는 200,000이하의 자연수이다.
*
* ## 계획
*   - p를 순회하면서 도로를 빠져나올 수 있는지 없는지 확인한다
      - p[i]가 >일 때 p[i]~p[p.length-1]까지의 요소가 전부 >리면 count+1
      - p[i]가 <일 때 p[0]~p[i]사이의 요소가 전부 < 라면 count+1
*
* ## 실행
*
* ## 반성
*
*/

const right = (p, index) => {
  for (let i = index; i < p.length; i++) {
    if (p[i] === '<') {
      return false;
    }
  }
  return true;
};

const left = (p, index) => {
  for (let i = index; i >= 0; i--) {
    if (p[i] === '>') {
      return false;
    }
  }
  return true;
};

const solution = (p) => {
  let count = 0;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '>') {
      let checkRight = right(p, i);
      if (checkRight) {
        count += 1;
      }
    }
    if (p[i] === '<') {
      let checkLeft = left(p, i);
      if (checkLeft) {
        count += 1;
      }
    }
  }
  return count;
};


test('solution', () => {
  expect(solution("<<<><")).toEqual(3);
});
