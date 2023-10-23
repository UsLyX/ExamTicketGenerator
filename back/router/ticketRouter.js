const Router = require('express');
const controller = require('../controllers/ticketController');

const router = new Router();

router.post('/ticket', controller.ticketAdd);

router.post('/ticket/generation', controller.ticketGeneration);

router.get('/ticket', controller.getStatus);

router.patch('/ticket', controller.changeTicket)


module.exports = router;