/**
* ## 이해
*
* 미지의 것: 서로 선호하는 관계는 몇개인지 구하라
* 자료
*   - 직원A와 직원B가 서로 선호할 때 무료 식사 쿠폰을 제공한다.
    - 선호도 조사 결과 = [A,B] => A가 B를 선호한다는 의미
    - [A,B],[B,A]일 때 서로 선호한다는 의미
    - P = 선호도 조사 결과를 담은 배열
* 조건
*   - [A,B][A,B]처럼 중복 응답은 없다.
    - 직원의 정보는 자연수이다.
    - A,B는 서로 다른 수 이다.
*
* ## 계획
*   - P를 순회하면서 서로 선호하고 있는 직원을 찾는다.
      - P[i]을 임시로 저장해둔다.
        - P의 다른 요소 중 P[i][1]이 다른 P의 0번째에 위치하고 있는지 찾는다.
          - 있다면, 해당 요소의 1번째 위치가 P[i][0]과 같은지 확인한다.
            - 같다면, 임시저장해둔것 배열에서 제거한다.
            - count +1을 한다.
    - count를 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/
const removeDuplicate = (P) => {
  return [...new Set(P.map(JSON.stringify))].map(JSON.parse);
};

const drop = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)];

const find = (temporary, arr) => {
  return arr.filter((it) => it[1] === temporary[0] && it[0] === temporary[1]);
};

const solution = (P) => {
  let uniqueP = removeDuplicate(P);

  let count = 0;

  for (let i = 0; i < uniqueP.length; i++) {
    let temporary = uniqueP[i];
    let findArr = find(temporary, uniqueP);

    if (findArr.length !== 0) {
      let index = uniqueP.findIndex((arr) => arr[0] === findArr[0][0] && arr[1] === findArr[0][1]);

      uniqueP = drop(uniqueP, i);
      uniqueP = drop(uniqueP, index);
      count += 1
    }
  }

  return count;
};

test('solution', () => {
  expect(solution([[1, 3], [3, 1]])).toEqual(1);
  expect(solution([[1, 3], [3, 1], [1, 4], [1, 5], [5, 3]])).toEqual(1);
  expect(solution([[1, 3], [3, 1], [3, 5], [2, 5], [5, 3]])).toEqual(2);
  expect(solution([[1, 3], [3, 5]])).toEqual(0);
  expect(solution([[1, 4], [4, 1], [1, 4]])).toEqual(1);
  expect(solution([[1, 4], [4, 1], [1, 4], [4, 1]])).toEqual(1);
  expect(solution([[1, 4], [4, 1], [1, 4], [4, 1], [1, 4]])).toEqual(1);
});
