const solution = (ingredient) => {
  //1빵 2야채 3고기
  let burger = 0;
  let stack = [];

  for (let i = 0; i < ingredient.length; i++) {

    stack.push(ingredient[i]);

    if (stack[stack.length - 1] === 1 && stack[stack.length - 2] === 3 && stack[stack.length - 3] === 2 && stack[stack.length - 4] === 1) {
      for (let j = 0; j < 4; j++) {
        stack.pop()
      }
      burger++
    }
  }

  return burger;
}

// const solution = (ingredient, count = 0) => {
//   if (ingredient.join('').includes('1231') === false) {
//     return count;
//   }

//   if (ingredient.join('').includes('1231') === true) {
//     return solution(ingredient.join('').replace('1231', ''), count += 1)
//   }

//   console.log('ingredientStr::: ', ingredientStr);
//   console.log('count::: ', count);

// }

test('solution', () => {
  expect(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])).toBe(2);
  // expect(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])).toBe(0);
});
