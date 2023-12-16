

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController'); // Adjust the path accordingly

// GET all tasks
router.get('/tasks', taskController.getAllTasks);

router.get('/tasks/:id', taskController.getTaskById);



// POST create a new task
router.post('/tasks', taskController.createTask);

// PUT update a task
router.put('/tasks/:id', taskController.updateTaskFields);

// DELETE delete a task
router.delete('/tasks/:id', taskController.deleteTask);




module.exports = router;



