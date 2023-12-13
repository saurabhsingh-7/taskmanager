import React, { useContext } from 'react'
import TodoContext from './StoreContext/TodoContext'
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function TaskListing() {
    const todoCtx = useContext(TodoContext);
    const history = useHistory()

    const HandlerEdit = (task)=>{
        todoCtx.editFunction(task);
        history.push('/create');
    }

  

  return (
    <div>
        <button>
            <NavLink to={'/create'} style={{ textDecoration: 'none' }}>To create</NavLink>
        </button>
        <ul>
            {todoCtx.taskList.map((todo,index)=>
                <li key={index}>
                    <h1>{todo.title}</h1>
                    <h1>{todo.description}</h1>
                    <h1><span>{todo.date.toLocaleString("en-US",{month:"long"})}</span>-<span>{todo.date.toLocaleString("en-US",{day:"2-digit"})}</span>-<span>{todo.date.getFullYear()}</span></h1>
                    <h1>{todo.status}</h1>
                    <button onClick={todoCtx.deleteTask.bind(null,todo)}>Delete</button>
                    <button onClick={()=> HandlerEdit(todo)}>Edit</button>
                </li>
            )}
        </ul>
    </div>
  )
}

export default TaskListing