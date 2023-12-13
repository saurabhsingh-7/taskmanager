import React, { useContext, useEffect, useRef } from 'react'
import TodoContext from './StoreContext/TodoContext';
import '../Components/CreationPage.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function CreationPage() {
    const titleRef = useRef()
    const descriptionRef = useRef()
    const dateRef = useRef()
    const tableRef = useRef();
    const todoCtx = useContext(TodoContext);
    const {editingTask} = todoCtx
    const history = useHistory()
    console.log(todoCtx.editingTask,'line 13')
    useEffect(()=>{
        if(editingTask){
            titleRef.current.value = editingTask.title;
            descriptionRef.current.value= editingTask.description;
            dateRef.current.value = new Date(editingTask.date).toISOString().slice(0,10);
            tableRef.current.value = editingTask.status
        }
        
    },[todoCtx.editingTask])

    const submitHanlder = (event)=>{
        event.preventDefault();
        if (!titleRef.current.value || !descriptionRef.current.value) {
            alert('Title and Description are required.');
            return;
        }
        const dueDate = new Date(dateRef.current.value);
        const currentDate = new Date();

        if (dueDate < currentDate) {
            alert('Due Date cannot be in the past.');
            return;
        }
        const obj ={
            title: titleRef.current.value ,
            description : descriptionRef.current.value ,
            date : new Date(dateRef.current.value), 
            status : tableRef.current.value,
        }
        todoCtx.addTask(obj);
        todoCtx.editFunction(null);
        titleRef.current.value='' ;
        descriptionRef.current.value='' ;
        dateRef.current.value='' ;
        tableRef.current.value='';
        history.push('/')
    }


  return (
    <div>
        <form onSubmit={submitHanlder}>
            <label htmlFor="">Title</label>
            <input type="text" ref={titleRef}/>
            <label htmlFor="">Description</label>
            <input type="text" ref={descriptionRef}/>
            <label htmlFor="">Due Date</label>
            <input type="date" ref={dateRef} />
            <select id="table" ref={tableRef}>
                <option value=""hidden>--Choose Status--</option>
                <option value="completed">Completed</option>
                <option value="Not-completed">Not Completed</option>
            </select>
            <button type='submit'>Submit</button>   
        </form>
    </div>
  )
}

export default CreationPage