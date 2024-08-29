const express = require('express');
const cors = require('cors'); // Import CORS
const connectDB = require('./src/config/db'); // Import the database connection
const taskRoutes = require('./src/routes/taskRoutes'); // Import task routes

const app = express(); // Initialize Express app

app.use(cors()); // Use CORS middleware to handle CORS issues
app.use(express.json()); // Parse incoming JSON requests

app.use('/api', taskRoutes); // Use task routes for '/api' path

// Connect to the database
connectDB();

// Define the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
