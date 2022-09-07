function solution(s, n) {
  const code = s.split('').map((it) => it.charCodeAt(0));

  const str = code.map((it) => {
    if (it + n > 122 || it + n > 90 && it < 97) {
      return String.fromCharCode(it - 26 + n)
    } else if (it === 32) {
      return ' '
    }
    else {
      return String.fromCharCode(it + n)
    }
  });

  return str.join('');
}

test('시저암호', () => {
  expect(solution("AB", 1)).toEqual("BC");
  expect(solution("z", 1)).toEqual("a");
  expect(solution("a B z", 4)).toEqual("e F d");
  expect(solution("P", 15)).toEqual("E");
});
