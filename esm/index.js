// Comments borrowed from Mitchell Hudson, @soggybag

// makes the first character of a given string uppercase
function capitalize(str) {
  // Code taken from dr.dimitru in this Stack Overflow comment:
  // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript#comment56095910_1026087
  if (str.length === 0) return '';
  return str[0].toUpperCase() + str.substring(1);
}

// makes all characters uppercase
// this is the same as .toUppercase()
function allCaps(str) {
  return str.toUpperCase();
}

// makes the first character of each word uppercase
// imagine that each word is separated by a space
function capitalizeWords(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    words[i] = capitalize(words[i]);
  }

  return words.join(' ');
}

// makes all odd characters uppercase and even characters lowercase
function oddCaps(str) {
  const characters = str.split('');

  for (let i = 0; i < characters.length; i += 1) {
    if (i % 2 === 1) {
      characters[i] = characters[i].toUpperCase();
    } else {
      characters[i] = characters[i].toLowerCase();
    }
  }

  return characters.join('');
}

// makes all even characters uppercase and odd characters lowercase
function evenCaps(str) {
  const characters = str.split('');

  for (let i = 0; i < characters.length; i += 1) {
    if (i % 2 === 0) {
      characters[i] = characters[i].toUpperCase();
    } else {
      characters[i] = characters[i].toLowerCase();
    }
  }

  return characters.join('');
}

// trims all spaces from the beginning and end of a String
// removes any extra spaces in the middle
// if more than one space appears in the middle of a string it is replaced by a single space
function removeExtraSpaces(str) {
  const trimString = str.trim();
  const items = trimString.split(' ');
  const words = [];

  for (let i = 0; i < items.length; i += 1) {
    if (items[i] !== '') {
      words.push(items[i]);
    }
  }

  return words.join(' ');
}

// removes extra spaces and replaces spaces with the hyphen '-'
// and makes all characters lowercase
function kabobCase(str) {
  const cleanString = removeExtraSpaces(str);
  const words = cleanString.split(' ');
  return words.join('-').toLowerCase();
}

// removes extra space and replaces spaces with an underscore '_'
// and makes all characters lowercase
function snakeCase(str) {
  const cleanString = removeExtraSpaces(str);
  const words = cleanString.split(' ');
  return words.join('_').toLowerCase();
}

// lowercases the first character of the first word
// then uppercases the first character of all other words, and removes all spaces
function camelCase(str) {
  const cleanString = removeExtraSpaces(str).toLowerCase();
  const words = cleanString.split(' ');

  for (let i = 1; i < words.length; i += 1) {
    words[i] = capitalize(words[i]);
  }

  return words.join('');
}

export { allCaps, camelCase, capitalize, capitalizeWords, evenCaps, kabobCase, oddCaps, removeExtraSpaces, snakeCase };
