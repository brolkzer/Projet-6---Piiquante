const express = require('express');
const router = express.Router();
const Sauce = require('../models/Sauce');
const sauceController = require('../controllers/sauce');
const auth = require('../middleware/auth');

router.post('/', auth, sauceController.createSauce);

router.put('/:id', auth, sauceController.modifySauce);

router.delete('/:id', auth, sauceController.deleteSauce);

router.get('/', auth, sauceController.getAllSauces);

router.get('/:id', auth, sauceController.getOneSauce);

module.exports = router;
