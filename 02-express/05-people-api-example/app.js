'use strict';

const express = require('express');
let { people } = require('../data');

const app = express();

app.use(express.static('./methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));

// parse json data
app.use(express(express.json()));

app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please provide credentials');
});

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(401).json({
            success: false,
            msg: 'please provide a name value',
        });
    }
    res.status(201).json({ success: true, data: [...people, name] });
});

app.put('/api/people/:id', (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        res.status(404).json({
            success: false,
            msg: `no person with id ${id}`,
        });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    });
    return res.status(200).json({ success: true, data: newPeople });
});

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        res.status(404).json({
            success: false,
            msg: `no person with id ${req.params.id}`,
        });
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    );
    return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
    console.log('server is listening on port 5000');
});
