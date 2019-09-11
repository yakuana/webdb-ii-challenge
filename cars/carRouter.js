const express = require('express');

const db = require('../data/db-config.js'); 
const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.json(cars);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to retrieve fruits', 
                error: err
            });
    });
});

router.post('/', (req, res) => {
    
    const newCar = req.body; 

    db('cars')
        .insert(newCar, 'id')
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to post new Car', 
                error: err
            });
    });
});

module.exports = router;
