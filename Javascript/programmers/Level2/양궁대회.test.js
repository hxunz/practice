const dfs = (n, info, arr, result = [], score = 0) => {
  if (info.length === 1) {
    arr.push(score, [...result, n]);
    return;
  }

  const a = info[0]
  //프로도가 화살 쏠 때
  if (n >= a + 1) {
    dfs(n - (a + 1), info.slice(1), arr, [...result, a + 1], score + (info.length - 1))
  }

  //프로도가 화살 안 쏠 때
  if (a === 0) {
    dfs(n, info.slice(1), arr, [...result, 0], score)
  } else {
    dfs(n, info.slice(1), arr, [...result, 0], score - (info.length - 1))
  }
}

const solution = (n, info) => {
  const arr = [];
  dfs(n, info, arr);

  // 가장 큰 점수차이로 우승할 수 있는 경우가 여러가지인 경우 가장 낮은 점수를 더 많이 맞힌 경우를 return
  // score가 가장 높은 점수를 찾는다.
  let scoreArr = [];
  for (let i = 1; i < arr.length; i += 2) {
    let totalScore = arr[i].reduce((acc, cur) => acc + cur);
    if (totalScore === n) {
      scoreArr.push(arr[i - 1], arr[i]);
    }
  }

  let scores = [];
  for (let i = 0; i < scoreArr.length; i += 2) {
    scores.push(scoreArr[i]);
  }

  const maxScore = Math.max(...scores);

  if (maxScore <= 0) {
    return [-1]
  }

  let result = [];
  for (let i = 0; i < scoreArr.length; i += 2) {
    if (scoreArr[i] === maxScore) {
      result.push(scoreArr[i + 1])
    }
  }
  console.log('result::: ', result);
  if (result.length === 1) {
    return result.reduce((acc, cur) => acc.concat(cur));
  }


  // reduce로 바꾸기
  const answer = result.reduce((acc, cur) => {
    for (let i = cur.length - 1; i >= 0; i--) {
      if (cur[1][i] > acc[1][i]) {
        return cur;
      }
      if (cur[1][i] < acc[1][i]) {
        return acc;
      }
      if (cur[1][i] === acc[1][i]) {
        return cur;
      }
    }
  })
  console.log('answer::: ', answer);

  return answer
  // let max = result[0];
  // for (let i = 1; i < result.length; i++) {
  //   for (let j = max.length - 1; j >= 0; j--) {
  //     if (max[j] > result[i][j]) {
  //       break;
  //     }

  //     if (max[j] < result[i][j]) {
  //       max = result[i];
  //       break;
  //     }

  //     if (max[j] === result[i][j]) {
  //       continue
  //     }
  //   }
  // }
  // return max
};

test('count', () => {
  // expect(solution(2, [1, 1])).toEqual([2, 0]);
  // expect(solution(2, [1, 1, 0])).toEqual([2, 0, 0]);
  // expect(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0])).toEqual([0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0]);
  // expect(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual([-1]);
  expect(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1])).toEqual([1, 1, 2, 0, 1, 2, 2, 0, 0, 0, 0]);
  // expect(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3])).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2]);
});
