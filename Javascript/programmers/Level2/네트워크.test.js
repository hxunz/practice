/**
* ## 이해
*
* 미지의 것: 네트워크의 개수를 return
* 자료
*   - 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.
    - 각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
    - i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
* 조건
*   -
*
* ## 계획
*   - 인접 노드들을 구한다,
    - dfs를 사용하여 네트워크의 개수를 센다. 
*
* ## 실행
*
* ## 반성
*
*/

const solution = (n, computers) => {

};

test('solution', () => {
  expect(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]])).toBe(2);
});
