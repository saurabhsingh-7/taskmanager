# taskmanager
## Frontend Setup

### Technologies Used

- React
- React Router
- Axios

#### TaskCreate.jsx
- A controlled component to take input from the user for creating or updating a task.
- Sends data to the backend on form submission.
- Redirects to the TaskList.jsx after successful task creation or update.

#### TaskList.jsx
- Displays a list of tasks fetched from the backend.
- Provides buttons to edit or delete each task.
- Calls appropriate functions on button clicks.

#### TaskUpdate.jsx
- Renders the component with pre-filled data for updating an existing task.
- Sends a PUT request to update the task on form submission.

### How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the server using `npm run dev`
  
## Backend Setup

1. Started by creating a basic server using Express.
2. Established a connection to MongoDB by writing the connection logic in a separate file (`dbConnection.js`) within the `utils` folder.
3. Once the database connection is established, create a model for tasks, including fields for title, description, due date, and status.
4. Created a separate file (`taskModel.js`) within the `model` folder to encapsulate the task model.
5. Developed the controller functions for handling tasks, including functionalities for retrieving all tasks, deleting tasks, editing tasks, and adding tasks. Place these controller functions in the `taskController.js` file within the `controller` folder.
6. Followed a standard folder structure for the backend to maintain organization.
7. Registered all controllers (for GET, DELETE, UPDATE, ADD operations) in the `taskRoutes.js` file inside the `route` folder.
8. Hosted the backend on [Render](https://task-manager-3407.onrender.com/api/taskmanager/tasks) .
9. 
### Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose

### How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the server using `npm run dev`
