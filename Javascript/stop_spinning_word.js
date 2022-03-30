// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(string){
  const str = string.split(' ');
  let result = '';
  
  for (i=0; i < str.length; i++) {
    if (str[i].length >= 5) {
      result += str[i].split('').reverse().join('');
    }else {
      result += str[i];
    }
  }
  return result;
}
