function deepEquality(obj1, obj2) {
  //error handling here
  if (obj1 === undefined || obj2 === undefined)
    throw 'deepEquality: I cannot accept undefined values';
  if (obj1 === null || obj2 === null)
    throw 'deepEquality: I cannot accept null values';
  if (Array.isArray(obj1) || Array.isArray(obj2))
    throw 'deepEquality: I cannot accept arrays';
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object')
    throw 'deepEquality: Your input must be an object';

  // stores length of objs in variables
  let obj1Len = Object.keys(obj1).length;
  let obj2Len = Object.keys(obj2).length;

  if (obj1Len !== obj2Len) {
    //checks that the objects are the same length, otherwise we know they're definitely not equal
    return false;
  }

  const obj1Arr = Object.getOwnPropertyNames(obj1); // returns an array of the properties of obj1

  for (let i = 0; i < obj1Arr.length; i++) {
    // iterates over the length of obj1

    if (obj1[obj1Arr[i]] !== obj2[obj1Arr[i]]) {
      // not sure how to explain what I'm doing here in a coherent sentence LOL it makes sense in my head though!
      return false;
    }
  }
  return true;
}

function uniqueElements(arr) {
  // error handling here
  if (arr === undefined)
    throw 'uniqueElements: Cannot be empty/undefined, please provide an array';
  if (arr === null) throw 'uniqueElements: Cannot be null';
  if (Array.isArray(arr) === false)
    throw 'uniqueElements: Input is not an array (invalid type), please provide an array';

  const arrObj = {};

  /* using same code I wrote for countOfEachCharacterInString function to push unique elements
  into object */
  for (let i = 0; i < arr.length; i++) {
    if (arrObj[arr[i]] === undefined) {
      // if character is not an key in the object, add it and = to 1
      arrObj[arr[i]] = 1;
    } else {
      // otherwise, increment its value
      arrObj[arr[i]] += 1;
    }
  }

  let objLength = Object.keys(arrObj).length; // length of object stored in objLength variable
  return objLength;
}

function countOfEachCharacterInString(str) {
  // error handling here
  if (str === undefined)
    throw 'countOfEachCharacterInString: Cannot be empty or undefined, please provide a string';
  if (str === null)
    throw 'countOfEachCharacterInString: Cannot be null, please provide a string';
  if (typeof str !== 'string')
    throw 'countOfEachCharacterInString: Input must be a string, yours is invalid';
  if (str === '')
    throw 'countOfEachCharacterInString: Input cannot be an empty string';

  const charMap = {}; // creates empty object

  for (let i = 0; i < str.length; i++) {
    // iterates over the length of the string

    if (charMap[str[i]] === undefined) {
      // if character is not an key in the object, add it and = to 1
      charMap[str[i]] = 1;
    } else {
      // otherwise, increment its value
      charMap[str[i]] += 1;
    }
  }

  return charMap; // return object
}

module.exports = { deepEquality, uniqueElements, countOfEachCharacterInString };
