const request = require('supertest');
const app = require('../../../index'); // Update the path to your app file

// Define the token variable to store the generated token
let token = '';

describe('Auth Routes', () => {
    // Test case for the signup route
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/signup')
            .send({
                email: 'a4@example.com',
                username: 'a4',
                password: 'a1password'
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
                email: 'a4@example.com',
                password: 'a1password'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
        token = response.body.token;
    });

    // Test case for fetching tasks
    it('should get all tasks for the authenticated user', async () => {
        const response = await request(app)
            .get('/tasks')
            .set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    // Test case for creating a task
    it('should create a new task for the authenticated user', async () => {
        const response = await request(app)
            .post('/tasks')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Test Task',
                description: 'This is a test task'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Task created successfully');
        expect(response.body).toHaveProperty('task');
    });

    // Test case for updating a task
    it('should update an existing task for the authenticated user', async () => {
        const response = await request(app)
            .put('/tasks/15')
            .set('Authorization', `Bearer ${token}`)
            .send({
                title: 'Updated Test Task',
                description: 'This is the updated test task'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('message', 'Task updated successfully');
    });

});
