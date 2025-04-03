                                       📝 Task Manager (Full-Stack)

A simple Task Management application built with React (Frontend), Node.js (Backend), and MySQL (Database).
This project allows users to add, view, and delete tasks efficiently.

🚀 Features

✅ Add new tasks
✅ View a list of tasks
✅ Delete tasks
✅ Responsive and modern UI
✅ Backend API with Express.js
✅ MySQL database integration
✅ Uses Axios for API communication

🛠️ Tech Stack

Frontend:

React.js (Hooks, Axios)

HTML5, CSS3 (Styled with modern UI)

React Icons (Optional for UI enhancements)

Backend:

Node.js with Express.js

MySQL (Without Sequelize)

CORS, Body-Parser for request handling

Other Dependencies:

Axios for making API requests

dotenv for environment variable management

📂 Project Structure

task-manager/
│── backend/           # Express.js Server
│   ├── server.js      # Main entry point
│   ├── routes/        # API Routes
│   ├── config/        # MySQL Connection Config
│
│── frontend/          # React.js Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskList.js
│   │   │   ├── AddTaskForm.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│
│── README.md          # Project Documentation
│── package.json       # Dependencies
│── .gitignore

⚙️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/yourusername/task-manager.git
cd task-manager

2️⃣ Backend Setup (Node.js + MySQL)

cd backend
npm install

🔹 Configure MySQL Connection:

Create a .env file in the backend folder and add:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=task_db

Create the task_db database manually or run:

CREATE DATABASE task_db;

Create the tasks table:

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

🔹 Start Backend Server

node server.js

3️⃣ Frontend Setup (React.js)

cd frontend
npm install
npm start

📡 API Endpoints



Endpoint

Description

GET

/tasks

Get all tasks

POST

/tasks

Add a new task

DELETE

/tasks/:id

Delete a task

Example API Calls:

Get All Tasks

curl -X GET http://localhost:5000/tasks

Add a Task

curl -X POST http://localhost:5000/tasks -H "Content-Type: application/json" -d '{"title": "New Task"}'

Delete a Task

curl -X DELETE http://localhost:5000/tasks/1

🛠️ Deployment Notes

Note: This project is currently not deployed. It can be run locally following the setup instructions above.

AWS Integration: AWS services were not used; instead, MySQL was used as the database.

🎉 Conclusion

This Task Manager app demonstrates a full-stack CRUD setup using React, Node.js, and MySQL. 🚀