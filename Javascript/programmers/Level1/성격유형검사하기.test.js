const solution = (survey, choices) => {
  let category = {
    'R': 0,
    'T': 0,
    'C': 0,
    'F': 0,
    'J': 0,
    'M': 0,
    'A': 0,
    'N': 0,
  };

  for (i = 0; i < survey.length; i++) {
    const [left, right] = survey[i];

    if (choices[i] >= 5) {
      category[right] = category[right] + (choices[i] - 4);
    } else {
      category[left] = category[left] + (4 - choices[i]);
    }
  }

  const r = [
    ['R', 'T'],
    ['C', 'F'],
    ['J', 'M'],
    ['A', 'N'],
  ];

  return r.map(([left, right]) => category[left] >= category[right] ? left : right).join('');
}


test('surveyResult', () => {
  expect(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])).toEqual("TCMA");
});
