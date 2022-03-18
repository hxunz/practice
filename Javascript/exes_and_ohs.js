// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
  const words = [...str.toLowerCase()];
  
  const x = words.filter(word => word === 'x');
  const o = words.filter(word => word === 'o');
  
  if(x.length === o.length) {
    return true
  }
  
  return false;
}