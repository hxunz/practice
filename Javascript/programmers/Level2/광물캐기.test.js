/**
* ## 이해
*
* 미지의 것:
* 자료
*   -
* 조건
*   -
*
* ## 계획
*   -
*
* ## 실행
*
* ## 반성
*
*/

const solution = (picks, minerals) => {
  //다이아 -> 철 -> 돌
  let digMinerals = minerals;
  let fatigue = 0;
  let diamond = picks[0];
  let iron = picks[1];
  let stone = picks[2];

  while (true) {
    if (digMinerals.length === 0) {
      return fatigue;
    }

    //다이아 곡괭이 있을때
    if (diamond > 0) {
      diamond -= 1
      digMinerals = digMinerals.slice(5);
      fatigue += 5
    }

    //다이아 곡괭이 다 쓰고 철 곡괭이 있을 때
    if (diamond === 0 && iron > 0) {
      iron -= 1
      if (digMinerals[0] === 'diamond') {
        digMinerals = digMinerals.slice(1);
        fatigue += 5
      }
      iron -= 1
      if (digMinerals[0] === 'iron') {
        digMinerals = digMinerals.slice(1)
        fatigue += 1
      }
      iron -= 1
      if (digMinerals[0] === 'stone') {
        digMinerals = digMinerals.slice(1)
        fatigue += 1
      }
    }

    //다이아 곡괭이, 철 곡괭이 다 쓰고 돌 곡괭이 있을 떄
    if (diamond === 0 && iron === 0 && stone > 0) {
      stone -= 1
      if (digMinerals[0] === 'diamond') {
        digMinerals = digMinerals.slice(1)
        fatigue += 25
      }
      stone -= 1
      if (digMinerals[0] === 'iron') {
        digMinerals = digMinerals.slice(1)
        fatigue += 5
      }
      stone -= 1
      if (digMinerals[0] === 'stone') {
        digMinerals = digMinerals.slice(1)
        fatigue += 1
      }
    }

  }
  //다이아 - 돌 - 철
  //철 - 다이아 - 돌
  //철 - 돌- 다이아
  //돌 - 다이아-철
  //돌 - 철 -다이아
};

test('solution', () => {
  expect(solution([1, 3, 2], ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"])).toEqual(12);
  // expect(solution([0, 1, 1], ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"])).toEqual(50);
});

