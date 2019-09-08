const { Schema, model } = require('mongoose')

const msgSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    text: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

module.exports = model('Msg', msgSchema)