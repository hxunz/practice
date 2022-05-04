// https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
  let year = 0;
  for (let i=0; p0 < p; i++){
    p0 = Math.floor(p0 + p0 * percent/100 + aug);  
    year += 1;
  }
  return year;
}