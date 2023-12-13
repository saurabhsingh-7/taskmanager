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
    const { title, description, dueDate } = req.body;

    // Validate inputs
    if (!title || !description || !dueDate || new Date(dueDate) < new Date()) {
      return res.status(400).json({ error: 'Invalid task details' });
    }

    const newTask = await Task.create({ title, description, dueDate });
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller to update a task
const updateTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;

    // Validate inputs
    if (!title || !description || !dueDate || new Date(dueDate) < new Date()) {
      return res.status(400).json({ error: 'Invalid task details' });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate },
      { new: true }
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
  updateTask,
  deleteTask,
};
