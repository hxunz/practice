// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum( a,b )
{
  let num = 0;
  if (a <= b) {
    for(i = a; i <= b; i++) {
      num += i;
    }
    return num;
  } else {
    for(i = b; i <= a; i++) {
      num += i;
    }
    return num;
  }
}