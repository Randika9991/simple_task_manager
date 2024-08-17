const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const connectDB = require('./src/config/db');
connectDB();

const routes = require('./src/routes');
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
