// 1. 문제에 대한 이해
// 우리가 풀어야 할 문제는 무엇인가?
// 수포자 세명이 찍어서 문제를 푸는데 누가 제일 많이 맞췄을까?

// 주어진 자료는 무엇인가?
// 정답이 들어가 있는 배열 answers
// 수포자가 찍는 방식 
// 수포자1 : 12345 - 12345 반복
// 수포자2 : 21232425 - 21232425 반복
// 수포자3 : 3311224455 - 3311224455 반복

// 조건은 무엇인가?
// 수포자는 세명이다.

// 우리가 문제를 풀기 위해 주어진 자료가 충분한가?
// 숨겨진 조건이나 자료가 있는가? 그렇다면 그 것을 다른 방법으로 해석해보라.

// 2. 계획
// 이 문제를 푸는데 있어서 유용하게 쓸 수 있는 지식은 무엇인가?
// 재귀? 
// map()을 사용할 수 있을것같다.

// 비슷한 문제를 풀어본 적이 있다면 그 것을 활용할 수 있는가?

// 만약 문제를 풀 수 없다면 문제를 더 단순하게 하기 위해서 주어진 조건을 버려보아라
// answers가 [1]일때 부터 테스트를 통과시키자

// 주어진 자료로부터 유용한 것을 이끌어 낼 수 있는가?
// 자료는 모두 사용했는가?
// 조건을 모두 사용했는가?
// 문제에 포함된 핵심적인 개념은 모두 고려했는가?

//  수포자 3인방의 정답 찍기 패턴을 담은 배열을 만든다
//  이 배열과 answers배열을 서로 돌면서(?) 
//  각 인덱스가 동일한 요소끼리 비교한다

//    수포자1의 답이 일치하면 빈 배열에 a를 넣어준다. 
//    수포자2의 답이 일치하면 빈 배열에 b를 넣어준다. 
//    수포자3의 답이 일치하면 빈 배열에 c를 넣어준다. 

//    이 배열에 담긴 문자열의 개수를 비교해서 
//    가장 많은 문자열이 있는 수포자가 정답을 가장 많이 맞춘 사람이다. 


//    아니면 인덱스 동일한 요소끼리 비교할때 
//    답이 일치하는 경우 count + 1을 해줘도 될것같다. 
//    근데 count+1을 하는 경우에 수포자 삼인방 각각에 대한 카운트 값을 증가 시켜야된다. 
//    그러면 결국 count 값이 가장 많은 사람이 정답을 많이 맞춘사람이다. 

const PersonOne = [1, 2, 3, 4, 5];
const PersonTwo = [2, 1, 2, 3, 2, 4, 2, 5];
const PersonThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

const solution = (answers) => {
  const score = [0, 0, 0];

  answers.forEach((answer, index) => {
    if (answer === PersonOne[index % PersonOne.length]) score[0] += 1;
    if (answer === PersonTwo[index % PersonTwo.length]) score[1] += 1;
    if (answer === PersonThree[index % PersonThree.length]) score[2] += 1;
  });
  return finalSolution(score);
};

const finalSolution = (score) => {
  const topScore = Math.max(...score);
  let winner = [];

  score.forEach((num, index) => {
    if (num === topScore) winner.push(index + 1);
  })
  return winner;
};

// const finalSolution = (score) => {
//   let winner = [];

//   if (score[0] > score[1]) {
//     winner = [1];
//   } else if (score[0] === score[1]) {
//     winner = [1, 2];
//   } else {
//     winner = [2];
//   };

//   if (score[winner[0]-1] > score[2]) {
//     return winner;
//   } else if (score[winner[0]-1] === score[2]) {
//     return[...winner, 3];
//   } else {
//     return [3];
//   };
// }

test('1번이 일등일때', () => {
  expect(solution([1,2,3,4,5])).toEqual([1]);
});


// 3. 실행
// 풀이 계획을 실행하고, 각 단계가 올바른지 점검하라.

// 4. 반성
// 문제를 다른 방식으로 해결할 수 있는가?
// 결과나 방법을 어떤 다른 문제에 활용할 수 있는가?
// 어떻게 하면 더 효율적으로 문제를 해결할 수 있는가?
// 어떻게 하면 더 효과적으로 문제를 해결할 수 있는가?
