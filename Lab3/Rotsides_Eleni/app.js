const fileData = require('./fileData');
const textMetrics = require('./textMetrics');
const bluebird = require('bluebird');
const fs = bluebird.promisifyAll(require('fs'));

async function app(chapterNum) {
  // error handling
  if (!chapterNum) throw 'Please provide a chapter';
  if (chapterNum === undefined) throw 'Cannot be undefined';
  if (chapterNum === null) throw 'Cannot be null';
  if (typeof chapterNum !== 'number') throw 'Input must be a number';

  if (fs.existsSync(`./chapter${chapterNum}.result.json`)) {
    // checks if json file already exits, if it does, code below is executed

    console.log(await fileData.getFileAsJSON(`./chapter${chapterNum}.result.json`));
    //prints contents of json file
  } else {
    // if a json doesn't exist/hasn't been generated
    let getAsString = await fileData.getFileAsString(`./chapter${chapterNum}.txt`); // stringifies file
    await fileData.saveStringToFile(`./chapter${chapterNum}.txt`, getAsString); // saves string to the file
    await fileData.saveJSONToFile(`./chapter${chapterNum}.result.json`, textMetrics.createMetrics(getAsString));
    // saves json; takes the metrics found on the string and saves it as a json file
    console.log(textMetrics.createMetrics(getAsString)); //prints metrics found on the string
  }
}
//regardless of whether or not file exists as a .txt or a json, metrics will be provided and json will be saved
try {
  app(1);
  app(2);
  app(3);
} catch (e) {
  console.log(e);
}
/*
try {
  console.log(
    textMetrics.createMetrics(
      'Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23'
    )
  );
} catch (e) {
  console.log(e);
}*/
