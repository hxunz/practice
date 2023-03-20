/**
* ## 이해
*
* 미지의 것: 마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 구하라
* 자료
*   - 땅따먹기 게임의 땅(land)은 총 N행 4열로 이루어져 있ㄷㅏ.
    - 모든 칸에는 점수가 쓰여 있습니다
    - 1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다.
    - 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.
* 조건
*   -
*
* ## 계획
*   - land를 순회하면서 land의 각 땅을 밟는데 다음 밟을 땅은 현재 땅의 인덱스를 포함하면 안된다.
    - 밟을 수 있는 땅 중에서 가장 큰 숫자를 밝고 score에 더한다.
    - 마지막 땅까지 다 밟으면 결과 배열에 담는다
    - 결과 배열의 숫자중에 가장 큰 값을 리턴한다.
*
* ## 실행
*
* ## 반성
*
*/

const run = (current, lands) => {
  let index = 0;
  while (true) {
    if (index === lands.length) {
      return Math.max(...current);
    }

    const nextLand = lands[index].map((it, index) => {
      return it + Math.max(...current.filter((_, i) => i !== index))
    });

    current = nextLand;
    index++;
  }
}

const solution2 = (land) => {
  const [current] = land;

  return run(current, land.slice(1))
};

const solution = (land) => {
  let result = land[0];

  for (let j = 1; j < land.length; j++) {
    const result2 = []
    for (let i = 0; i < 4; i++) {
      result2.push(land[j][i] + Math.max(...result.filter((_, index) => index !== i)))
    }
    result = result2;
  }
  return Math.max(...result);
};

test('solution', () => {
  expect(solution([
    [1, 2, 3, 5],
  ])).toEqual(5);

  expect(solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
  ])).toEqual(12);

  expect(solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])).toEqual(16);

  expect(solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
    [1, 1, 1, 1],
  ])).toEqual(17);
});
