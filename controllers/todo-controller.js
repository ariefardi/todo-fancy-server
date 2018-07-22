const Model = require('../models/todo-model')
// require('../models/user-model')
const moment = require('moment')

class Controller {
    static getTodos (req,res) {
        Model.find({userTodo: '5b45844488391f1d34ab4291'})
        .populate('userTodo')
        .exec((err, todos)=> {
            res.json({
                message: 'getUser',
                todos
            })
        })
        console.log('masuk ke getUsers')
    }

    static postTodo (req,res) {
        let obj = {
            todo: req.body.todo,
            deadline: moment().add(req.body.deadline, 'days').calendar(),
            todoCreated: moment().format('LL'),
            userTodo: req.body.userTodo,
            status: req.body.status,
            done: false,
            description: req.body.description
        }
        console.log(obj)
        let todo = new Model(obj)
        todo.save()
        .then(todo=> {
            res.json({
                message: 'Berhasil Post Todo',
                todo
            })
        })
        .catch(err=> {
            res.json({
                message: err.message
            })
        })
    }
    static DeleteTodo (req,res) {
        Model.findByIdAndRemove({_id: req.params.id})
        .then(()=> {
            res.json({
                message: 'Waduh kedelete Patrick'
            })
        })
        .catch(err=> {
            res.json({
                message: 'waduh error patrick'
            })
        })
    }
    static updateTodo (req,res) {
        let id = req.params.id
        let obj = {
            todo: req.body.todo,
            deadline: req.body.deadline,
        }
        Model.findOneAndUpdate(id,obj)
        .then(todo=> {
            res.json({
                message: 'Berhasil update todo'
            })
        })
    }
    static updateDone (req,res) {
        let id = req.params.id
        let obj = {
            done : true
        }
        
        Model.findByIdAndUpdate(id,{done: true})
        .then(todo=> {
            res.json({
                message: 'berhasil update status',
                todo
            })
        })
        .catch(err=> {
            res.json({
                message: err.message
            })
        })
    }
}

module.exports = Controller
