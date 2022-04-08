// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder=function(iterable){
  let unique = [];
  
  for (i=0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i+1]) {
      unique.push(iterable[i])
    }
  }
  
  return unique;
}