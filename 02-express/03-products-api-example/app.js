'use strict';

const express = require('express');
const { products } = require('.4./data');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send(
        '<h1>Home Page</h1><a href="/api/products">products</a>'
    );
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

app.get('/api/products/:id', (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const singleProduct = products.find((product) => product.id == Number(id));
    if (!singleProduct) {
        res.status(404).send('Product does not exist');
    }
    res.json(singleProduct);
});

app.get('/api/products/:prductID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.status(200).send('hello world');
});

app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, limit);
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({ success: true, data: [] });
    }
    res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log('server listening on port 5000');
});
