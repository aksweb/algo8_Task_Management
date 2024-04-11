const db = require('../config/db');

const User = {
    getUserByEmail: async (email) => {
        try {
            const query = 'SELECT * FROM users WHERE email = ?';
            const [rows, fields] = await db.query(query, [email]);
            return rows[0]; // return the first user found or null if not found
        } catch (err) {
            console.err('Error retrieving user by email:', err);
            throw err;
        }
    },

    createUser: async (email, username, password) => {
        try {
            const query = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)';
            const [result] = await db.query(query, [email, username, password]);
            return { id: result.insertId, email, username }; // newly created user
        } catch (err) {
            console.err('Error creating user:', err);
            throw err;
        }
    },
    deleteUser: async (userId) => {
        try {
            const query = 'DELETE FROM users WHERE id = ?';
            await db.query(query, [userId]);
        } catch (err) {
            console.error('Error deleting user:', err);
            throw err;
        }
    }
};

module.exports = User;
