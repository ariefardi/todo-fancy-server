var express = require('express');
var router = express.Router();
const todoController = require('../controllers/todo-controller')

/* GET todos listing. */
router.get('/', todoController.getTodos)
router.post('/',todoController.postTodo)
router.delete('/delete/:id',todoController.DeleteTodo)
router.put('/update/:id',todoController.updateTodo)


module.exports = router;
