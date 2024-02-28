const express = require('express');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 4001;
const app = express();

// For parsing JSON bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', require('./routes/index'));

// Start the server
app.listen(PORT, console.log("Server started on port: " + PORT))