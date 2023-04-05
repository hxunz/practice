/**
* ## 이해
*
* 미지의 것: 롤케이크를 공평하게 자르는 방법의 수를 구하라.
* 자료
*   - 잘린 조각들의 크기와 올려진 토핑의 개수에 상관없이
      각 조각에 동일한 가짓수의 토핑이 올라가면 공평하게 롤케이크가 나누어진 것으로 생각합니다.
    - 어떤 경우에는 롤케이크를 공평하게 나누지 못할 수도 있습니다.
* 조건
*   -
*
* ## 계획
*   - 토핑을 왼쪽에서부터 센다.
    - 토핑을 오른쪽에서부터 센다.
    - 토핑의 가지수가 같아지면 count를 1 증가시킨다.
    - count를 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const solution = (topping) => {
  const left = {};
  const right = {};

  let size = 0;
  let leftSize = 0;

  let count = 0;

  for (let i = 0; i < topping.length; i++) {
    right[topping[i]] = (right[topping[i]] || 0) + 1;
  }

  size = Object.keys(right).length;

  for (let i = 0; i < topping.length; i++) {
    if (leftSize === size) {
      count += 1;
    } else if (leftSize > size) {
      return count;
    }
    if (!left[topping[i]]) {
      leftSize += 1;
    }
    left[topping[i]] = (left[topping[i]] || 0) + 1;
    right[topping[i]] = right[topping[i]] - 1;
    if (right[topping[i]] === 0) {
      size -= 1;
      delete right[topping[i]];
    }
  }
  return count;
};

test('solution', () => {
  expect(solution([1, 2, 1, 3, 1, 4, 1, 2])).toEqual(2);
});
