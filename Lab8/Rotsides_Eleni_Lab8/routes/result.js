const express = require('express');
const router = express.Router();

function isPalindrome(input) {
    if (!input) throw 'Please provide an input';
    if (!input.trim()) {
        return false;
    }
    const regexp = /[\W_]/g;
    const lowerCase = input.toLowerCase().replace(regexp, '');
    const reverse = lowerCase.split('').reverse().join('');
    return reverse === lowerCase;
}

router.post('/', async (req, res) => {
    input = req.body;

    try {
        if (!input['text-to-test']) {
            res.status(400).render('other/result', { noInput: true, title: 'Error!' });
        }
    } catch (e) {
        console.log(e);
    }
    try {
        res.render('other/result', {
            noInput: false,
            userInput: input['text-to-test'],
            title: 'The Palindrome Results!',
            check: isPalindrome(input['text-to-test']),
        });
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
