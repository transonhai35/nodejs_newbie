const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/meController');

// newsController.index

router.get('/stored/cards', meController.storedCards);
router.get('/my-home', meController.myHome);
router.get('/myCards/:id', meController.showMyCard);
router.post('/myCards/:id', meController.updateMyCard);


module.exports = router;
