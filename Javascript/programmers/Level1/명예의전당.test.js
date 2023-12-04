const solution = (k, score) => {
  let finalScore = [];

  // finalScore.push(scores(k, score))

  for (let i = 0; i < score.length; i++) {
    let accScore = [];
    accScore.push(score[i])
    for (let j = i + 1; k < score.length; j++) {
      accScore.push(score[k])
      if (accScore.length === k) {
        console.log('accScore::: ', accScore);
        finalScore.push(Math.min(...accScore));
        console.log('min::: ', finalScore);
        accScore = [];
        break;
      }
    }
  }
  // console.log('finalScore::: ', finalScore);
};

//점수를 k일 동안 저장한다.
//점수를 k일 동안 저장했을 때 그 중에서 가장 작은 점수를 구한다.
// const scores = (k, score) => {
//   let accScore = [];

//   if (accScore.length > k) {
//     return Math.min(...accScore)
//   }
//   accScore.push(score.slice(0, 1));

//   return scores(k, score.slice(1));
// }

test('solution', () => {
  expect(solution(3, [10, 100, 20, 150, 1, 100, 200])).toEqual([10, 10, 10, 20, 20, 100, 100]);
});
