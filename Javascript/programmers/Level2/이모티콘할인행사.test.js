/**
* ## 이해
행사 목적을 최대한으로 달성했을 때의 이모티콘 플러스 서비스 가입 수와 이모티콘 매출액을 1차원 정수 배열에 담아 return
*
* 미지의 것:
* 자료
*   - users = [비율, 가격], 비율은 할인율이고 가격은 해당 가격 이상구매하게 되면 이모티콘 플러스 서비스에 가입한다는 의미
    - 이모티콘 m개의 정가를 담은 1차원 정수 배열 emoticons
    - n명의 카카오톡 사용자들에게 이모티콘 m개를 할인하여 판매
    - 할인율은 10,20,30,40%
* 조건
*   - 이모티콘을 하나만 구매할 수도 있음
    - 사용자별로 사용할 수 있는 할인율이 다르다.
*
* ## 계획
*   - 사용자별로 구매하는 이모티콘 가격을 구한다.
      - 할인율 별로 이모티콘의 가격을 구한다.
        - users에서 할인율만 따로 빼서 새로운 배열로 만든다.
        - 이거랑 emoticons를 동시에 순회한다.
        - 할인율 배열을 순회하면서 할인율이 5라면, 5일때 emoticons의 값을 계산한다.
        - 10일때, emoticons의 값을 계산한다.
        - 20일때, 30일때, 40일때 emoticons의 값을 계산한다.
    - 서비스 가입자가 n명일 때 이모티콘 판매액을 구한다.
      - 서비스 가입자가 1명일 때 이모티콘 판매액을 구한다.
      - 서비스 가입자가 2명일 때 이모티콘 판매액을 구한다.
      - 위를 반복한다.
      - 서비스 가입자가 1명 이상일때 이모티콘 판매액이 최고점일 때를 구한다.
*
* ## 실행
*
* ## 반성
*
*/

const discountRates = [10, 20, 30, 40];

const discountCases = (emoticons, result = []) => {
  if (emoticons.length === 0) {
    return result;
  }
  const emoticon = emoticons[0];

  const discounted = [];
  discountRates.forEach(rate => {
    discounted.push([emoticon, rate]);
  });

  if (result.length === 0) {
    return discountCases(emoticons.slice(1), discounted.map(it => [it]));
  }

  const p = [];
  result.forEach(it => {
    discounted.forEach(discount => {
      p.push([...it, discount]);
    });
  });

  return discountCases(emoticons.slice(1), p)
}

const calculate = (discountCase, base) => {
  return discountCase.reduce((acc, [price, discountRate]) => {
    if (discountRate >= base) {
      return acc + price * (100 - discountRate) * (1 / 100);
    }
    return acc;
  }, 0)
};

const process = (users, discountCase) => users.map(([base, limit]) => {
  const sum = calculate(discountCase, base);
  return [sum, limit];
}).reduce((acc, [sum, limit]) => {
  if (sum >= limit) {
    return [acc[0] + 1, acc[1]];
  }
  return [acc[0], acc[1] + sum];
}, [0, 0]);

const solution = (users, emoticons) => {
  return discountCases(emoticons)
    .map(i => process(users, i))
    .sort((a, b) => {
      if (a[0] > b[0]) {
        return -1;
      } if (a[0] < b[0]) {
        return 1;
      }
      return b[1] - a[1];
    })[0];
}

test('solution', () => {
  expect(solution([[40, 10000], [25, 10000]], [7000, 9000])).toEqual([1, 5400]);
});
