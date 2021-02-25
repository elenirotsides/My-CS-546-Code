const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const educationArr = [
        {
            schoolName: 'Memorial Middle School',
            degree: 'Middle School Survival',
            favoriteClass: 'Math',
            favoriteMemory: 'Graduation',
        },
        {
            schoolName: 'Passaic Valley Regional High School',
            degree: 'High School Diploma',
            favoriteClass: 'Math',
            favoriteMemory: 'Theatre',
        },
        {
            schoolName: 'Stevens Institute of Technology',
            degree: 'B.E. in Software Engineering',
            favoriteClass: 'Anything coding related',
            favoriteMemory: 'All of it',
        },
    ];
    try {
        res.json(educationArr);
    } catch (e) {
        res.status(500).send();
    }
});
module.exports = router;
