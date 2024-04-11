# **Algo8 Task Management API Docs**
## This readme is divided into 3 sections
   **A. Summary.** <br>
   **B. Steps & Requirements to run Hosted API.** <br>
   **C. Steps & Requirements to run Localhost API.** <br>
   
## A. Summary

1. User creates the account by registering.<br>
2. User Logs In and generates a JWT authentication token containing the userId. <br>
3. Various CRUD operations like <br>
     a. Creating a Task. <br>
     b. Fetching user's task list.<br>
     c. Updating user's task.<br>
     d. Deleting user's task.<br>
     e. Deleting user and its related task.<br>
4.**Hosting Server: Render ([Base Api: algo8-task-management.onrender.com](algo8-task-management.onrender.com))** <br>
5.**Hosted MySQL Database : Clever-Cloud**<br>

## _**B. Requirements for running the hosted API**_:

**1. Install POSTMAN or other REST API Testing tool**<br>
**2. Internet Connection.**

## **APIs and how to access them:**

1. User Registration.
   1. Do a POST request with the following JSON in the body.

```bash
POST https://algo8-task-management.onrender.com/signup
Content-Type: application/json

{
    "email": "sonipuja@gmail.com",
    "username": "sonipuja",
    "password": "sonipuja123@"
}
```

![Untitled](pics/fd6b4b7e-735b-49ca-aecc-091561bb9082.png) <br>

2. User Login.
   1. Do a POST request with the a similar type of JSON
   2. After this you will receive a token.
   3. Copy this token. This will be required for doing the CRUD operations.

```bash
POST https://algo8-task-management.onrender.com/login
Content-Type: application/json

{
    "email": "soni@gmail.com",
    "password": "soni"
}
```

Copy the generated token after login (you can find it in the response body).

![Untitled](pics/Untitled.png)

```bash
token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoic29uaXB1amFAZ21haWwuY29tIiwiaWF0IjoxNzEyODM1Mjg4LCJleHAiOjE3MTI4Mzg4ODh9.Jj8X5Hx5ynjgXYtGNnSr1LjyYFZjtdPjrazKq7x8LHM"
```

<br>
CRUD APIs:

1. Create Task:API

   1. Add Bearer Token as Authorization using the generated token.

      ![Untitled](pics/8a2009da-b9ba-46da-a090-7b37ce00f025.png)

   2. Add the task as raw JSON in the body.

      ![Untitled](pics/d99d8bf4-f827-4996-a819-111435bdd8e8.png)

   3. Do the POST request.

   ```bash
   POST https://algo8-task-management.onrender.com/tasks
   Content-Type: application/json
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoic29uaXB1amFAZ21haWwuY29tIiwiaWF0IjoxNzEyODM1Mjg4LCJleHAiOjE3MTI4Mzg4ODh9.Jj8X5Hx5ynjgXYtGNnSr1LjyYFZjtdPjrazKq7x8LHM
   ```

d. Observe the response:

![Untitled](pics/Untitled%201.png)
<br> 2. Read Tasks API.

1.  Add Bearer Token as Authorization using the generated token.

    ![Untitled](pics/Untitled%202.png)

2.  Do the GET request.

```bash
GET https://algo8-task-management.onrender.com/tasks

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoic29uaXB1amFAZ21haWwuY29tIiwiaWF0IjoxNzEyODM1Mjg4LCJleHAiOjE3MTI4Mzg4ODh9.Jj8X5Hx5ynjgXYtGNnSr1LjyYFZjtdPjrazKq7x8LHM
```

c. Observe the response in body.

![Untitled](pics/Untitled%203.png)
<br>

3. Update Task API:

   1. Add Bearer Token as Authorization using the generated token.

      ![Untitled](pics/Untitled%204.png)

   2. Add the updated task as raw JSON in the body.

      ![Untitled](pics/Untitled%205.png)

   3. Do the PUT request with the corresponding task ID.

   ```bash
   PUT https://algo8-task-management.onrender.com/tasks/3
   Content-Type: application/json
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoic29uaXB1amFAZ21haWwuY29tIiwiaWF0IjoxNzEyODM1Mjg4LCJleHAiOjE3MTI4Mzg4ODh9.Jj8X5Hx5ynjgXYtGNnSr1LjyYFZjtdPjrazKq7x8LHM
   ```

   <br>

4. DELETE Task API:

   1. Add Bearer Token as Authorization using the generated token.

      ![Untitled](pics/Untitled%206.png)

   2. Do the DELETE request with the corresponding task ID.

   ```bash
   DELETE https://algo8-task-management.onrender.com/tasks/2
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoic29uaXB1amFAZ21haWwuY29tIiwiaWF0IjoxNzEyODM1Mjg4LCJleHAiOjE3MTI4Mzg4ODh9.Jj8X5Hx5ynjgXYtGNnSr1LjyYFZjtdPjrazKq7x8LHM
   ```

   c. Observe the response.

   ![Untitled](pics/Untitled%207.png)
   <br>

