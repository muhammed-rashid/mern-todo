const express = require('express')
const todoController = require('../controller/todoController')
const route = express.Router();

route.get('/todo',todoController.getTodo)
route.post('/todo',todoController.addTodo)
route.put('/todo/:id',todoController.updateTodo)
route.delete('/todo/:id',todoController.deleteTodo)


module.exports = route;