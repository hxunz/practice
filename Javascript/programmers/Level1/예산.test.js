// 1. 문제에 대한 이해
// 우리가 풀어야 할 문제는 무엇인가?
// 최대 몇 개의 부서에 물품을 지원할 수 있는가?

// 주어진 자료는 무엇인가?
// d : 부서별로 신청한 금액
// budget : 예산

// 조건은 무엇인가?
// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해줘야한다.

// 숨겨진 조건이나 자료가 있는가? 그렇다면 그 것을 다른 방법으로 해석해보라.

// 2. 계획
// 이 문제를 푸는데 있어서 유용하게 쓸 수 있는 지식은 무엇인가?
// map이나 foreach

//    * foreach
//    d를 올림차순으로 정리한다.
//    변수 money에 0을 선언 (물품 살 수 있는 최대 예산 담을 곳)
//    변수 count에 0을 선언 (몇개의 부서에게 물품을 줄 수 있는지 담을 곳)
//    d를 올림차순 한 배열을 순회하면서 이 배열의 요소들을 money에 더할 것
//    money가 budget 이하인 경우에는 count에 +1을 해주고
//    count 값 리턴

//    * map
//    d를 올림차순으로 정리한다.
//    변수 count에 0을 선언 (몇개의 부서에게 물품을 줄 수 있는지 담을 곳)
//    d를 올림차순 한 배열(departement)을 순회하면서 이 배열의 요소들을 budget에서 뺼 것
//    그리고 count에는 +1을 해줄 것
//    budget이 departement의 요소보다 작을 경우 빼지 않는다.
//    count 값 리턴


// 3. 실행
// 풀이 계획을 실행하고, 각 단계가 올바른지 점검하라.

const solution = (d, budget) => {
  let money = 0;
  let count = 0;
  const departement = d.sort((a, b) => a-b);

  departement.forEach(it => {
    money += it;
    if (money <= budget) {
      count++;
    }
  });

  return count;
};

const solution = (d, budget) => {
  const departement = d.sort((a, b) => a - b);

  return departement.map(it => budget -= it).filter(it => it >= 0).length;
};

test('예산', () => {
  expect(solution([1, 3, 2, 5, 4], 9)).toEqual(3);
  expect(solution([2,2,3,3], 10)).toEqual(4);
});

// 4. 반성
// 문제를 다른 방식으로 해결할 수 있는가?
// 결과나 방법을 어떤 다른 문제에 활용할 수 있는가?
// 어떻게 하면 더 효율적으로 문제를 해결할 수 있는가?
// 어떻게 하면 더 효과적으로 문제를 해결할 수 있는가?
