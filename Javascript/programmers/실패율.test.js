// 1. 문제에 대한 이해
// 우리가 풀어야 할 문제는 무엇인가?
// 실패율이 높은 스테이지부터 스테이지 번호를 내림차순으로 나타내라.

// 주어진 자료는 무엇인가?
// 실패율 구하는 방법 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// N : 전체 스테이지의 개수
// stages : 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열

// 조건은 무엇인가?
// stages에는 1 이상 N + 1 이하의 자연수가 담겨있다.
// N + 1 은 마지막 스테이지(N 번째 스테이지) 까지 클리어 한 사용자를 나타낸다.
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
// 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.

// 숨겨진 조건이나 자료가 있는가? 그렇다면 그 것을 다른 방법으로 해석해보라.
// return 되는 배열의 길이는 N의 길이와 같다.

// 2. 계획
// 전에 비슷한 문제를 알고 있는가?
// 이 문제를 푸는데 있어서 유용하게 쓸 수 있는 지식은 무엇인가?
// 비슷한 문제를 풀어본 적이 있다면 그 것을 활용할 수 있는가?
// 만약 문제를 풀 수 없다면 문제를 더 단순하게 하기 위해서 주어진 조건을 버려보아라

//    각 스테이지 마다 클리어 못한 사람이 몇명인지 체크한 배열(levelStages)을 새로 만들어준다
//    ex) [2,1,2,6,2,4,3,3] -> [1,3,2,1,0,1]
//      스테이지의 수
//      사람들이 현재 위치한 스테이지

//    전체 스테이지 개수가 N이기 때문에 위 배열의 인덱스 N 이상의 수는 계산할 필요가 없다. 

//    스테이지에 도달했거나 지나간 인원 담은 변수로 만들어서
//    levelStages 값을 누적하면서 배열로 만들면,, [8,7,2,2,1]이렇게 되니까 이걸 새로운 변수에 할당을 하고 (clearPerson)
//    levelStages[0] / clearPerson[0]
//    levelStages[1] / clearPerson[1]

//    이렇게 반복해주면서 인덱스 N-1번까지 계산을 한다.
//    계산을 한 것을 빈 배열에 넣어준다.

//    실패율이 높은 순서대로 인덱스 번호를 정렬시킨다.
//    이때, 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.


// 각 스테이지에 있는 플레이어 수를 구한다.
// 스테이지에 도달한 플레이어 수를 구한다.
// 각 스테이지의 실패율을 구한다.
// 각 스테이지의 실패율로 내림차순으로 정렬한다.
//   * 실패율이 같다면 오름차순으로 정렬한다.
// 반환한다.

// 3. 실행
// 풀이 계획을 실행하고, 각 단계가 올바른지 점검하라.

const solution = (N, stages) => {
  let range = [];
  for(i = 1; i < N+2; i++) {
      range.push(i);
  };

  const usersInStages = range.reduce((peopleCount, stage) => [
    ...peopleCount,
    stages.filter((it) => it === stage).length
  ], []);
  
  const personInStages = [];
  for (i = 0; i < N + 1; i++) {
    personInStages.push(stages.filter(stage => stage === i + 1).length);
  }

  console.log('personInStages::: ', personInStages);

  let remainPersons = stages.length;
  const fail = usersInStages.map((it, index) => {
    const result = it / remainPersons;
    remainPersons -= it;
    return {
      index: index + 1,
      percent: result
    };
  }).slice(0, N);
  
  const test = fail.sort((a, b) => b.percent - a.percent);
  const realResult = test.map(it => it.index);
  return realResult;
};

test('실패율', () => {
  expect(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5]);
});

test('모든 사용자가 마지막 스테이지에 있을 경우', () => {
  expect(solution(4, [4, 4, 4, 4, 4])).toEqual([4, 1, 2, 3]);
});

// 4. 반성
// 문제를 다른 방식으로 해결할 수 있는가?
// 결과나 방법을 어떤 다른 문제에 활용할 수 있는가?
// 어떻게 하면 더 효율적으로 문제를 해결할 수 있는가?
// 어떻게 하면 더 효과적으로 문제를 해결할 수 있는가?
