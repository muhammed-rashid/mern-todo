import React, { useEffect, useState } from "react";
import axios from "axios";
import "./layout.css";
import { URL } from "../url";
import Todo from "../components/todo/Todo";

function Layout(props) {
const [todos, setTodos] = useState([]);
const [formData, setFormData] = useState({});
const [error,setError] = useState("")
const [success,setSuccess] = useState("")
const [update,setUpdate] = useState("")



//initial calling
  useEffect(function () {
    getTodos();
  }, []);

  //get current todos

  const getTodos = () => {
    axios
      .get(`${URL}/todo`)
      .then((res) => {
        setTodos(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
//set data to state
const handleChange =(e)=>{
    setFormData({
        todo:e.target.value
    })
}

//add new todo
  const addTodo = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}/todo`,formData)
      .then((res) => {
        //add to current state
        setTodos([...todos,res.data.data])
        setFormData({
          todo:""
        }) 

        setSuccess(res.data.message)
        
      })
      .catch((err) => {
         
        setError(err.response.data.message)
      });
  };

//edit todo
const editTodo = (id) =>{
    let [todo] = todos.filter(el => el._id == id)
    setFormData({'todo':todo.todo})
    setUpdate(id)
}
const updateTodo =()=>{
  axios.put(`${URL}/todo/${update}`,formData).then(res=>{
    console.log(res.data.data);
    const newTodos = [...todos]
    let todoIndex = todos.findIndex((el) => el._id == update );

    console.log(todoIndex);
    newTodos[todoIndex] = res.data.data;
    setTodos(newTodos)
    setUpdate("")
    setFormData({
      todo:""
    }) 
    setSuccess(res.data.message)

  }).catch(err=>{
    setError(err.response.data.message)
  })
}







//delete request
const deleteTodo = (id)=>{
  axios.delete(`${URL}/todo/${id}`).then(res=>{
    let updatedTodo = todos.filter(el=>el._id != id)
    setTodos(updatedTodo)
    setSuccess(res.data.message)
  }).catch(err=>{
    setError(err.response.data.message)
  })
}


  return (
    <div>
      <div className="wrapper">
          <p className="err">{error}</p>
          <p className="success">{success}</p>
        <input type="text" placeholder="Add A Task" name="todo" className="form" onChange ={handleChange} value={formData.todo}/>
        <a className="primary-btn" onClick={!update ? addTodo : updateTodo}>
          {update ? 'Update' : 'Add New Todo'}
        </a>

        <div className="todo-list">
          {todos.map((el) => {
            return <Todo key={el._id} id={el._id} todo={el.todo} editTodo={editTodo} deleteTodo={deleteTodo}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Layout;
