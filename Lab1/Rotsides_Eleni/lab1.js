const questionOne = function questionOne(arr) {
  // Implement question 1 here
  let squaresArr = []; // empty array where the squared elements of arr are stored

  for (let i = 0; i < arr.length; i++) {
    squaresArr.push(arr[i] * arr[i]);
    // pushes the squared elements into squaresArr on every iteration
  }

  let sum = 0; // initialized empty sum variable, this will end up housing the final answer

  for (let i = 0; i < squaresArr.length; i++) {
    sum += squaresArr[i];
    // takes the current sum and adds the element to itself
  }
  return sum;
};

const questionTwo = function questionTwo(num) {
  // Implement question 2 here
  if (num === 1) {
    // base case
    return 1;
  } else if (num < 1) {
    // other possible base case, accounting for values < 0
    return 0;
  } else {
    return num - 1 + questionTwo(num - 2); // recursively calculates fibonacci according to the formula
  }
};

const questionThree = function questionThree(text) {
  // Implement question 3 here
  let numOfVowels = 0; // empty counter variable

  for (let i = 0; i < text.length; i++) {
    // increments counter variable every time a vowel is detected in the string

    if (text.charAt(i) === 'a') {
      numOfVowels++;
    }
    if (text.charAt(i) === 'e') {
      numOfVowels++;
    }
    if (text.charAt(i) === 'i') {
      numOfVowels++;
    }
    if (text.charAt(i) === 'o') {
      numOfVowels++;
    }
    if (text.charAt(i) === 'u') {
      numOfVowels++;
    }
    if (text.charAt(i) === 'A') {
      numOfVowels++;
    }
    if (text.charAt(i) === 'E') {
      numOfVowels++;
    }
    if (text.charAt(i) === 'I') {
      numOfVowels++;
    }
    if (text.charAt(i) === 'O') {
      numOfVowels++;
    }
    if (text.charAt(i) === 'U') {
      numOfVowels++;
    }
  }
  return numOfVowels;
};

const questionFour = function questionFour(num) {
  // Implement question 4 here
  if (num === 1) {
    // base case
    return 1;
  } else if (num < 1) {
    // other possible base case, accounting for values < 0
    return NaN;
  } else {
    return num * questionFour(num - 1); // recursively calculates factorial of # inputted, according to the formula
  }
};

module.exports = {
  //Pledge: I pledge my honor that I have abided by the Stevens Honor System.
  firstName: 'Eleni',
  lastName: 'Rotsides',
  studentId: '10424305',
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
};
