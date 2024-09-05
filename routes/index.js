const express = require('express');
const router = express.Router();

//This will get the request for the home page
router.get('/',(req, res) => {
    res.render('index', { message: 'Welcome to Node.js App!'});
});

//POST request to handle form of submissions
router.post('/submit', (req, res) => {
    const { name, message } = req.body;
    res.send('Hello ${name}, your message: "${message} has been received');
});

module.exports = router;