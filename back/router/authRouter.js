const Router = require('express');
const controller = require('../controllers/authController');
const {check} = require('express-validator');

const router = new Router();

router.post('/registration', [
    check('username', 'Имя пользователя на может быть пустым').notEmpty(),
    check('email', 'Почтовый ящик на может быть пустым').notEmpty(),
    check('email', 'Используйте только буквы латинского алфавита').matches(/^[A-Za-z\s@.0-9]+$/),
    check('password', 'Пароль на может быть пустым').notEmpty()
], controller.registration)


router.post('/login', controller.login)

router.get('/registration', controller.getAll)

module.exports = router;