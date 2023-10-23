const { Schema, model} = require('mongoose');

const User = new Schema({
    username: {type: String},
    email: {type: String},
    password: {type: String},
    phone: {type: String}, 
    faculty: {type: String},
    tickets: [{type: Object, ref: 'Ticket'}],
    questions: {},
})

module.exports = model('User', User);