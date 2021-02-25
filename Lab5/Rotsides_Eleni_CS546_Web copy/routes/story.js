const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const storyObj = {
        storyTitle: "Eleni's Story",
        story: 'Sentence 1 blah blah.\nSecond paragraph begins here.\nAnother one, hopefully.',
    };
    try {
        res.json(storyObj);
    } catch (e) {
        res.status(500).send();
    }
});
module.exports = router;
