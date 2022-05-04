// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  const words = text.toLowerCase().replace(/[^a-z]/g, '');
  const alphabet = [...words].map(w=> w.charCodeAt(0) - 97+1);
  return alphabet.join(' ');
}