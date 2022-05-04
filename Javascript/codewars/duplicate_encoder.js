// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

function duplicateEncode(word){
  const arrWord = [...word.toLowerCase()];
  
  const newWord = arrWord.reduce(function(accumulator, currentValue, currentIndex, arrWord) {
    const text = arrWord.filter(x => x === currentValue)
    const newText = text.length === 1 ? '(' : ')'
    return accumulator + newText;
  }, '');
  return newWord;
};
