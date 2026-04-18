var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');
let authController = require('../controllers/auth');


router.get('/', usersController.usersList);
router.get('/:id', usersController.getByID);
router.post('/', usersController.processAdd);
router.put('/:id', authController.requireSignin, usersController.processEdit);
router.delete('/:id', authController.requireSignin, usersController.performDelete);

module.exports = router;