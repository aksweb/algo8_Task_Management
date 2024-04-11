const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {
    signUp: async (req, res) => {
        try {
            const { email, username, password } = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await userModel.createUser(email, username, hashedPassword);
            res.status(200).json({ message: 'User created successfully', user: newUser });
        } catch (error) {
            console.error('Error signing up:', error);
            res.status(500).json({ error: 'An error occurred while signing up' });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            console.log(email + " " + password);
            const user = await userModel.getUserByEmail(email);
            if (!user) {
                return res.status(401).json({ error: 'Invalid email or password!' });
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ error: 'Invalid email or passworddd' });
            }

            // Generating JWT token
            const token = jwt.sign({ userId: user.id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });
            res.status(200).json({ token });
        } catch (error) {
            console.log('Error logging in:', error);
            res.status(500).json({ error: 'An error occurred while logging in' });
        }
    }
};

module.exports = userController;
