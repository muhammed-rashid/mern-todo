const Todo = require("../models/todo");
const Response = require("../helpers/responseHelper");
module.exports = todoController = {
  getTodo: async (req, res) => {
    todos = await Todo.find({});
    return Response(
      res,
      200,
      "success",
      "successfully created new todo",
      todos
    );
  },
  addTodo: async (req, res) => {
    //add a new todo to database
    const { todo } = req.body;
    if (!todo) {
      return Response(res, 500, "error", "Todo is required");
    }
    try {
      const doc = await Todo.create({ todo: todo });
      return Response(
        res,
        201,
        "success",
        "New Todo Created Successfully",
        doc
      );
    } catch (err) {
      return Response(res, 500, "error", "New Todo Created Successfully", err);
    }
  },
  updateTodo: async (req, res) => {
    const { todo } = req.body;
    if (!todo) {
      return Response(res, 500, "error", "Todo is required");
    }
   
    //update todo
    try {
      let doc = await Todo.findByIdAndUpdate(
       req.params.id,
        {
          todo: todo,
        },
        {new: true}
      );
      return Response(res, 200, "success", " Todo Updated Successfully", doc);
    } catch (err) {
      return Response(res, 500, "error", "something went wrong updating", err);
    }

    
  },
  deleteTodo: async (req, res) => {
    try {
      let doc = await Todo.findOneAndRemove({ _id: req.params.id });
      return Response(res, 200, "success", " Todo Deleted Successfully", doc);
    } catch (err) {
      return Response(res, 500, "error", " Something went wrong ", doc);
    }
  },
};
