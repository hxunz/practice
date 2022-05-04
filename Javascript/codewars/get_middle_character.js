// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  const odd = s.length % 2 === 1;
  const middleIndex = Math.floor(s.length / 2);

  if (odd) {
    return s[middleIndex]
  }
  return `${s[middleIndex - 1]}${s[middleIndex]}`;
}