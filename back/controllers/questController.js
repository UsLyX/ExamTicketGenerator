const User = require('../models/User');
const Ticket = require('../models/Ticket');
const jwt_decode = require('jwt-decode');


class questController{

    /*async ticketAdd(req, res) {
        try {
            const jwt = req.body.jwt;
            const decode = jwt_decode(jwt);
            const user = await User.findOne({_id: decode.id});
            const {ticketName, informAboutChairman, faculty, speciality, informAboutExaminer, subjectName, cyclicСommission} = req.body.ticket;
            const ticket = new Ticket({ticketName, faculty, speciality, subjectName, informAboutExaminer, informAboutChairman, cyclicСommission});
            await ticket.save();
            user.tickets.push(ticket);
            console.log(user.tickets);
            user.save();
            res.status(200).json(ticket);
        } catch (error) {
            console.log(error)
        }
    }*/

    async getStatus(req, res) {
        res.json('Server work');
    } 

}

module.exports = new questController();