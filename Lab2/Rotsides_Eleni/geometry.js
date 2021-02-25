function check(num, param, funcName) {
  // error handling function
  if (num === undefined)
    throw `${funcName}: You need to provide a number, cannot be empty/undefined`;
  if (num === null)
    throw `${funcName}: You need to provide a number, cannot be null`;
  //if (typeof num === 'boolean')
  //throw `${funcName}: I do not understand booleans, please only enter numbers`;
  if (typeof num !== 'number') throw `${funcName}: ${param} is not a number`;
  if (num <= 0) throw `${funcName}: ${param} must be greater than 0`;
}

function volumeOfRectangularPrism(length, width, height) {
  if (arguments.length !== 3)
    throw 'volumeOfRectangularPrism: Incorrect number of arguments have been provided, please provide 3 numbers';
  check(length, 'Number 1', 'volumeOfRectangularPrism');
  check(width, 'Number 2', 'volumeOfRectangularPrism');
  check(height, 'Number 3', 'volumeOfRectangularPrism');

  return length * width * height;
}

function surfaceAreaOfRectangularPrism(length, width, height) {
  if (arguments.length !== 3)
    throw 'surfaceAreaOfRectangularPrism: Incorrect number of arguments have been provided, please provide 3 numbers';
  check(length, 'Number 1', 'surfaceAreaOfRectangularPrism');
  check(width, 'Number 2', 'surfaceAreaOfRectangularPrism');
  check(height, 'Number 3', 'surfaceAreaOfRectangularPrism');

  return 2 * length * width + 2 * length * height + 2 * width * height;
}

function volumeOfSphere(radius) {
  if (arguments.length !== 1)
    throw 'volumeOfSphere: Incorrect number of arguments have been provided, please provide 1 number';
  check(radius, 'Number', 'volumeOfSphere');

  return (4 / 3) * Math.PI * radius * radius * radius;
}

function surfaceAreaOfSphere(radius) {
  if (arguments.length !== 1)
    throw 'surfaceAreaOfSphere: Incorrect number of arguments have been provided, please provide 1 number';
  check(radius, 'Number', 'surfaceAreaOfSphere');

  return 4 * Math.PI * radius * radius;
}

module.exports = {
  volumeOfRectangularPrism,
  surfaceAreaOfRectangularPrism,
  volumeOfSphere,
  surfaceAreaOfSphere,
};
