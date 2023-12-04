// const factorial = (number) => {
//   if (number === 1) {
//     return 1;
//   }

//   return number * factorial(number - 1)
// }

const factorial = (number, total = 1) => {
  if (number === 1) {
    return total;
  }

  return factorial(number - 1, number * total)
}

const factorial = (number) => {
  let total = 1;
  for (let i = number; i >= 1; i--) {
    total *= i;
  }
  return total;
};

const factorial = (number) => {
  let result = 1;
  let i = number;

  while (i >= 1) {
    result *= i;
    i--;
  }

  return result;
}

test("factorial", () => {
  expect(factorial(3)).toEqual(6);
});
