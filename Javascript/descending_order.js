// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n){
  n = n.toString();
  const num = n.split('');
  const result = num.sort(function (a, b) {
      return b - a;
    });
    const answer = result.join('');
    const ans = parseInt(answer);
    return ans;
}