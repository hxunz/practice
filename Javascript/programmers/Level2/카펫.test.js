const solution = (brown, yellow) => {
  let row = Math.sqrt(brown + yellow);
  //정사각형인경우
    if(Number.isInteger(row) === true){
      return [row, row];
    } else {
  // 직사각형인경우
      for (let i = Math.ceil(row) - 2; i <= yellow; i++){
        column = yellow / i;
        if ((i + 2) * (column + 2) === brown + yellow) {
          return [(i + 2) , (column + 2)]
        }
        }        
    }
};

test('carpet', () => {
  expect(solution(8, 1)).toEqual([3, 3]);
  expect(solution(10,2)).toEqual([4,3]);
});
