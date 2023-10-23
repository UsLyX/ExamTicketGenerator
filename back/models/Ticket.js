const { Schema, model} = require('mongoose');

const Ticket = new Schema({
    ticketName: {type: String},
    faculty: {type: String},
    speciality: {type: String},
    subjectName: {type: String},
    questions: [{type: String}], 
    allQuestions: {type: Object, ref: 'AllQuestions'},
    informAboutExaminer: {type: String},
    informAboutChairman: {type: String},
    cyclicСommission: {type: String}
})

module.exports = model('Ticket', Ticket);