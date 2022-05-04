// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string){
  const str = string.split(' ');
  
  for (i=0; i < str.length; i++) {
    if (str[i].length >= 5) {
      str[i] = str[i].split('').reverse().join('');
    }else {
      str[i];
    }
  }
  return str.join(' ')
}
