const mongoose = require('mongoose')
const Schema = mongoose.Schema

let todoSchema = Schema({
    todo: String,
    deadline: Number,
    todoCreated: String,
    userTodo: {type: Schema.Types.ObjectId, ref: 'user'}
},{timestamp: true})

let todos = mongoose.model('todo',todoSchema)

module.exports = todos