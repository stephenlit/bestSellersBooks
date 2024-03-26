const express = require('express');
const router = express.Router();

const {
    getInputChoices,
} = require('../controllers/dataController');

router
    .route('/')
    .get(getInputChoices);

module.exports = router;