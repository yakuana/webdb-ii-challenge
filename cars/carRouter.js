const express = require('express');

const db = require('../data/db-config.js'); 
const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(fruits => {
            res.json(fruits);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to retrieve fruits', 
                error: err
            });
    });
});

module.exports = router;
