const db = require('../config/db');

const Task = {
    getAllTasks: async (userId) => {
        const query = 'SELECT * FROM tasks WHERE user_id = ?';
        const [tasks] = await db.query(query, [userId]);
        return tasks;
    },

    createTask: async (title, description, userId) => {
        const query = 'INSERT INTO tasks (title, description, user_id) VALUES (?, ?, ?)';
        const [result] = await db.query(query, [title, description, userId]);
        return { id: result.insertId, title, description, userId };
    },

    updateTask: async (id, title, description) => {
        const query = 'UPDATE tasks SET title = ?, description = ? WHERE id = ?';
        const [result] = await db.query(query, [title, description, id]);
        return result.affectedRows > 0;
    },

    deleteTask: async (id) => {
        const query = 'DELETE FROM tasks WHERE id = ?';
        const [result] = await db.query(query, [id]);
        return result.affectedRows > 0;
    },
    deleteAllTasks: async (userId) => {
        const query = 'DELETE FROM tasks WHERE user_id = ?';
        await db.query(query, [userId]);
    }
};

module.exports = Task;
