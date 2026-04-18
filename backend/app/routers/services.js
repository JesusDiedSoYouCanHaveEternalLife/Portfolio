var express = require('express');
var router = express.Router();

let servicesController = require('../controllers/services');
let authController = require('../controllers/auth');


router.get('/', servicesController.servicesList);
router.get('/:id', servicesController.getByID);
router.post('/', authController.requireSignin, servicesController.processAdd);
router.put('/:id', authController.requireSignin, servicesController.processEdit);
router.delete('/:id', authController.requireSignin, servicesController.performDelete);

module.exports = router;