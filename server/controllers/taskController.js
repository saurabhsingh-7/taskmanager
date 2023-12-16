const Task = require('../model/taskModel'); // Adjust the path accordingly

// Controller to fetch all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller to create a new task
const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, status } = req.body;

    // Validate inputs
    if (!title || !description || !status || !dueDate || new Date(dueDate) < new Date()) {
      return res.status(400).json({ error: 'Invalid task details' });
    }

    const newTask = await Task.create({ title, description, dueDate, status });
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



const updateTaskFields = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, dueDate, status } = req.body;

    // Validate inputs
    if (!title && !description && !dueDate && !status) {
      return res.status(400).json({ error: 'No fields to update' });
    }

    // Create an object with the fields to update
    const updatedFields = {};
    if (title) updatedFields.title = title;
    if (description) updatedFields.description = description;
    if (dueDate) updatedFields.dueDate = dueDate;
    if (status) updatedFields.status = status;

    // Update the task with the specified fields
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      updatedFields,
      { new: true } // Return the updated task
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task updated successfully', updatedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id;

    // Find the task by ID
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Return the found task
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller to delete a task
const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted successfully', deletedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTaskFields,
  getTaskById,
};
