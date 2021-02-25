const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const aboutObj = {
        name: 'Eleni Rotsides',
        cwid: '10424305',
        biography:
            'My name is Eleni and I love all things tech! A fun fact: I blindly picked my major (Software Engineering) ' +
            "because I love tech and thought it sounded cool. Well, its a good thing that I still think its cool! I've learned a lot and " +
            'cannot wait to continue to expand upon my skill-set!\n As for what I like to do outside of coding, I love all things music! ' +
            'I am currently teaching myself how to play the electric guitar (I would love to play along to my favorite rock and metal songs ' +
            'one day) and also play the ukulele and a bit piano. I also sing a bit, and won second place in Ducks on Display (the Stevens talent show) ' +
            'last year! I think music can teach us all a lot about discipline, and this is an especially important trait to possess in the ' +
            'field of software engineering. In my opinion, patience, disciple, and determination are key factors needed to succeed.',
        favoriteShows: ['Gossip Girl', 'Full House', 'Americas Got Talent', 'Masked Singer'],
        hobbies: ['Singing', 'Theatre', 'Talking a lot'],
    };
    try {
        res.json(aboutObj);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
