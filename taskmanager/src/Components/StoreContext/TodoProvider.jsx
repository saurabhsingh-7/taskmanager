import React, { useState } from 'react'
import TodoContext from './TodoContext'

function TodoProvider(props) {

    const [taskList,setTaskList] =useState([]);
    const [editingTask,setIsEditingTask]= useState(null);

    function addTask (task){
        setTaskList([...taskList, task])
    }

    //delete task
    function deleteTask(task){
        let newList = taskList.filter((item)=> item.title !== task.title);    
        setTaskList(newList)
    }

    const editFunction =(task)=>{
        setIsEditingTask(task)
        if(task !== null){
            let newList = taskList.filter((item)=> item.title !== task.title);    
            setTaskList(newList)
        }
    }

    const obj={
        taskList,
        addTask,
        deleteTask,
        editingTask,
        editFunction
    }
  return (
    <TodoContext.Provider value={obj}>{props.children}</TodoContext.Provider>
  )
}

export default TodoProvider