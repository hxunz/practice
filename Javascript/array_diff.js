// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  const diff = a.filter(x => !b.includes(x)).concat(b.filter(x => !a.includes(x)));
  
  if (a.length === 0 | b.length === 0) {
    return a
  } else {
    return diff;
  }
}