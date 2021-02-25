const bluebird = require('bluebird');
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require('fs'));

async function getFileAsString(path) {
  // error handling
  if (!path) throw 'You must provide a path';
  if (path === undefined) throw 'Path cannot be undefined';
  if (path === null) throw 'Path cannot be null';
  if (typeof path !== 'string') throw 'Path must be a string';

  const stringFile = await fs.readFileAsync(path, 'utf-8'); // stringifies file

  return stringFile;
}

async function getFileAsJSON(path) {
  // error handling
  if (!path) throw 'You must provide a path';
  if (path === undefined) throw 'Path cannot be undefined';
  if (path === null) throw 'Path cannot be null';
  if (typeof path !== 'string') 'Path must be a string to convert it to JSON file';

  const readJSON = await fs.readFileAsync(path, 'utf-8'); // reads file
  const jsonFile = JSON.parse(readJSON); // parses file

  return jsonFile;
}

async function saveStringToFile(path, text) {
  // error handling
  if (!path || !text) throw 'Please provide input';
  if (path === undefined) throw 'Path cannot be undefined';
  if (text === undefined) throw 'Text cannot be undefined';
  if (path === null) throw 'Path cannot be null';
  if (text === null) throw 'Text cannot be null';
  if (typeof path !== 'string') throw 'Path must be a string';
  if (typeof text !== 'string') throw 'Text must be a string';

  await fs.writeFileAsync(path, text); // writes data to file

  return true;
}

async function saveJSONToFile(path, obj) {
  // error handling
  if (!path || !obj) throw 'Please provide input';
  if (path === undefined) throw 'Path cannot be undefined';
  if (path === null) throw 'Path cannot be null';
  if (typeof path !== 'string') throw 'Path must be a string';

  let stringify = JSON.stringify(obj); // stringifies file
  await fs.writeFileAsync(path, stringify); // writes data to file

  return true;
}

module.exports = {
  getFileAsString,
  getFileAsJSON,
  saveStringToFile,
  saveJSONToFile,
};
