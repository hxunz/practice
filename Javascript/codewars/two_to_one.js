// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
  const same = s1.concat(s2);
  const str = new Set(same);
  const result = [...str].sort();

  return result.join('');
}