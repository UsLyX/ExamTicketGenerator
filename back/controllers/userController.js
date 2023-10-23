const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt_decode = require('jwt-decode');


class userController{

    async info(req, res) {
        try {
            const jwt = req.body;
            const decode = jwt_decode(jwt.jwt);
            const user = await User.findOne({_id: decode.id});
            return res.status(200).json(user);
        } catch (error) {
            console.log(error)
        }
    }

    async change(req, res){
        try {
            const { jwt, name, email, speciality, password, tel, faculty } = req.body;
            const hashPassword = bcrypt.hashSync(password, 7);
            const decode = jwt_decode(jwt);
            const user = await User.findOne({_id: decode.id});
            if(req.body.name !== ''){
                user.username = name;
            }
            if(req.body.email !== ''){
                user.email = email;
            }
            if(req.body.password !== ''){
                user.password = hashPassword
            }
            if(req.body.tel !== ''){
                user.phone = tel;
            }
            if(req.body.faculty !== ''){
                user.faculty = faculty;
            }
            if(req.body.speciality !== ''){
                user.speciality = speciality;
            }
            user.save();
            return res.status(200).json(user)
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(req, res) {
        res.json('Server work');
    }

}

module.exports = new userController();