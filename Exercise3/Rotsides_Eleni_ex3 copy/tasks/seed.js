const dbConnection = require('../config/mongoConnection');
const bands = require('../data/bands');

async function main() {
    const db = await dbConnection();
    await db.dropDatabase();

    let megadeth = await bands.addBand(
        'Megadeth',
        ['Dave Mustaine', 'David Ellefson', 'Kiko Loureiro', 'Dirk Verbeuren'],
        1983,
        ['Heavy Metal', 'Thrash Metal', 'Speed Metal'],
        'Combat Records'
    );
    let tool = await bands.addBand(
        'Tool',
        ['Maynard James Keenan', 'Danny Carey', 'Adam Jones', 'Justin Chancellor'],
        1990,
        ['Progressive Metal', 'Alternative Metal'],
        'Volcano'
    );
    let blackSabbath = await bands.addBand(
        'Black Sabbath',
        ['Ozzy Osbourne', ' Tony Iommi', 'Geezer Butler', 'Bill Ward'],
        1968,
        ['Heavy Metal', 'Psychedelic Rock'],
        'Warner Bros'
    );
    let trivium = await bands.addBand(
        'Trivium',
        ['Matt Heafy', 'Corey Beaulieu', 'Paolo Gregoletto', 'Alex Bent'],
        1999,
        ['Heavy Metal', 'Thrash Metal', 'Metalcore', 'Progressive Metal'],
        'Roadrunner Records'
    );
    let metallica = await bands.addBand(
        'Metallica',
        ['James Hetfield', 'Lars Ulrich', 'Kirk Hammett', 'Robert Trujillo'],
        1981,
        ['Heavy Metal', 'Thrash Metal'],
        'Megaforce'
    );

    console.log(await megadeth);
    console.log(await tool);
    console.log(await blackSabbath);
    console.log(await trivium);
    console.log(await metallica);
    console.log();
    console.log('Done seeding the database!');
    await db.serverConfig.close();
}

main();
