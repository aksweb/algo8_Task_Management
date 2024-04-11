# Algo8 Tack Management API Docs

## APIs

1. User Registration.
   1. Do a POST request with the following JSON in the body

```bash
POST https://algo8-task-management.onrender.com/signup
Content-Type: application/json

{
    "email": "sonipuja@gmail.com",
    "username": "sonipuja",
    "password": "sonipuja123@"
}
```

![Untitled](pics/fd6b4b7e-735b-49ca-aecc-091561bb9082.png)

1. User Login.
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

2. Read Tasks API.

   1. Add Bearer Token as Authorization using the generated token.

      ![Untitled](pics/Untitled%202.png)

   2. Do the GET request.

   ```bash
   GET https://algo8-task-management.onrender.com/tasks

   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoic29uaXB1amFAZ21haWwuY29tIiwiaWF0IjoxNzEyODM1Mjg4LCJleHAiOjE3MTI4Mzg4ODh9.Jj8X5Hx5ynjgXYtGNnSr1LjyYFZjtdPjrazKq7x8LHM
   ```

   c. Observe the response in body.

   ![Untitled](pics/Untitled%203.png)

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

5. DELETE USER API:

   1. Add Bearer Token as Authorization using the generated token.

      ![Untitled](pics/Untitled%208.png)

   b.Do the DELETE request.

   ```bash
   DELETE https://algo8-task-management.onrender.com/deluser
   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoic29uaXB1amFAZ21haWwuY29tIiwiaWF0IjoxNzEyODM1Mjg4LCJleHAiOjE3MTI4Mzg4ODh9.Jj8X5Hx5ynjgXYtGNnSr1LjyYFZjtdPjrazKq7x8LHM
   ```
