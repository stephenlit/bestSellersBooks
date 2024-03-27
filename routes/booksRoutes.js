const express = require('express');
const router = express.Router();

const {
    getInputChoices,
    bestSellerList,
} = require('../controllers/dataController');

router.route('/').get(getInputChoices);
router.route('/:id').post(bestSellerList);

module.exports = router;
