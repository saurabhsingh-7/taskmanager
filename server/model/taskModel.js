const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, default: 'Not Completed' },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
