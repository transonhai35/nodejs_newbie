const express = require('express');
const router = express.Router();

const cardController = require('../app/controllers/cardController');

// newsController.index
router.delete('/:id', cardController.destroyCard);
router.get('/:id', cardController.showCard);
router.post('/:id', cardController.createCards);

module.exports = router;
