const User = require('../models/User');
const Ticket = require('../models/Ticket');
const jwt_decode = require('jwt-decode');
const mongoose = require('mongoose');


class ticketController{

    async ticketAdd(req, res) {
        try {
            const jwt = req.body.jwt;
            const decode = jwt_decode(jwt);
            const user = await User.findOne({_id: decode.id});
            const allQuestions = req.body.allQuestions;
            const {ticketName, informAboutChairman, faculty, speciality, informAboutExaminer, subjectName, cyclicСommission} = req.body.ticket;
            const ticketCandidat = await Ticket.findOne({subjectName});
            if(ticketCandidat){
                return res.status(400).json({ message: 'Шаблон билета с таким предметом уже существует'});
            }
            const ticket = new Ticket({ticketName, faculty, speciality, subjectName, allQuestions, informAboutExaminer, informAboutChairman, cyclicСommission});
            user.tickets.push(ticket);
            await user.save();
            res.status(200).json(ticket);
        } catch (error) {
            console.log(error)
        }
    }

    async getStatus(req, res) {
        res.json('Server work');
    } 

    
    async changeTicket(req, res) {
        try {
            const allQuestions = req.body.questions;
            const {ticketName, informAboutChairman, faculty, speciality, informAboutExaminer, subjectName, cyclicСommission} = req.body.ticket;
            const jwt = req.body.jwt;
            const decode = jwt_decode(jwt);
            const user = await User.findOne({_id: decode.id});
            if(ticketName !== undefined){
                user.tickets[req.body.index - 1].ticketName = ticketName;
            }
            if(informAboutChairman !== undefined){
                user.tickets[req.body.index - 1].informAboutChairman = informAboutChairman;
            }
            if(faculty !== undefined){
                user.tickets[req.body.index - 1].faculty = faculty;
            }
            if(speciality !== undefined){
                user.tickets[req.body.index - 1].speciality = speciality;
            }
            if(informAboutExaminer !== undefined){
                user.tickets[req.body.index - 1].informAboutExaminer = informAboutExaminer;
            }
            if(subjectName !== undefined){
                user.tickets[req.body.index - 1].subjectName = subjectName;
            }
            if(cyclicСommission !== undefined){
                user.tickets[req.body.index - 1].cyclicСommission = cyclicСommission;
            }
            if(allQuestions !== undefined){
                user.tickets[req.body.index - 1].allQuestions = allQuestions;
            }


            const result = user.tickets.map((item, index) => index === req.body.index - 1 ? item = user.tickets[req.body.index - 1] : item);

            await user.updateOne({tickets: user.tickets}, {$set: {tickets: result}})

            res.status(200).json(user);
        } catch (error) {
            console.log(error);
        }
    }

    async ticketGeneration(req, res) {
        try {
            const jwt = req.body;
            const decode = jwt_decode(jwt.jwt);
            const user = await User.findOne({_id: decode.id});
            const index = req.body.index;
            for(let i = 0; i < 2; i++){
                const random = Math.floor(Math.random() * user.tickets[index].allQuestions.teoreticalQuestions.length);
                await user.tickets[index].questions.push(user.tickets[index].allQuestions.teoreticalQuestions[random]);
            }
            for(let i = 0; i < 2; i++){
                const random = Math.floor(Math.random() * user.tickets[index].allQuestions.practicalQuestions.length);
                await user.tickets[index].questions.push(user.tickets[index].allQuestions.practicalQuestions[random]);
            }
            return res.json(user.tickets[index]);
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new ticketController();