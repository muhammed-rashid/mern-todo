const mongoose = require("mongoose");
const Todo = mongoose.Schema({
   todo:{
    type:String,
    required:true
   }
})
module.exports = mongoose.model('todo',Todo);