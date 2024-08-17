const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Hello, World!');
});

router.post('/submit', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        res.status(200).send(`Name: ${name}, Email: ${email}`);
        console.log("work")
    } else {
        res.status(400).send('Missing name or email in the request body');
    }
});

module.exports = router;
