/**
* ## 이해
* 유저가 탐험할 수 있는 최대 던전 수를 구하라
* 미지의 것:
* 자료
*   - 유저의 현재 피로도 k
    - dungeons = [최소필요피로도, 소모피로도]
    - "최소 필요 피로도"는 해당 던전을 탐험하기 위해 가지고 있어야 하는 최소한의 피로도
    - "소모 피로도"는 던전을 탐험한 후 소모되는 피로도
* 조건
*   - dungeons의 세로(행) 길이(즉, 던전의 개수)는 1 이상 8 이하
    - dungeons의 가로(열) 길이는 2
*
* ## 계획
*   - dungeons를 순회한다.
      - k가 필요 피로도 보다 크다면 현재 요소를 지운다
        - k-소모피로도를 한다.
        - count+1을 한다.
      - 그렇지 않다면, 현재 요소를 지운다.
        - k를 그대로 둔다.
        - count를 그대로 둔다.
    - dungeons의 길이가 0이 되면 count 값을 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const drop = (arr, index) => [...arr.slice(0, index), ...arr.slice(index + 1)];

const solution = (k, dungeons, count = 0) => {
  if (dungeons.length === 0) {
    return count;
  };

  return Math.max(...dungeons.map(([needFatigue, useFatigue], index) => {
    if (k >= needFatigue) {
      return solution(k - useFatigue, drop(dungeons, index), count + 1)
    }
    return solution(k, drop(dungeons, index), count)
  }))
};

test('solution', () => {
  expect(solution(80, [[80, 20], [50, 40], [30, 10]])).toEqual(3)
});
