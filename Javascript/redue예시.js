function sumTotal(...numbers) {
  return numbers.reduce((total, current) => total + current, 0)
}

sumTotal(0,1,2,3,4,5,6,7,8,9)

console.log(sumTotal(0,1,2,3,4,5,6,7,8,9));