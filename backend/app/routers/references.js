var express = require('express');
var router = express.Router();

let referencesController = require('../controllers/references');
let authController = require('../controllers/auth');


router.get('/', referencesController.referencesList);
router.get('/:id', referencesController.getByID);
router.post('/', authController.requireSignin, referencesController.processAdd);
router.put('/:id', authController.requireSignin, referencesController.processEdit);
router.delete('/:id', authController.requireSignin, referencesController.performDelete);

module.exports = router;