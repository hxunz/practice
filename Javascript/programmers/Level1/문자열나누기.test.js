const solution = (s) => {
  let sameCnt = 0;
  let countX = 0;
  let countNotX = 0;
  let firstWord = '';

  for (let word of s) {
    if (!firstWord) {
      firstWord = word;
    }

    if (firstWord === word) {
      countX++;
    } else {
      countNotX++;
    }

    if (countX === countNotX) {
      sameCnt++;
      countX = 0;
      countNotX = 0;
      firstWord = '';
    }
  }

  if (firstWord) {
    sameCnt++;
  }

  return sameCnt;
}

test('문자열 나누기', () => {
  expect(solution('banana')).toBe(3);
})
