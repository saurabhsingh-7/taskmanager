# taskmanager

## Backend Setup

1. Started by creating a basic server using Express.
2. Established a connection to MongoDB by writing the connection logic in a separate file (`dbConnection.js`) within the `utils` folder.
3. Once the database connection is established, create a model for tasks, including fields for title, description, due date, and status.
4. Created a separate file (`taskModel.js`) within the `model` folder to encapsulate the task model.
5. Developed the controller functions for handling tasks, including functionalities for retrieving all tasks, deleting tasks, editing tasks, and adding tasks. Place these controller functions in the `taskController.js` file within the `controller` folder.
6. Followed a standard folder structure for the backend to maintain organization.
7. Registered all controllers (for GET, DELETE, UPDATE, ADD operations) in the `taskRoutes.js` file inside the `route` folder.
8. Hosted the backend on [Render](https://task-manager-3407.onrender.com/api/taskmanager/tasks) .
