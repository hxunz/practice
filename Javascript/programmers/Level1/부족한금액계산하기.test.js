// 1. 문제에 대한 이해
// 우리가 풀어야 할 문제는 무엇인가?
// 놀이기구 이용료가 이용할때마다 N배가 오르는데 놀이기구를 count번타게되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return

// 주어진 자료는 무엇인가?
// price = 이용료
// money = 처음 가지고 있던 금액
// count = 놀이기구의 이용 횟수

// 조건은 무엇인가?
// 금액이 부족하지 않으면 0을 return

// 2. 계획
// 이 문제를 푸는데 있어서 유용하게 쓸 수 있는 지식은 무엇인가?
// reduce, for

// price를 count번 더해라
// 위의 값이 money보다 작다면 0을 리턴하고 그렇지 않다면,
// money에서 위의 값을 빼라
// 위의 값을 절대값으로 리턴해라

// 3. 실행
// 풀이 계획을 실행하고, 각 단계가 올바른지 점검하라.

const solution = (price, money, count) => {
  let total = 0; 

  for (let index = 0; index <= count; index++) {
    total += price*index
  };
  return total < money ? 0 : total - money;
};

test('부족한금액계산하기', () => {
  expect(solution(3, 20, 4)).toEqual(10);
})

// 4. 반성
// 문제를 다른 방식으로 해결할 수 있는가?
// 결과나 방법을 어떤 다른 문제에 활용할 수 있는가?
// 어떻게 하면 더 효율적으로 문제를 해결할 수 있는가?
// 어떻게 하면 더 효과적으로 문제를 해결할 수 있는가?
