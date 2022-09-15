const solution = (n, words) => {
  let fail = 0;
  for (i = 1; i < words.length; i++) {
    if (words.indexOf(words[i]) !== i) {
      fail = i + 1;
      break;
    }
    if (words[i - 1][words[i - 1].length - 1] !== words[i][0] || words[i].length === 1) {
      fail = i + 1;
      break;
    }
  }

  if (fail !== 0) {
    if (fail % n === 0) {
      return [n, Math.ceil(fail / n)]
    } else {
      return [fail % n, Math.ceil(fail / n)]
    }
  } else {
    return [0, 0]
  }
}

test('findNextNumber', () => {
  expect(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])).toEqual([3, 3]);
  expect(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])).toEqual([0, 0]);
  expect(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])).toEqual([1, 3]);
  expect(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "e", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])).toEqual([3, 2]);
  expect(solution(2, ['qwe', 'eqwe', 'eqwe'])).toEqual([1, 2]);
  expect(solution(2, ['land', 'dream', 'mom', 'mom', 'ror'])).toEqual([2, 2]);
});
