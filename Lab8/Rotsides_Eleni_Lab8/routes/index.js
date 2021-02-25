const resultRoute = require('./result');

const constructorMethod = (app) => {
    app.use('/result', resultRoute);
    app.get('/', (req, res) => {
        res.render('other/submit', { title: 'The Best Palindrome Checker in the World!' });
    });

    app.use('*', (req, res) => {
        res.redirect('http://localhost:3000');
    });
};

module.exports = constructorMethod;
