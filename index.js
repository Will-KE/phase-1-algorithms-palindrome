function reverse(word){
  return word.split('').reverse().join('');
}

function isPalindrome(word) {
  //SafeArrayQWE
  // Write your algorithm here
  const reversedWord = reverse(word);
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  when the word is the same as the word in reverse it should return true.
*/

/*
  Add written explanation of your solution here
  first we reverse the input, If the input is the same as the reversed input it,
  returns true
  else return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log(
    "=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
