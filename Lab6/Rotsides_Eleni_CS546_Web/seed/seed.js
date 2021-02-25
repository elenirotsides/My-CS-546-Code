const dbConnection = require('../mongoConnection');
const recipes = require('../data/recipes');

async function main() {
    const db = await dbConnection();
    await db.dropDatabase();

    const ingredients = [
        { name: 'Hamburger Bun', amount: '1' },
        { name: 'Meat Patty', amount: '1' },
        { name: 'Cheese Slice', amount: '1' },
        { name: 'Tomato Slice', amount: '2' },
        { name: 'Onion Slice', amount: '2' },
        { name: 'Lettuce', amount: '2' },
        { name: 'Ketchup', amount: '1 tsp' },
        { name: 'Mustard', amount: '1 tsp' },
        { name: 'Mayo', amount: '1 tsp' },
    ];

    const steps = [
        'First, cook the meat patty.',
        'Then, toast the hamburger bun',
        'Once the meat patty is cooked and the bun is toasty, put the patty on the bun.',
        'Next, put the slice of cheese immediately on top, so it can get nice and melty.',
        'Now you can put the ketcup, mustard, and mayo on top.',
        'Lay the tomato, onion and lettuce on top.',
        'Lastly, put the top bun on top.',
        'Voila, we have a burger!',
    ];
    const burger = await recipes.addRecipe('Burger', ingredients, steps);

    console.log(await burger);
    console.log();
    console.log('Done seeding the database!');
    await db.serverConfig.close();
}

main();
