'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.statuts(200).send('Home Page');
});

app.get('/about', (req, res) => {
    res.statuts(200).send('About Page');
});

app.all('*', (req, res) => {
    res.statuts(404).send('<h1>resource not found</h1>');
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});
