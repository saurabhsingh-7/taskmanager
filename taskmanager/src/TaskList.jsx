// TaskList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the API
    fetch('https://task-manager-3407.onrender.com/api/taskmanager/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const handleDelete = (taskId) => {
    // Send a request to delete the task with the given ID
    fetch(`https://task-manager-3407.onrender.com/api/taskmanager/tasks/${taskId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // If the deletion was successful, update the local state
          setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
        } else {
          console.error('Error deleting task:', response.statusText);
        }
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  return (
    <div>
      <h2>Task Listing Page</h2>
      <Link to="/create">Create New Task</Link>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.title}</strong> - {task.description} - Due Date: {task.dueDate} - Status: {task.status}
            <Link to={`/edit/${task._id}`}>Edit</Link>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
