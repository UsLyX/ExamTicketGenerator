const { Schema, model} = require('mongoose');

const AllQuestions = new Schema({
    teoreticalQuestion: [{type: String}],
    practicalQuestion: [{type: String}],
})

module.exports = model('AllQuestions', AllQuestions);