const Router = require('express');
const controller = require('../controllers/userController');
//const {check} = require('express-validator');

const router = new Router();

router.post('/info', controller.info);

router.patch('/info', controller.change);

router.get('/info', controller.getAll)


module.exports = router;