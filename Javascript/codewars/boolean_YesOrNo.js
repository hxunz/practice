// Complete the method that takes a boolean value and return a "Yes" string for true, 
// or a "No" string for false.

function boolToWord(bool) {
  let result;
  if (bool === true) {
    result = 'Yes';
  } else {
    result = 'No';
  }
  return result;
}