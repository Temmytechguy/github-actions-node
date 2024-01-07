const express = require('express');
const app = express();

app.get('/', (_req, res) => {
    res.status(200).send('Yes the testNode endpoint worked');
});


module.exports = app;