const mongoCollections = require('../mongoCollections');
const recipes = mongoCollections.recipes;
const { ObjectId } = require('mongodb');

async function getRecipe(id) {
    if (!id) throw 'Please provide an id';
    //if (typeof id !== 'string') throw 'ID must be a string';
    if (arguments.length !== 1) throw 'Please provide the correct number of arguments';

    const recipeCollection = await recipes();

    if (typeof id === 'string') {
        const objId = ObjectId.createFromHexString(id);
        const recipe = await recipeCollection.findOne({ _id: objId });
        if (recipe === null) throw 'Sorry, no recipe exists with that ID';
        return recipe;
    } else {
        const recipe = await recipeCollection.findOne({ _id: id });
        if (recipe === null) throw 'Sorry, no recipe exists with that ID';
        return recipe;
    }
}

async function addRecipe(title, ingredients, steps) {
    // error handling
    if (!title) throw 'Please provide a title';
    if (typeof title != 'string') throw 'Title must be a string';
    if (!ingredients) throw 'Please provide an a array of objects of ingredients';
    if (!Array.isArray(ingredients)) throw 'Ingredients must be an array';
    if (!steps) throw 'Please provide an array of steps';
    if (!Array.isArray(steps)) throw 'Steps must be an array';
    if (arguments.length !== 3) throw 'Please provide all arguments';

    const recipeCollection = await recipes();

    let newRecipe = {
        title: title,
        ingredients: ingredients,
        steps: steps,
    };

    const insertInfo = await recipeCollection.insertOne(newRecipe);
    if (insertInfo.insertedCount === 0) throw 'Error adding recipe';

    const newID = insertInfo.insertedId;

    return await this.getRecipe(newID);
}

async function getAllRecipes() {
    const recipeCollection = await recipes();

    const recipeList = await recipeCollection.find({}).toArray();
    if (recipeList.length === 0) throw 'Collection is empty, no recipes to display.';

    return recipeList;
}

async function updateRecipe(recipeID, updatedRecipe) {
    if (!recipeID) throw 'Please provide a recipe ID';
    if (!updatedRecipe) throw 'Please provide information to update the recipe with';

    const recipeCollection = await recipes();

    const updatedRecipeObj = {};

    if (updatedRecipe.title) {
        if (typeof updatedRecipe.title !== 'string') {
            throw 'Title must be a string';
        }
        updatedRecipeObj.title = updatedRecipe.title;
    }
    if (updatedRecipe.ingredients) {
        if (!Array.isArray(updatedRecipe.ingredients)) {
            throw 'Ingredients must be an array';
        }
        updatedRecipeObj.ingredients = updatedRecipe.ingredients;
    }
    if (updatedRecipe.steps) {
        if (!Array.isArray(updatedRecipe.steps)) {
            throw 'Steps must be an array';
        }
        updatedRecipeObj.steps = updatedRecipe.steps;
    }

    if (typeof recipeID === 'string') {
        const objId = ObjectId.createFromHexString(recipeID);
        const updatedInfo = await recipeCollection.updateOne({ _id: objId }, { $set: updatedRecipeObj });
        if (updatedInfo.modifiedCount === 0) throw 'Could not update recipe';
        return updatedRecipeObj;
    } else {
        const updatedInfo = await recipeCollection.updateOne({ _id: recipeID }, { $set: updatedRecipeObj });
        if (updatedInfo.modifiedCount === 0) throw 'Could not update recipe';
        return updatedRecipeObj;
    }
}

async function updateRecipePut(recipeID, title, ingredients, steps) {
    if (!recipeID) throw 'Please provide a recipe ID';
    if (!title) throw 'Please provide a title';
    if (typeof title !== 'string') throw 'Title must be a string';
    if (!ingredients) throw 'Please provide an a array of objects of ingredients';
    if (!Array.isArray(ingredients)) throw 'Ingredients must be an array';
    if (!steps) throw 'Please provide an array of steps';
    if (!Array.isArray(steps)) throw 'Steps must be an array';
    if (arguments.length !== 4) throw 'Please provide all arguments';

    const recipeCollection = await recipes();

    let updateRecipe = {
        recipeID: recipeID,
        title: title,
        ingredients: ingredients,
        steps: steps,
    };

    if (typeof recipeID === 'string') {
        const objId = ObjectId.createFromHexString(recipeID);
        const updatedInfo = await recipeCollection.updateOne({ _id: objId }, { $set: updateRecipe });
        if (updatedInfo.modifiedCount === 0) throw 'Could not update recipe';
    } else {
        const updatedInfo = await recipeCollection.updateOne({ _id: recipeID }, { $set: updateRecipe });
        if (updatedInfo.modifiedCount === 0) throw 'Could not update recipe';
    }

    const recipeObj = {
        title: updateRecipe.title,
        ingredients: updateRecipe.ingredients,
        steps: updateRecipe.steps,
    };

    return recipeObj;
}

async function removeRecipe(id) {
    if (!id) throw 'Please provide an ID';
    if (arguments.length !== 1) throw 'Please provide the correct number of arguments';

    const recipeCollection = await recipes();

    if (typeof id === 'string') {
        const objId = ObjectId.createFromHexString(id);
        const deletionInfo = await recipeCollection.deleteOne({ _id: objId });
        if (deletionInfo.deletedCount === 0) throw 'Error deleting recipe';
    } else {
        const deletionInfo = await recipeCollection.deleteOne({ _id: id });
        if (deletionInfo.deletedCount === 0) throw 'Error deleting recipe';
    }

    return 'Recipe has been removed!';
}

module.exports = { getRecipe, addRecipe, getAllRecipes, updateRecipe, removeRecipe, updateRecipePut };
