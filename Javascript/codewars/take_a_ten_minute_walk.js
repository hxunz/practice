// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  let ns = 0;
  let we = 0;
  
  for (i=0; i < walk.length; i++) {
    if (walk[i] === 'n') {
      ns += 1;
    } else if (walk[i] === 's') {
      ns -= 1;
    } else if (walk[i] === 'w') {
      we += 1;
    } else {
      we -= 1;
    }
  }

  return walk.length === 10 && ns === 0 && we === 0 ? true : false;
}