const express = require('express');
const router = express.Router();
const Loan = require('../models/Loan');

// Créer un nouvel emprunt
router.post('/', async (req, res) => {
    try {
        const loan = await Loan.create(req.body);
        res.status(201).json(loan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Récupérer tous les emprunts
router.get('/', async (req, res) => {
    try {
        const loans = await Loan.findAll();
        res.json(loans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
