# taskmanager

## Backend Setup

1. Start by creating a basic server using Express.
2. Establish a connection to MongoDB by writing the connection logic in a separate file (`dbConnection.js`) within the `utils` folder.
3. Once the database connection is established, create a model for tasks, including fields for title, description, due date, and status.
4. Create a separate file (`taskModel.js`) within the `model` folder to encapsulate the task model.
5. Develop the controller functions for handling tasks, including functionalities for retrieving all tasks, deleting tasks, editing tasks, and adding tasks. Place these controller functions in the `taskController.js` file within the `controller` folder.
6. Follow a standard folder structure for the backend to maintain organization.
7. Register all controllers (for GET, DELETE, UPDATE, ADD operations) in the `taskRoutes.js` file inside the `route` folder.
