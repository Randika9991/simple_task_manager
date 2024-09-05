# Simple Task Manager (MERN Stack)

A simple task manager built using the MERN stack (MongoDB, Express, React, and Node.js). This application allows users to manage tasks, create new tasks, update existing ones, and delete them.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features
- Create, update, delete, and view tasks.
- Task completion status tracking.
- REST API with full CRUD functionality.

## Technologies Used
- MongoDB
- Express.js
- React.js
- Node.js
- Mongoose (for MongoDB object modeling)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Randika9991/simple_task_manager.git
   ```

2. Navigate to the project directory:
   ```
   cd repository-name
   ```

3. Install server dependencies:
   ```
   cd server
   npm install
   ```

4. Install client dependencies:
   ```
   cd ../client
   npm install
   ```

5. Set up environment variables:
   Create a `.env` file in the server directory and include:
   ```
   MONGO_URI=your_mongo_db_connection_string
   PORT=your_preferred_port
   ```

6. Run the app (both server and client):
   In one terminal, run the server:
   ```
   cd server
   npm start
   ```

   In another terminal, run the client:
   ```
   cd client
   npm start
   ```
   
## Usage

- Open your browser and go to `http://localhost:3000` to interact with the app.
- Use the provided form to create, update, or delete tasks.

## API Endpoints

- `GET /api/tasks`: Retrieve all tasks.
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/:id`: Update an existing task.
- `DELETE /api/tasks/:id`: Delete a task.



