const animals = require('./data/animals');
const connection = require('./mongoConnection');

async function main() {
    let sasha;
    try {
        console.log('Now creating Sasha');
        sasha = await animals.create('Sasha', 'Dog');
        console.log('Now printing Sasha:');
        console.log(sasha);
    } catch (e) {
        console.log(e);
    }

    let lucy;
    try {
        console.log();
        console.log('Now creating Lucy');
        lucy = await animals.create('Lucy', 'Dog');
        console.log('Now printing Lucy:');
        console.log(lucy);
    } catch (e) {
        console.log(e);
    }

    try {
        console.log();
        console.log('Now printing all animals in database:');
        console.log(await animals.getAll());
    } catch (e) {
        console.log(e);
    }

    let duke;
    try {
        console.log();
        console.log('Now creating Duke');
        duke = await animals.create('Duke', 'Walrus');
        console.log('Now printing Duke:');
        console.log(duke);
    } catch (e) {
        console.log(e);
    }

    let renameSasha;
    try {
        console.log();
        console.log('Now renaming Sasha to Sashita');
        renameSasha = await animals.rename(sasha._id, 'Sashita');
        console.log('Now printing Sashita:');
        console.log(renameSasha);
    } catch (e) {
        console.log(e);
    }

    try {
        console.log();
        console.log('Now removing Lucy');
        await animals.remove(lucy._id);
        console.log(lucy);
    } catch (e) {
        console.log(e);
    }

    try {
        console.log();
        console.log('Now printing all animals in database:');
        console.log(await animals.getAll());
    } catch (e) {
        console.log(e);
    }

    const db = await connection();
    await db.serverConfig.close();
}

main();
