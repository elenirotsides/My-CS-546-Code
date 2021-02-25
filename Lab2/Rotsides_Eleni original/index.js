const geometry = require('./geometry');
const utilities = require('./utilities');

// --------------------------geometry.js Tests--------------------------
try {
  console.log(geometry.surfaceAreaOfRectangularPrism(2, 2, 2));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfRectangularPrism(null, null, null));
} catch (e) {
  console.log(e);
}
try {
  console.log(
    geometry.surfaceAreaOfRectangularPrism(undefined, undefined, undefined)
  );
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfRectangularPrism({ a: 2, b: 4, c: 6 }));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfRectangularPrism(0, 4, 6));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfRectangularPrism(2, 4, -10));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfRectangularPrism(2, 'string', 8));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfRectangularPrism(2, 4));
} catch (e) {
  console.log(e);
}
//------
try {
  console.log(geometry.volumeOfRectangularPrism(2, 2, 2));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfRectangularPrism(null, null, null));
} catch (e) {
  console.log(e);
}
try {
  console.log(
    geometry.volumeOfRectangularPrism(undefined, undefined, undefined)
  );
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfRectangularPrism(7, { a: 2, b: 4, c: 6 }, 3));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfRectangularPrism('string', 'string 2', 10));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfRectangularPrism());
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfRectangularPrism(4, -3, 1));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfRectangularPrism(5));
} catch (e) {
  console.log(e);
}
//------
try {
  console.log(geometry.surfaceAreaOfSphere(2));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfSphere(null));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfSphere(undefined));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfSphere(2, 4));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfSphere(-6));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfSphere('8'));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfSphere({ 4: 'test', a: 'test 2' }));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.surfaceAreaOfSphere(0));
} catch (e) {
  console.log(e);
}
//------
try {
  console.log(geometry.volumeOfSphere(2));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfSphere(null));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfSphere(undefined));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfSphere(-20));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfSphere());
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfSphere(false));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfSphere(5, 5));
} catch (e) {
  console.log(e);
}
try {
  console.log(geometry.volumeOfSphere('string'));
} catch (e) {
  console.log(e);
}
// --------------------------utilities.js Tests--------------------------

let test = [
  ['a', 'b'],
  ['a', 'b'],
];
let test2 = ['a', 'a', 'b', 'c', 'd', 'd'];
let test3 = [1, 1, 2, 3, 4, 5, 6, 6, 6, 6, 'string'];
let test4 = { a: 'test' };
let test5 = 'test';
let test6 = null;
let test7 = undefined;

try {
  console.log(utilities.uniqueElements(test));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.uniqueElements(test2));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.uniqueElements(test3));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.uniqueElements(test4));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.uniqueElements(test5));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.uniqueElements(test6));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.uniqueElements(test7));
} catch (e) {
  console.log(e);
}

const first = { a: 1, b: 2, c: 3 };
const second = { a: 1, b: 2, c: 4 };
const third = { a: 1, b: 2, c: 3 };
const fourth = { a: 1, b: 2 };
const fifth = { a: 'string', b: 2 };
const sixth = [1, 2, 3];
const seventh = 3;
const eigth = 3;
const ninth = [1, 2, 3];
const tenth = undefined;
const eleventh = undefined;
const twelveth = null;
const thirteenth = null;

try {
  console.log(utilities.deepEquality(first, third));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.deepEquality(fourth, fifth));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.deepEquality(second, third));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.deepEquality(first, fourth));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.deepEquality(first, second));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.deepEquality(sixth, ninth));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.deepEquality(seventh, eigth));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.deepEquality(tenth, eleventh));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.deepEquality(twelveth, thirteenth));
} catch (e) {
  console.log(e);
}

const count = 'Hi, my name is Eleni!';
let count2;
const count3 = 25;
const count4 = undefined;
const count5 = '';
const count6 = null;

try {
  console.log(utilities.countOfEachCharacterInString(count));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.countOfEachCharacterInString(count2));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.countOfEachCharacterInString(count3));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.countOfEachCharacterInString(count4));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.countOfEachCharacterInString(count5));
} catch (e) {
  console.log(e);
}
try {
  console.log(utilities.countOfEachCharacterInString(count6));
} catch (e) {
  console.log(e);
}
