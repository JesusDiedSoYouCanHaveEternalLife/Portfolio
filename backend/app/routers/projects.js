var express = require('express');
var router = express.Router();

let projectsController = require('../controllers/projects');
let authController = require('../controllers/auth');


router.get('/', projectsController.projectsList);
router.get('/:id', projectsController.getByID);
router.post('/', authController.requireSignin, projectsController.processAdd);
router.put('/:id', authController.requireSignin, projectsController.processEdit);
router.delete('/:id', authController.requireSignin, projectsController.performDelete);

module.exports = router;