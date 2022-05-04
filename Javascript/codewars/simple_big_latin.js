// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
  const words = str.split(' ');
  let w = '';
  
  for (i=0; i < words.length; i++) {
    if (words[i].match(/[a-z]/i)) {
      w += words[i].substring(1) + words[i].substring(0, 1) + 'ay '
    } else {
      w += words[i]
    }
  }
  const result = w.trim();
  
  return result;
}