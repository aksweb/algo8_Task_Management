// authRoutes.test.js

const request = require('supertest');
const app = require('../../../index'); // Assuming your app is exported from 'app.js'

describe('Auth Routes', () => {
    // Test case for the signup route
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/signup')
            .send({
                email: 'test4@example.com',
                username: 'testuser4',
                password: 'testpassword'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'User created successfully');
        expect(response.body).toHaveProperty('user');
    });

    // Test case for the login route
    it('should login a user', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                email: 'test4@example.com',
                password: 'testpassword'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
});
