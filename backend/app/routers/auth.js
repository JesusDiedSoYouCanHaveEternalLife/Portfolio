var express = require('express');
var router = express.Router();

let authController = require('../controllers/auth');

router.post('/signin', authController.signin);
router.post('/register', authController.register);

module.exports = router;