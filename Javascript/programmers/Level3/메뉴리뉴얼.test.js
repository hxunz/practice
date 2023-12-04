function getCombination(arr, num) {
  const results = [];
  if (num === 1) return arr.map(v => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombination(rest, num - 1);
    const attached = combinations.map(v => [fixed, ...v]);
    results.push(...attached);
  });

  return results;
}

const solution = (orders, course) => {
  // 알파벳을 오름차순으로 정렬해준다.
  const newOrders = orders.map((order) => {
    return order.split('').sort().join('');
  });

  console.log('newOrders::: ', newOrders);
  // 각 문자열 마다 모든 조합 가능한 경우를 구한다.

  // 해당 조합이 몇번 나왔는지 개수를 센다.
  // let mapStr = new Map();
  // for (i = 0; i < orders.length; i++) {
  //   mapStr.set(orders[i], (mapStr.get(orders[i]) || 0) + 1);
  // };
  // console.log('mapStr::: ', mapStr);


};

test('newMenu', () => {
  // expect(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])).toEqual(["AC", "ACDE", "BCFG", "CDE"]);
  expect(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])).toEqual(["WX", "XY"]);
});
