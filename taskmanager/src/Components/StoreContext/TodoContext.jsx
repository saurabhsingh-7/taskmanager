import React from 'react'

const TodoContext =React.createContext({
  taskList :[],
  addTask:(task)=>{},
  deleteTask : (task)=>{},
  editingTask : [],
  editFunction :(task)=>{},
})

export default TodoContext