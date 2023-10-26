const express = require('express');
const router = express.Router();

const accountController = require('../app/controllers/accountController');

// newsController.index

router.get('/signin', accountController.signin);
router.post('/login',accountController.login);
router.get('/signup', accountController.signup);
router.get('/my-home',accountController.showMyHomePage);
router.post('/store', accountController.store);
router.get('/stored', accountController.stored);

module.exports = router;
