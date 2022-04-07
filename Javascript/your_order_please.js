// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words){
  const word = words.split(' ');
  let num = [];

  for (i=0; i < word.length; i++) {
    num[word[i].match(/[1-9]/)] = word[i]
  }
  num.shift();
  
  return num.join(' ');
}