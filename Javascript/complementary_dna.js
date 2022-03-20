// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna) {
  const words = [...dna];
  
  const result = words.map((word) => {
    if (word === 'A') {
      return 'T'
    }
    else if (word === 'T') {
      return 'A'
    }
    else if (word === 'C') {
      return 'G'
    }
    else 
      return 'C'
  })
  console.log(result.join(''));
  return result.join('');
}