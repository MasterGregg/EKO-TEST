/**
 * Gregory Harzo
 * Javascript Test for EKO
 */


// GLOBAL
const WORDS_TASK1 = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN',
'MARO', 'ORAM', 'MONJA', 'ALEXIS'];

const WORDS_TASK2 = ['foo(bar)', '(bar)', 'foo(bar)blim', 'foo(foo(bar))blim'];


/**
 * Task 1
 * Generate key from word
 * If word contain sames letters than another word, they will get same value key
 * @param {*} word 
 * Return key number 
 */
function getKeyFromWord(word){
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXWZ'.split('');
  var chars = word.toUpperCase().split('');
  var key = 0;

  for(var i=0;i<chars.length;i++){
    key += alphabet.indexOf(chars[i]);
  }

  return key;
}

/**
 * Task 1
 * Group words array
 * @param {*} array 
 * Return object structure like {key:[lolo, olol], key2:[tata, atat]}
 */
function groupWords(array){
  var result = {};

  array.forEach(function(val){
    var key = getKeyFromWord(val);

    // If no key for this word, we create new array for this key
    if(!result.hasOwnProperty(key)) result[key] = [];

    result[key].push(val);
  });

  return result;
}

/**
 * Task 2
 * Reverse string
 * @param {*} str string to reverse 
 * Return str reversed
 */
function reverseString(str) {
  // String to char array
  var chars = str.split("");

  // Reverse
  var reverse = chars.reverse();

  // return char array to string
  return reverse.join("");
}

/**
 * Task 2
 * Get word between Parenthesis
 * @param {*} str 
 */
function getWordBetweenParenthesis(str){
  var firstIndex = str.indexOf('(') + 1;
  var secondIndex = str.lastIndexOf(')');

  return (firstIndex >= 0 && secondIndex >= 0 ? str.substring(firstIndex, secondIndex) : "");
}

/**
 * Task 2
 * Remove parenthesis and reverse content
 * @param {*} array 
 */
function removeParenthesisAndReverse(array){

  var result = {};

  array.forEach(function(val){
    var temp = val;

    if(val.indexOf("(") >= 0 && val.lastIndexOf(")") >= 0){

      // Get content between first index '(' and last index ')'
      var contentOrigin = getWordBetweenParenthesis(val);

      // Remove '(' and ')' inside
      var content = contentOrigin.replace("(", "").replace(")", "");

      // Reverse content 
      var reverse = reverseString(content);

      // Replace origin content by new content reversed
      temp = temp.replace("("+contentOrigin+")", reverse);
    }

    result[val] = temp;

  });

  return result;
}

// Task 1
console.log("TASK 1");
var result1 = groupWords(WORDS_TASK1);
Object.keys(result1).forEach(function(key){
  console.log(result1[key]);
})
console.log("\n");

// Task 2
console.log("TASK 2");
var result2 = removeParenthesisAndReverse(WORDS_TASK2);
Object.keys(result2).forEach(function(key){
  console.log(key+" => "+result2[key]);
})
