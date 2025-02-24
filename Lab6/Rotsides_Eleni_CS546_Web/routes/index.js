const recipesRoute = require('./recipes');

const constructorMethod = (app) => {
    app.use('/recipes', recipesRoute);

    app.use('*', (req, res) => {
        res.status(404).json({ error: 'Not found' });
    });
};

module.exports = constructorMethod;
