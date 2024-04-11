const request = require('supertest');
const app = require('../index'); // Update the path to your app file
const jwt = require('jsonwebtoken');

// Define the token variable to store the generated token
let token = '';
var randno = Math.floor(Math.random() * 10000) + 1;

describe('All APIs', () => {
    // Test case for the signup route
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/signup')
            .send({
                email: `a${randno}@example.com`,
                username: `a${randno}`,
                password: 'password'
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
                email: `a${randno}@example.com`,
                password: 'password'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
        token = response.body.token;
    });

    // Test case for the invalid login attept
    it('Check invalid user', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                email: `a${randno}@example.com`,
                password: 'Wrongpasswords'
            });

        expect(response.statusCode).toBe(401);
    });

    // Test case for fetching tasks
    it('should get all tasks for the authenticated user', async () => {
        const response = await request(app)
            .get('/tasks')
            .set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    // Test case for unauthorized fetching
    it('should block un-authenticated user', async () => {
        const response = await request(app)
            .get('/tasks')
            .set('Authorization', `Bearer wrong${token}`);

        expect(response.statusCode).toBe(401);
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

    // Test case for deleting all tasks of the authenticated user
    it('should delete all tasks of the authenticated user', async () => {
        const response = await request(app)
            .delete('/deluser')
            .set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(200);
        // expect(response.body).toHaveProperty('message', 'All tasks deleted successfully');
    });

});
