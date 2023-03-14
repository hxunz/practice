/**
* ## 이해
* 트럭 하나로 모든 배달과 수거를 마치고 물류창고까지 돌아올 수 있는 최소 이동 거리를 return
* 미지의 것:
* 자료
*   - 트럭에 실을 수 있는 재활용 택배 상자의 최대 개수를 나타내는 정수 cap,
    - 배달할 집의 개수를 나타내는 정수 n,
    - 각 집에 배달할 재활용 택배 상자의 개수를 담은 1차원 정수 배열 deliveries
    - 각 집에서 수거할 빈 재활용 택배 상자의 개수를 담은 1차원 정수 배열 pickups
* 조건
*   - i번째 집과 j번째 집과 거리 = j-i
    - 택배 상자를 최대 cap개 실을 수 있다.
    - 각 집에 배달 및 수거할 때, 원하는 개수만큼 택배를 배달하거나 수거할 수 있다.
*
* ## 계획
*   - 제일 먼 집 부터 택배 주러 간다.
      - 택배를 싣는다.
        - delivers 배열을 맨 뒤에서부터 순회한다
        - 순회하면서 택배의 개수를 센다.
        - 택배의 개수가 cap 이하일때를 구한다. -> 이게 싣고 갈 택배의 개수
      - 제일 먼 집으로 이동한다. 이때, 이동거리 count하기
        - delivers 배열을 맨 뒤에서부터 순회한다.
        - 택배 싣고온만큼 뺀다. -> 0이 될때까지 뺀다.
      - 제일 먼 집 부터 택배 수거해온다.
        - pickups 배열을 맨 뒤에서부터 순회한다.
        - cap 만큼 담는다.
*
* ## 실행
*
* ## 반성
*
*/

const solution = (cap, n, deliveries, pickups) => {
  let deliver = [];
  let pickup = [];

  // Deliver 스택 만들기
  for (let i = 0; i < deliveries.length; i++) {
    if (deliveries[i] !== 0) {
      deliver.push([i, deliveries[i]])
    }
  }

  // Pickup 스택 만들기
  for (let i = 0; i < pickups.length; i++) {
    if (pickups[i] !== 0) {
      pickup.push([i, pickups[i]])
    }
  }

  return deliverPickup(cap, deliver, pickup);
};

const deliverPickup = (cap, deliver, pickup) => {
  let total = 0;

  while (true) {
    if (deliver.length === 0 && pickup.length === 0) {
      return total
    }

    let answer = 0;
    let deliveryCap = cap;
    let otherCap = cap;

    // 거리구하기
    if (deliver.length === 0 || pickup.length === 0) {
      if (deliver.length === 0) {
        answer += (pickup[pickup.length - 1][0] + 1) * 2
      } else {
        answer += (deliver[deliver.length - 1][0] + 1) * 2
      }
    } else {
      if (deliver[deliver.length - 1][0] > pickup[pickup.length - 1][0]) {
        answer += (deliver[deliver.length - 1][0] + 1) * 2
      } else {
        answer += (pickup[pickup.length - 1][0] + 1) * 2
      }
    }

    // 배달 처리
    for (let i = deliver.length - 1; i >= 0; i--) {
      // cap이 남아 있는 경우
      if (deliveryCap > 0) {
        if (deliveryCap - deliver[i][1] >= 0) {
          deliveryCap = deliveryCap - deliver[i][1]
          deliver.pop();
        } else {
          deliver[i][1] = deliver[i][1] - deliveryCap
          deliveryCap = 0
        }
      } else {
        break;
      }
      // cap보다 deliver[i][1]이 더 큰 경우
    }

    // 수거 처리
    for (let i = pickup.length - 1; i >= 0; i--) {
      if (otherCap > 0) {
        if (otherCap - pickup[i][1] >= 0) {
          otherCap = otherCap - pickup[i][1]
          pickup.pop();
        } else {
          pickup[i][1] = pickup[i][1] - otherCap
          otherCap = 0
        }
      } else {
        break;
      }
    }

    total += answer;
  }
}


test('solution', () => {
  expect(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])).toEqual(16);
  expect(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0])).toEqual(30);
});
