/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/
function RemoveSpecialCharacter(str) {
  for (let i of str) {
    if (!(i >='a' && i <='z')) 
    {
      str = str.replace(i, "");
    }
  }
  return str;
}
function isPalindrome(str) {
  str = str.toLowerCase();
  str = RemoveSpecialCharacter(str);
  var i = 0;
  var j = str.length - 1;
  while (i <= j) {
    if (str[i] != str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
module.exports = isPalindrome;
