import React from 'react'
import './todo.css'
function Todo({todo,id,editTodo,deleteTodo}) {
    return (
        <div className="todo">
           <div className="todo-item">
            {todo}
           </div>
           <div className="actions">
               <a className="action edit" onClick={()=>editTodo(id)}><i class="fa fa-pencil" ></i></a>
               <a className="action delete" onClick={()=>deleteTodo(id)}><i class="fa fa-trash" aria-hidden="true" ></i>
</a>
           </div>

        </div>
    )
}

export default Todo
