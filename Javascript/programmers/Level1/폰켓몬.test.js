// 1. 문제에 대한 이해
// 우리가 풀어야 할 문제는 무엇인가?
// 내가 최대한 다양한 종류의 포켓몬을 가져갈때 포켓몬의 종류 번호의 개수를 구하라

// 주어진 자료는 무엇인가?
// nums =  N마리 폰켓몬의 종류 번호가 담긴 배열

// 조건은 무엇인가?
// 같은 종류의 포켓몬을 데려갈 수 있다.
// nums의 길이는 항상 짝수이다.
// 가장 많은 종류의 폰켓몬을 선택하는 방법이 여러 가지인 경우에도, 선택할 수 있는 폰켓몬 종류 개수의 최댓값 하나만 return

// 2. 계획
// 전에 비슷한 문제를 알고 있는가?
// 경우의 수 구하는건가 위장 문제랑 소수구하기 문제
// 근데 종류만 알면되니까 굳이 경우의 수를 다 구해볼 필요가 없을듯?

// 이 문제를 푸는데 있어서 유용하게 쓸 수 있는 지식은 무엇인가?
// 배열에서 중복을 제거하는 함수써야될것같은데 ,, 머가잇지  Set
// 아니면 filter로 중복 제거
// 아니면 어제 쓰려고 했떤 includes로 중복 거를 수 있나 -> 찾아보기

// 만약 문제를 풀 수 없다면 문제를 더 단순하게 하기 위해서 주어진 조건을 버려보아라
// 포켓몬이 2마리일때부터 생각해보자


//    총 데려갈 수 있는 포켓몬의 수를 따로 변수에 할당한다.

//    포켓몬이 2마리일때 계산
//    4마리일때 계산
//    6마리일때 계산해보자             데려갈 수 있는 포켓몬을 그냥 리턴해도 되네 머지

//    근데 6마리일때 포켓몬이 만약에 6마리인데 종류가 두마리ㅈ뿐일떄 데려갈 수 있는 최대 종류의 수는 2이다..

//    nums에서 중복값을 제거해보자

//    [3,3,1,1,2,2,2,2]인 경우 nums.length는 8이고 takePoket은 4  중복제거하면 [3,1,2]길이는 3 
//    데려갈 수 있는 takePoket이 4마린데 종류는 3개니까 최대로 데려갈 수 있는 종류는 3

//    [3,1,2,3]인 경우 nums.length는 4이고 takePoket은 2  중복제거하면 [3,1,2]길이는 3
//    데려갈 수 있는 takePoket이 2마린데 종류는 3개니까 최대로 데려갈 수 있는 종류는 2

//    takePoket의 길이 > nums중복제거한배열 => nums중복제거한배열의 길이 리턴
//    takePoket의 길이 < nums중복제거한배열 => nums중복제거한배열의 길이 리턴

const solution = (nums) => {
  const takePoket = nums.length / 2;

  const overlap = [...new Set(nums)];
  const newNums = [...overlap];

  return (takePoket > newNums.length) ? newNums.length : takePoket;
};


// 총 데려갈 수 있는 포켓몬의 수를 따로 변수에 할당한다.

// 중복값을 제거할건데
// nums에 filter를 써서 특정 조건에 일치하는 모든 값을 배열로 리턴할거다
// indexOf를 써서 배열에서 특정값이 처음으로 나타나는 index를 리턴한다.

const secondSolution = (nums) => {
  const takePoket = nums.length;
  const overlap = nums.filter((it, index) => {
    if (nums.indexOf(it) === index) {
      return it;
    };
  });

  return overlap.length > takePoket ? takePoket : overlap.length;
}

// test('포켓몬이 두마리일때', () => {
//   expect(solution([3, 1])).toEqual(1);
// })

// test('포켓몬이 네마리인데 각각 다 다른종류일때', () => {
//   expect(solution([3, 1, 2, 4])).toEqual(2);
// })

test('포켓몬6마리', () => {
  expect(solution([3,3,3,2,2,4])).toEqual(3);
})

// test('포켓몬6마리인데 종류2개', () => {
//   expect(solution([3,3,3,2,2,2])).toEqual(2);
// })

//    test('포켓몬8마리', () => {
//   expect(solution([3,3,1,1,2,2,2,2])).toEqual(3);
// })

// 3. 실행
// 풀이 계획을 실행하고, 각 단계가 올바른지 점검하라.

// 4. 반성
// 문제를 다른 방식으로 해결할 수 있는가?
// 결과나 방법을 어떤 다른 문제에 활용할 수 있는가?
// 어떻게 하면 더 효율적으로 문제를 해결할 수 있는가?
// 어떻게 하면 더 효과적으로 문제를 해결할 수 있는가?
