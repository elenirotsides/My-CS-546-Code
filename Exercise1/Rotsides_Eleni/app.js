const dictionary = require('./dictionary');

try {
  console.log(dictionary.lookupDefinition('programming'));
} catch (e) {
  console.log(e);
}
try {
  console.log(dictionary.lookupDefinition('charisma'));
} catch (e) {
  console.log(e);
}
try {
  console.log(dictionary.lookupDefinition('adjudicate'));
} catch (e) {
  console.log(e);
}
try {
  console.log(dictionary.lookupDefinition('eleni'));
} catch (e) {
  console.log(e);
}
try {
  console.log(dictionary.lookupDefinition('test'));
} catch (e) {
  console.log(e);
}
try {
  console.log(
    dictionary.lookupDefinition(
      'To act as a detective : search for information'
    )
  );
} catch (e) {
  console.log(e);
}
try {
  console.log(
    dictionary.lookupDefinition(
      'A sudden or irregular invasion or attack for war or spoils : raid'
    )
  );
} catch (e) {
  console.log(e);
}
try {
  console.log(dictionary.lookupDefinition('Eleni Rotsides'));
} catch (e) {
  console.log(e);
}
