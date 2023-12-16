
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import '../components/TaskEdit.css'
const TaskEdit = () => {
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [formData, setFormData] = useState({ title: '', description: '', dueDate: '', status: 'Not Completed' });
  const history = useHistory();
     console.log("id----------------->",id);
  useEffect(() => {
    // Fetch the selected task for editing
    fetch(`https://task-manager-3407.onrender.com/api/taskmanager/tasks/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("hbjjjj",data);
        setTask(data);
        setFormData({
          title: data.title,
          description: data.description,
          dueDate: new Date(data.dueDate).toISOString().split('T')[0],
          status: data.status,
        });
      })
      .catch((error) => console.error('Error fetching task for editing:', error));
  }, [id]);

  console.log("datta task", task)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!formData.title || !formData.description || new Date(formData.dueDate) < new Date()) {
      alert('Please fill in all fields and ensure the due date is in the future.');
      return;
    }

    // Send data to the API for task update
    fetch(`https://task-manager-3407.onrender.com/api/taskmanager/tasks/${id}`, {
      method: 'PUT',
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
        // Redirect to task listing page after successful update
        history.push('/');
      })
      .catch((error) => console.error('Error updating task:', error));
  };

 
  return (
    <div className="task-edit-container">
      <h2>Task Editing Page</h2>
      <form className="task-edit-form" onSubmit={handleSubmit}>
        <label className="task-edit-label">
          Title:
          <input className="task-edit-input" type="text" name="title" value={formData.title} onChange={handleInputChange} />
        </label>
        <label className="task-edit-label">
          Description:
          <input className="task-edit-input" type="text" name="description" value={formData.description} onChange={handleInputChange} />
        </label>
        <label className="task-edit-label">
          Due Date:
          <input className="task-edit-input" type="date" name="dueDate" value={formData.dueDate} onChange={handleInputChange} />
        </label>
        <label className="task-edit-label">
          Status:
          <select className="task-edit-select" name="status" value={formData.status} onChange={handleInputChange}>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <button className="task-edit-button" type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default TaskEdit;