5. DELETE USER API:

   1. Add Bearer Token as Authorization using the generated token.

      ![Untitled](pics/Untitled%208.png)

   b.Do the DELETE request.
   <br>

   ```bash
   DELETE https://algo8-task-management.onrender.com/deluser
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoic29uaXB1amFAZ21haWwuY29tIiwiaWF0IjoxNzEyODM1Mjg4LCJleHAiOjE3MTI4Mzg4ODh9.Jj8X5Hx5ynjgXYtGNnSr1LjyYFZjtdPjrazKq7x8LHM
   ```
<br> <br>
## _**C. Requirements for running the API on localhost**_:

**1. Clone this repository.** <br>
```bash
   git clone https://github.com/aksweb/algo8_Task_Management.git
```
**2. Install MySQL and Node.js.**
**3. Create a .env file containing the following variables as per your MySQL connection.** <br>
```bash
DB_HOST
DB_USERNAME
DB_PASSWORD
DB_NAME
```
**4. Run the following SQL commands** <br>
```bash
-- Database
CREATE DATABASE IF NOT EXISTS task_management_db;

-- Switch to db
USE task_management_db;

-- Create the users table

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(100) NOT NULL UNIQUE, username VARCHAR(50) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL
);

-- Create the tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(100) NOT NULL, description TEXT, user_id INT, FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);
```

**4. Open the project directory in terminal and run the following commands**

```bash
npm install
npm start
```

**6. Or To directly Test the APIs run the following command before stopping the server on port 3000:**

   ```bash
   npm run test
   ```

**7. To manually test the API using REST api extension or POSTMAN as explained above, do the following:**

   ```bash
   ### signup
   POST http://localhost:3000/signup

   Content-Type: application/json
   {
    "email": "example@gmail.com",
    "username": "exm",
    "password": "exm"
   }
   ### login
   POST http://localhost:3000/login
   Content-Type: application/json

   {
    "email": "example@gmail.com",
    "password": "exm"
   }
   ### get tasks of user
   GET http://localhost:3000/tasks
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU4LCJlbWFpbCI6InNvbmFsaUBnbWFpbC5jb20iLCJpYXQiOjE3MTI4MjQ2MDUsImV4cCI6MTcxMjgyODIwNX0.vxiYTsgjb7flM7q_bnGezrrq6puIZRq-sdV50-fqB_E

   ### creating tasks
   POST http://localhost:3000/tasks
   Content-Type: application/json
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU4LCJlbWFpbCI6InNvbmFsaUBnbWFpbC5jb20iLCJpYXQiOjE3MTI4MjQ2MDUsImV4cCI6MTcxMjgyODIwNX0.vxiYTsgjb7flM7q_bnGezrrq6puIZRq-sdV50-fqB_E
   {
    "title": "mujhe gud paratha chaheye",
    "description": "I m on diet"
   }
   ###update
   PUT http://localhost:3000/tasks/41
   Content-Type: application/json
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU4LCJlbWFpbCI6InNvbmFsaUBnbWFpbC5jb20iLCJpYXQiOjE3MTI4MjQ2MDUsImV4cCI6MTcxMjgyODIwNX0.vxiYTsgjb7flM7q_bnGezrrq6puIZRq-sdV50-fqB_E
   {
   "title": "testing",
   "description": "I m on dietI m on diet"
   }

   ### delete
   DELETE http://localhost:3000/tasks/7
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJlbWFpbCI6InlhZGF2QGdtYWlsLmNvbSIsImlhdCI6MTcxMjc5NjkzNCwiZXhwIjoxNzEyODAwNTM0fQ.-7QHtq6E0u5KOsCsb-ghGeX0YmcVU63HWpYdoV9dZsA

   ### delete user and data
   DELETE http://localhost:3000/deluser
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjExLCJlbWFpbCI6InlhZGF2QGdtYWlsLmNvbSIsImlhdCI6MTcxMjc5NjkzNCwiZXhwIjoxNzEyODAwNTM0fQ.-7QHtq6E0u5KOsCsb-ghGeX0YmcVU63HWpYdoV9dZsA
   ```

**Test Cases:**
1. Test case for the signup route <br>
2. Test case for the login route. <br>
3. Test case for the invalid login attempt. <br>
4. Test case for fetching tasks. <br>
5. Test case for unauthorized fetching. <br>
6. Test case for creating a task. <br>
7. Test case for updating a task. <br>
8. Test case for deleting all tasks of the authenticated user. <br>
   ![TestCases](pics/tests.png) <br>
