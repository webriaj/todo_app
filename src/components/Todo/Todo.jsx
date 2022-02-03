import './Todo.css'
import React, { useState } from 'react';
const Todo = () => {
    const [todoTitle,setTodoTitle] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodo = (title)=>{
        if(title){
            const newTodo = {
                id: Date.now(),
                title : title
            }
            setTodoList([newTodo,...todoList]);
            setTodoTitle("");
        }else{
            alert("Please enter a todo");
        }
    }
    const deleteHandler = (todoId) => {
        const newTodoList = todoList.filter((todo)=> todo.id !== todoId);
        setTodoList(newTodoList);
    }
    return (
        <div>
            <div>
            <div>
                <h2>Add Todo Here</h2>
                <form>
                <input onChange = {(e) => setTodoTitle(e.target.value)} value = {todoTitle} placeholder = 'Todo Title Here' type = "text" name = "todo"/>

                    <button onClick = {(e) => {
                    e.preventDefault();
                    addTodo(todoTitle);
                    
                    }}>
                    Add Todo
                    </button>
                </form>
                </div>
                <div>
                    <h2>All Todo List</h2>
                    <ul>
                    {todoList.map((todo) => (
                    <li>
                        <span>{todo.title}</span>
                        <button>Edit</button>
                        <button
                        onClick = {()=>deleteHandler(todo.id)}>
                            Delete
                        </button>
                    </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todo;