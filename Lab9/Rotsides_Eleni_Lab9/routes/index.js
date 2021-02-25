const path = require('path');

const constructorMethod = (app) => {
    app.get('/', async (req, res) => {
        try {
            res.sendFile(path.resolve('static/index.html'));
        } catch (e) {
            res.json({ error: e });
        }
    });

    app.use('*', (req, res) => {
        res.redirect('http://localhost:3000');
    });
};
module.exports = constructorMethod;
