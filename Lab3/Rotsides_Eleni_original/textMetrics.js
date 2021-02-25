const removeItems = require('remove-array-items');

function createMetrics(text) {
  // error handling
  if (!text) throw 'Please provide string input';
  if (text === undefined) throw 'Input cannot be undefined';
  if (text === null) throw 'Input cannot be null';
  if (typeof text !== 'string') throw 'Input must be a string';

  let lowerText = text.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = [
    'b',
    'c',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'm',
    'n',
    'p',
    'q',
    'r',
    's',
    't',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let wordsArr = [];

  const metrics = {
    totalLetters: 0,
    totalNonLetters: 0,
    totalVowels: 0,
    totalConsonants: 0,
    totalWords: 0,
    uniqueWords: 0,
    longWords: 0,
    averageWordLength: 0,
    wordOccurrences: {},
  };

  for (let i = 0; i < lowerText.length; i++) {
    if (letters.includes(lowerText[i])) {
      metrics.totalLetters++;
    }
    if (!letters.includes(lowerText[i])) {
      metrics.totalNonLetters++;
      if (lowerText[i] !== ' ') {
        lowerText = lowerText.replace(lowerText[i], ' '); // replaces non letters with a space
      }
    }
    if (vowels.includes(lowerText[i])) {
      metrics.totalVowels++;
    }
    if (consonants.includes(lowerText[i])) {
      metrics.totalConsonants++;
    }
  }

  wordsArr = lowerText.split(' '); // splits at spaces
  wordsArr.sort(); // sorts it so I can do an easy remove later

  let count = 0; // counter variable
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === '') {
      count++;
      // counts how many '' there are ... the logic in my code does something weird so I needed to fix it
    }
  }
  /*
  I tried to fix code with more code and note to self: never do that again. NEVER.
  I couldn't fix my problem so I resorted to using an external package to help
  solve my issue.
  */
  removeItems(wordsArr, 0, count);
  // removes all '' that I've indicated in the counter, and the sort made it start from index 0

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length >= 6) {
      // determines if a word is 'long'
      metrics.longWords++;
    }
    // same code I wrote for the last lab, increments object values everything a word occurs
    if (metrics.wordOccurrences[wordsArr[i]] === undefined) {
      metrics.wordOccurrences[wordsArr[i]] = 1;
    } else {
      metrics.wordOccurrences[wordsArr[i]] += 1;
    }
  }
  metrics.totalWords = wordsArr.length; // length of words array gives the total # of words
  metrics.averageWordLength = metrics.totalLetters / metrics.totalWords; // avg formula
  metrics.uniqueWords = Object.keys(metrics.wordOccurrences).length; // # of keys in object gives the total # of unique words

  return metrics;
}

module.exports = { createMetrics };
