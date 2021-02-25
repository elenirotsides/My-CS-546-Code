const words = {
  programming: 'The action or process of writing computer programs.',
  charisma:
    'A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)',
  sleuth: 'To act as a detective : search for information',
  foray: 'A sudden or irregular invasion or attack for war or spoils : raid',
  adjudicate:
    'to make an official decision about who is right in (a dispute) : to settle judicially',
};

function checkInput(val) {
  if (typeof val !== 'string') throw 'Input is not a string';
  return val;
}

function lookupDefinition(lookUp) {
  checkInput(lookUp);

  if (words[lookUp] !== undefined) {
    return words[lookUp];
  } else {
    throw `${lookUp} is not in the dictionary`;
  }
}

function getWord(val) {
  checkInput(val);
  let getTheWord = Object.keys(words).find((key) => words[key] === value);
  if (getTheWord === undefined) throw 'Word not found';
  return getTheWord;
}

module.exports = { lookupDefinition, getWord };
