// Comments borrowed from Mitchell Hudson, @soggybag

// makes the first character of a given string uppercase
String.prototype.capitalize = function() {
  // Code taken from dr.dimitru in this Stack Overflow comment:
  // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript#comment56095910_1026087
  return this[0].toUpperCase() + this.substring(1)
}

// makes all characters uppercase
// this is the same as .toUppercase()
String.prototype.allCaps = function() {
 return this.toUpperCase()
}

// makes the first character of each word uppercase
// imagine that each word is separated by a space
String.prototype.capitalizeWords = function() {
  const words = this.split(" ")

  for (let i = 0; i < words.length; i += 1) {
    words[i] = words[i].capitalize()
  }

  return words.join(" ")
}

// makes all odd characters uppercase and even characters lowercase
String.prototype.oddCaps = function() {

}

// makes all even characters uppercase and odd characters lowercase
String.prototype.evenCaps = function() {

}

// removes all spaces from the beginning and end of a String along with any extra spaces in the middle
// if more than one space appears in the middle of a string it is replaced by a single space
String.prototype.removeExtraSpaces = function() {

}

// removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase
String.prototype.kabobCase = function() {

}

// removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase
String.prototype.snakeCase = function() {

}

// lowercases the first character of the first word
// then uppercases the first character of all other words, and removes all spaces
String.prototype.camelCase = function() {

}
