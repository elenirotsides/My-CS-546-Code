const bands = require('./data/bands');
const connection = require('./mongoConnection');

/* 
1. Create a band with the all the fields
2. Log the band, and then create a new band 
3. After the 2nd band is inserted, query all bands and log them
4. After all the bands are logged, remove the first band
5. Query all the remaining bands and log them
6. Update the remaining band
7. Log the band that has been updated with its new value(s).
*/

async function main() {
    let tool;
    try {
        console.log('Adding Tool');
        tool = await bands.addBand(
            'Tool',
            ['Maynard James Keenan', 'Danny Carey', 'Adam Jones', 'Justin Chancellor'],
            1990,
            ['Progressive Metal', 'Alternative Metal'],
            'Volcano'
        );
        console.log(tool);
    } catch (e) {
        console.log(e);
    }

    let megadeth;
    try {
        console.log();
        console.log('Adding Megadeth');
        megadeth = await bands.addBand(
            'Megadeth',
            ['Dave Mustaine', 'David Ellefson', 'Kiko Loureiro', 'Dirk Verbeuren'],
            1983,
            ['Heavy Metal', 'Thrash Metal', 'Speed Metal'],
            'Combat Records'
        );
    } catch (e) {
        console.log(e);
    }

    try {
        console.log();
        console.log('Printing all bands that are currently in database:');
        console.log(await bands.getAllBands());
    } catch (e) {
        console.log(e);
    }

    try {
        console.log();
        console.log('Removing Tool');
        console.log(await bands.removeBand(tool._id));
    } catch (e) {
        console.log(e);
    }

    try {
        console.log();
        console.log('Printing all remaining bands:');
        console.log(await bands.getAllBands());
    } catch (e) {
        console.log(e);
    }

    let updateMegadeth;
    try {
        console.log();
        console.log('Updating Megadeth');
        console.log('Printing Megadeth:');
        updateMegadeth = await bands.updateBand(
            megadeth._id,
            'Megadeth',
            ['Dave Mustaine is cool', 'David Ellefson is cool', 'Kiko Loureiro is cool', 'Dirk Verbeuren is cool'],
            1983,
            ['Heavy Metal', 'Thrash Metal', 'Speed Metal'],
            'Combat Records'
        );
        console.log(updateMegadeth);
    } catch (e) {
        console.log(e);
    }

    /* Test code with id values as strings:
    let updateMegadeth;
    try {
        console.log();
        console.log('Updating Megadeth take 2');
        console.log('Printing Megadeth take 2:');
        updateMegadeth = await bands.updateBand(
            '5eef9d3e1f98e9100708fc4f',
            'Megadeth',
            [
                'Dave Mustaine is cool2',
                'David Ellefson is cool2',
                'Kiko Loureiro is cool2',
                'Dirk Verbeuren is cool2',
            ],
            1983,
            ['Heavy Metal', 'Thrash Metal', 'Speed Metal'],
            'Combat Records'
        );
        console.log(updateMegadeth);
    } catch (e) {
        console.log(e);
    }
    try {
        console.log('Removing Megadeth');
        await bands.removeBand('5eef9d3e1f98e9100708fc4f');
        console.log(await bands.getAllBands());
    } catch (e) {
        console.log(e);
    }
    */

    const db = await connection();
    await db.serverConfig.close();
}

main();
