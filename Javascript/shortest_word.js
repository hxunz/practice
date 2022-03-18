// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s){
  const words = s.split(' ');
 
  const short = words.reduce((previousValue, currentValue) => {
    return currentValue.length < previousValue.length ? currentValue : previousValue;
  });
  return short.length;
}