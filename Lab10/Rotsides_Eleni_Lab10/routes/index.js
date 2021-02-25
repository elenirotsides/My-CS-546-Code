const bcrypt = require('bcryptjs');

let users = [
    {
        _id: 1,
        username: 'masterdetective123',
        hashedPassword: '$2a$16$7JKSiEmoP3GNDSalogqgPu0sUbwder7CAN/5wnvCWe6xCKAKwlTD.',
        firstName: 'Sherlock',
        lastName: 'Holmes',
        profession: 'Detective',
        bio:
            'Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur ' +
            'Conan Doyle. Known as a "consulting detective" in the stories, Holmes is known for a proficiency with ' +
            'observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when ' +
            'investigating cases for a wide variety of clients, including Scotland Yard.',
    },
    {
        _id: 2,
        username: 'lemon',
        hashedPassword: '$2a$16$SsR2TGPD24nfBpyRlBzINeGU61AH0Yo/CbgfOlU1ajpjnPuiQaiDm',
        firstName: 'Elizabeth',
        lastName: 'Lemon',
        profession: 'Writer',
        bio:
            'Elizabeth Miervaldis "Liz" Lemon is the main character of the American television series 30 Rock. She ' +
            'created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan.',
    },
    {
        _id: 3,
        username: 'theboywholived',
        hashedPassword: '$2a$16$4o0WWtrq.ZefEmEbijNCGukCezqWTqz1VWlPm/xnaLM8d3WlS5pnK',
        firstName: 'Harry',
        lastName: 'Potter',
        profession: 'Student',
        bio:
            'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle ' +
            'the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are ' +
            "students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against " +
            'Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the ' +
            'Ministry of Magic, and subjugate all wizards and Muggles.',
    },
];

const constructorMethod = (app) => {
    app.get('/', async (req, res) => {
        if (req.session.user) {
            res.redirect('/private');
        } else {
            res.render('other/login');
        }
    });

    app.post('/login', async (req, res) => {
        input = req.body;

        for (let i = 0; i < users.length; i++) {
            if (input['username'] === users[i].username) {
                let hashedpassword = users[i].hashedPassword;
                let compare = false;

                try {
                    compare = await bcrypt.compare(input['password'], hashedpassword);
                } catch (e) {
                    res.json({ error: 'whoopsie' });
                }

                if (compare === true) {
                    req.session.user = users[i]._id;
                    req.session.username = users[i].username;
                    req.session.firstName = users[i].firstName;
                    req.session.lastName = users[i].lastName;
                    req.session.profession = users[i].profession;
                    req.session.bio = users[i].bio;

                    return res.redirect('/private');
                } else {
                    return res.status(401).render('other/login', { error2: true });
                }
            }
        }
        res.status(401).render('other/login', { error2: true });
    });

    app.get('/private', async (req, res) => {
        res.render('other/private', {
            username: req.session.username,
            firstName: req.session.firstName,
            lastName: req.session.lastName,
            profession: req.session.profession,
            bio: req.session.bio,
        });
    });

    app.get('/logout', async (req, res) => {
        if (req.session.user) {
            req.session.destroy();
            res.render('other/logout');
        } else {
            res.redirect('/private');
        }
    });

    app.use('*', (req, res) => {
        res.redirect('http://localhost:3000/');
    });
};

module.exports = constructorMethod;
