const solution = (skill, skill_trees) => {
  let skills = skill.split('');
  let str = 0;
  let count = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    str = skill_trees[i].split('').filter((it) => skills.includes(it)).join('');
    if (str === skill.slice(0, str.length)) {
      count += 1;
    }
  }
  return count
}


test('solution', () => {
  expect(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])).toEqual(2);
});
