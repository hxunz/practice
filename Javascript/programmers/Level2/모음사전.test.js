const nextWord = {
  A: 'E',
  E: 'I',
  I: 'O',
  O: 'U'
};

const solution = (word) => {
  let w = 'A';
  let count = 1;

  while (true) {
    if (w === word) {
      return count;
    }
    w = run(w);
    count++;
  }
};


const run = (word, position = 1) => {
  if (word.length < 5) {
    return `${word}A`
  }

  const next = nextWord[word[word.length - position]];
  if (!next) {
    return run(word, position + 1)
  };

  const keepWord = word.slice(0, -position);
  return keepWord + next
}

test('run', () => {
  expect(run("A")).toEqual('AA');
  expect(run("AA")).toEqual('AAA');
  expect(run("AAA")).toEqual('AAAA');
  expect(run("AAAA")).toEqual('AAAAA');
  expect(run("AAAAA")).toEqual('AAAAE');
});

// test('solution', () => {
//   expect(solution("AAAAE")).toEqual(6);
// });
