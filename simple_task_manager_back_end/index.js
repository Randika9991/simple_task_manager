const express = require('express');
const connectDB = require('./src/config/db');
const taskRoutes = require('./src/routes/taskRoutes');

connectDB();
const app = express();

app.use(express.json());

app.use('/api', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
