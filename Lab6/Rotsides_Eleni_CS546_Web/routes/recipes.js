const express = require('express');
const router = express.Router();
const recipeData = require('../data/recipes');

router.get('/', async (req, res) => {
    try {
        const recipeList = await recipeData.getAllRecipes();
        res.json(recipeList);
    } catch (e) {
        res.status(500).send();
    }
});

router.get('/:id', async (req, res) => {
    try {
        const recipe = await recipeData.getRecipe(req.params.id);
        res.json(recipe);
    } catch (e) {
        res.status(404).json({ message: 'Post not found' });
    }
});

router.post('/', async (req, res) => {
    let recipeInfo = req.body;

    if (!recipeInfo) {
        res.status(400).json({ error: 'You must provide data to create a recipe' });
        return;
    }

    if (!recipeInfo.title) {
        res.status(400).json({ error: 'You must provide a title for your recipe' });
        return;
    }

    if (!recipeInfo.ingredients) {
        res.status(400).json({ error: 'You must provide a title for your recipe' });
        return;
    }

    if (!recipeInfo.steps) {
        res.status(400).json({ error: 'You must provide steps for your recipe' });
        return;
    }
    if (recipeInfo.title) {
        if (typeof recipeInfo.title !== 'string') {
            res.status(400).json({ error: 'Title must be a string' });
        }
    }
    if (recipeInfo.ingredients) {
        if (!Array.isArray(recipeInfo.ingredients)) {
            res.status(400).json({ error: 'Ingredients must be an array of objects' });
        }
    }
    if (recipeInfo.steps) {
        if (!Array.isArray(recipeInfo.steps)) {
            res.status(400).json({ error: 'Steps must be an array' });
        }
    }

    try {
        const newRecipe = await recipeData.addRecipe(recipeInfo.title, recipeInfo.ingredients, recipeInfo.steps);
        res.json(newRecipe);
    } catch (e) {
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    let recipeInfo = req.body;

    if (!recipeInfo) {
        res.status(400).json({ error: 'You must provide data to create a recipe' });
        return;
    }

    if (!recipeInfo.title) {
        res.status(400).json({ error: 'You must provide a title for your recipe' });
        return;
    }

    if (!recipeInfo.ingredients) {
        res.status(400).json({ error: 'You must provide a title for your recipe' });
        return;
    }

    if (!recipeInfo.steps) {
        res.status(400).json({ error: 'You must provide steps for your recipe' });
        return;
    }

    if (recipeInfo.title) {
        if (typeof recipeInfo.title !== 'string') {
            res.status(400).json({ error: 'Title must be a string' });
        }
    }
    if (recipeInfo.ingredients) {
        if (!Array.isArray(recipeInfo.ingredients)) {
            res.status(400).json({ error: 'Ingredients must be an array of objects' });
        }
    }
    if (recipeInfo.steps) {
        if (!Array.isArray(recipeInfo.steps)) {
            res.status(400).json({ error: 'Steps must be an array' });
        }
    }

    try {
        await recipeData.getRecipe(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'Recipe not found' });
        return;
    }

    try {
        const updatedRecipe = await recipeData.updateRecipePut(
            req.params.id,
            recipeInfo.title,
            recipeInfo.ingredients,
            recipeInfo.steps
        );
        res.json(updatedRecipe);
    } catch (e) {
        res.sendStatus(500).json({ error: e });
    }
});

router.patch('/:id', async (req, res) => {
    const requestBody = req.body;

    let updatedRecObj = {};

    try {
        const oldRecipe = await recipeData.getRecipe(req.params.id);

        if (requestBody.title && requestBody.title !== oldRecipe.title) {
            updatedRecObj.title = requestBody.title;
        } else {
            updatedRecObj.title = requestBody.title;
        }
        if (requestBody.ingredients && requestBody.ingredients !== oldRecipe.ingredients) {
            updatedRecObj.ingredients = requestBody.ingredients;
        }
        if (requestBody.steps && requestBody.steps !== oldRecipe.steps) {
            updatedRecObj.steps = requestBody.steps;
        }
    } catch (e) {
        res.status(404).json({ error: 'Recipe not found' });
    }

    try {
        const updatedRecipe = await recipeData.updateRecipe(req.params.id, updatedRecObj);
        res.json(updatedRecipe);
    } catch (e) {
        res.status(500).json({ error: e });
    }
});

router.delete('/:id', async (req, res) => {
    if (!req.params.id) throw 'You need a valid id to delete a recipe';

    try {
        await recipeData.getRecipe(req.params.id);
    } catch (e) {
        res.status(404).json({ error: 'Recipe not found' });
        return;
    }

    try {
        await recipeData.removeRecipe(req.params.id);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
});

module.exports = router;
