const express = require('express');
const app = express();
const configRoutes = require('./routes');

app.use(express.json());

configRoutes(app);

app.listen(3000, () => {
    console.log('Now connected to the server!');
    console.log('Routes will be running on http://localhost:3000');
});
