(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  // Comments borrowed from Mitchell Hudson, @soggybag

  // makes the first character of a given string uppercase
  String.prototype.capitalize = function capitalize() {
    // Code taken from dr.dimitru in this Stack Overflow comment:
    // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript#comment56095910_1026087
    if (this.length === 0) return ''
    return this[0].toUpperCase() + this.substring(1);
  };

  // makes all characters uppercase
  // this is the same as .toUppercase()
  String.prototype.allCaps = function allCaps() {
    return this.toUpperCase();
  };

  // makes the first character of each word uppercase
  // imagine that each word is separated by a space
  String.prototype.capitalizeWords = function capitalizeWords() {
    const words = this.split(' ');

    for (let i = 0; i < words.length; i += 1) {
      words[i] = words[i].capitalize();
    }

    return words.join(' ');
  };

  // makes all odd characters uppercase and even characters lowercase
  String.prototype.oddCaps = function oddCaps() {
    const characters = this.split('');

    for (let i = 0; i < characters.length; i += 1) {
      if (i % 2 === 1) {
        characters[i] = characters[i].toUpperCase();
      } else {
        characters[i] = characters[i].toLowerCase();
      }
    }

    return characters.join('');
  };

  // makes all even characters uppercase and odd characters lowercase
  String.prototype.evenCaps = function evenCaps() {
    const characters = this.split('');

    for (let i = 0; i < characters.length; i += 1) {
      if (i % 2 === 0) {
        characters[i] = characters[i].toUpperCase();
      } else {
        characters[i] = characters[i].toLowerCase();
      }
    }

    return characters.join('');
  };

  // trims all spaces from the beginning and end of a String
  // removes any extra spaces in the middle
  // if more than one space appears in the middle of a string it is replaced by a single space
  String.prototype.removeExtraSpaces = function removeExtraSpaces() {
    const trimString = this.trim();
    const items = trimString.split(' ');
    const words = [];

    for (let i = 0; i < items.length; i += 1) {
      if (items[i] !== '') {
        words.push(items[i]);
      }
    }

    return words.join(' ');
  };

  // removes extra spaces and replaces spaces with the hyphen '-'
  // and makes all characters lowercase
  String.prototype.kabobCase = function kabobCase() {
    const cleanString = this.removeExtraSpaces();
    const words = cleanString.split(' ');
    return words.join('-').toLowerCase();
  };

  // removes extra space and replaces spaces with an underscore '_'
  // and makes all characters lowercase
  String.prototype.snakeCase = function snakeCase() {
    const cleanString = this.removeExtraSpaces();
    const words = cleanString.split(' ');
    return words.join('_').toLowerCase();
  };

  // lowercases the first character of the first word
  // then uppercases the first character of all other words, and removes all spaces
  String.prototype.camelCase = function camelCase() {
    const cleanString = this.removeExtraSpaces().toLowerCase();
    const words = cleanString.split(' ');

    for (let i = 1; i < words.length; i += 1) {
      words[i] = words[i].capitalize();
    }

    return words.join('');
  };

}));
