// TaskCreate.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const TaskCreate = () => {
  const [formData, setFormData] = useState({ title: '', description: '', dueDate: '', status: 'Completed' });
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    console.log('Form Data:', formData);

    // Validation checks
    if (!formData.title || !formData.description || new Date(formData.dueDate) < new Date()) {
      alert('Please fill in all fields and ensure the due date is in the future.');
      return;
    }

    // Send data to the API for task creation
    fetch('https://task-manager-3407.onrender.com/api/taskmanager/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
        dueDate: formData.dueDate,
        status: formData.status,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        // Redirect to task listing page after successful creation
        history.push('/');
      })
      .catch((error) => console.error('Error creating task:', error));
  };

  return (
    <div>
      <h2>Task Creation Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
        </label>
        <label>
          Due Date:
          <input type="date" name="dueDate" value={formData.dueDate} onChange={handleInputChange} />
        </label>
        <label>
          Status:
          <select name="status" value={formData.status} onChange={handleInputChange}>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default TaskCreate;
