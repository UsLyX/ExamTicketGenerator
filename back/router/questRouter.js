const Router = require('express');
const controller = require('../controllers/questController');

const router = new Router();

//router.post('/question', controller.ticketAdd);

router.get('/question', controller.getStatus);


module.exports = router;