const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator');
const { secret } = require('../config');

const generateAccessToken = (id, email, phone, faculty, tickets) => {
    const payload = {
        id,
        email, 
        phone, 
        faculty, 
        tickets
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

class authController{

    async registration(req, res) {
        const validationErrors = validationResult(req);
        if(!validationErrors.isEmpty()){
            const errMsg = JSON.stringify(validationErrors.errors[0].msg);
            return res.status(400).json({message: `Ошибка при регистрации: ${errMsg.replaceAll('"', '')}`});
        }
        const {username, email, password} = req.body;
        const candidate = await User.findOne({email});
        if(candidate){
            return res.status(400).json({ message: 'Пользователь с таким почтовым ящиком уже зарегистрирован'});
        }
        const hashPassword = bcrypt.hashSync(password, 7);
        const user = new User({username, email, password: hashPassword});
        await user.save();
        return res.status(200).json(user);
    }



    async login(req, res) {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: `Пользователь с почтовым ящиком ${email} не найден`})
        }
        const validPassword = bcrypt.compareSync(password, user.password);
        if(!validPassword){
            return res.status(400).json({message: 'Неверный пароль'})
        }
        const token = generateAccessToken(user._id);
        return res.json(token);
    }
    async getAll(req, res) {
        res.json('Server work');
    }

}

module.exports = new authController();