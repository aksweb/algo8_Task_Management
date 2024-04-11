const taskModel = require('../models/taskModel');
const userModel = require('../models/userModel');

const taskController = {
    getAllTasks: async (req, res) => {
        try {
            const userId = req.user.userId; // extracting user ID from authenticated request
            const tasks = await taskModel.getAllTasks(userId);
            res.status(200).json(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            res.status(401).json({ error: 'user not authorized' });
        }
    },

    createTask: async (req, res) => {
        try {
            const { title, description } = req.body;
            const userId = req.user.userId;
            const newTask = await taskModel.createTask(title, description, userId);
            res.status(200).json({ message: 'Task created successfully', task: newTask });
        } catch (error) {
            console.error('Error creating task:', error);
            res.status(500).json({ error: 'An error occurred while creating task' });
        }
    },

    updateTask: async (req, res) => {
        try {
            const taskId = req.params.id;
            console.log(taskId);
            const { title, description } = req.body;

            const taskUpdated = await taskModel.updateTask(taskId, title, description);
            if (taskUpdated) {
                res.status(200).json({ message: 'Task updated successfully' });
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        } catch (error) {
            console.error('Error updating task:', error);
            res.status(500).json({ error: 'An error occurred while updating task' });
        }
    },

    deleteTask: async (req, res) => {
        try {
            const taskId = req.params.id;

            const taskDeleted = await taskModel.deleteTask(taskId);
            if (taskDeleted) {
                res.status(200).json({ message: 'Task deleted successfully' });
            } else {
                res.status(404).json({ error: 'Task not found' });
            }
        } catch (error) {
            console.error('Error deleting task:', error);
            res.status(500).json({ error: 'An error occurred while deleting task' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userId = req.user.userId; // Extract user ID from authenticated request
            // Delete user tasks
            await taskModel.deleteAllTasks(userId);
            // Delete user
            await userModel.deleteUser(userId);
            res.status(200).json({ message: 'User and associated tasks deleted successfully' });
        } catch (error) {
            console.error('Error deleting user and tasks:', error);
            res.status(500).json({ error: 'An error occurred while deleting user and tasks' });
        }
    }
};

module.exports = taskController;
