const solution = (want, number, discount) => {
  let answer = 0;

  for (let i = 0; i < discount.length; i++) {
    if (check(want, number, discount.slice(i, i + 10))) {
      answer += 1
    }
  }

  return answer;
};

const check = (want, number, discount) => {
  const discountProduct = new Map();
  discount.forEach((d) => discountProduct.set(d, (discountProduct.get(d) || 0) + 1));

  for (let i = 0; i < want.length; i++) {
    if (isNaN(discountProduct.get(want[i]))) {
      return false
    }

    if (number[i] > discountProduct.get(want[i])) {
      return false
    }
  }

  return true
}

test('discountAll', () => {
  expect(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"])).toEqual(3);
})
