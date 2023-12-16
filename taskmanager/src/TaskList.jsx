// TaskList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TaskList.css'
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
    <div className="task-list-container">
      <h2 className="task-list-heading">Task Listing Page</h2>
      <Link to="/create" className="create-task-link">Create New Task</Link>
      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.dueDate}</td>
              <td>{task.status}</td>
              <td className="task-actions">
                <Link to={`/edit/${task._id}`}>Edit</Link>
                <button onClick={() => handleDelete(task._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;