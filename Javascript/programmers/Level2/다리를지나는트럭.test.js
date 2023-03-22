/**
* ## 이해
*
* 미지의 것: 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return
* 자료
*   - 정해진 순으로 건넌다.
    - 다리에는 트럭이 최대 bridge_length대 올라갈 수 있다.
    - 다리는 weight 이하까지의 무게를 견딜 수 있다.
* 조건
*   -
*
* ## 계획
*   - 대기 트럭에서 다리를 건널 수 있는 트럭을 뺀다.
    - 트럭이 다리를 지나면 시간을 더한다.
    - 대기트럭에 트럭이 없으면 시간을 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/
const totalWeight = (bridge) => bridge.reduce((acc, cur) => acc + cur, 0)

const solution = (bridge_length, weight, truck_weights) => {
  const bridge = Array.from({ length: bridge_length }, () => 0);
  let time = 0;

  while (true) {
    if (truck_weights.length === 0 && totalWeight(bridge) === 0) {
      return time
    }

    bridge.push(0);
    bridge.shift();
    time += 1;

    const current = truck_weights[0];

    if (totalWeight(bridge) + current <= weight && bridge.includes(0)) {
      bridge[bridge.length - 1] = current
      truck_weights = truck_weights.slice(1)
    }
  }
};

test('solution', () => {
  expect(solution(2, 10, [7, 4, 5, 6])).toEqual(8);
})