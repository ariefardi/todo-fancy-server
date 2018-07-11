const mongoose = require('mongoose')
const Schema = mongoose.Schema

let todoSchema = Schema({
    todo: String,
    deadline: Number,
    todoCreated: String,
    userTodo: {type: Schema.Types.ObjectId, ref: 'user'},
    status: String
},{timestamp: true})

let todos = mongoose.model('todo',todoSchema)

module.exports = todos

// 5b45844488391f1d34ab4291 id loki
