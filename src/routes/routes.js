const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const taskController = require('../controllers/taskController');
const authenticateUser = require('../controllers/authMiddleware');

// User Routes
router.post('/signup', userController.signUp);
router.post('/login', userController.login);

// Task Routes
router.get('/tasks', authenticateUser, taskController.getAllTasks); // fetching all tasks
router.post('/tasks', authenticateUser, taskController.createTask); // creating a new task
router.put('/tasks/:id', authenticateUser, taskController.updateTask); // updating an existing task
router.delete('/tasks/:id', authenticateUser, taskController.deleteTask); // deleting a task

router.delete('/deluser', authenticateUser, taskController.deleteUser); // deleting the user and his tasks

module.exports = router;
