const express = require('express');
const app = express();
const cors = require('cors');
const { getdatabaseName } = require('./utils/dbConnect');

// middleware
app.use(cors()) // Allow Cross Origin Resource Sharing
app.use(express.json())

app.use(async (req, res, next) => {
    try {
        console.log('Connected to MongoDB! from index.js');
        const database = getdatabaseName(); // Access the database instance directly from the request object
        req.db = database;
        next();
    } catch (error) {
        console.error('Error connecting to the database:', error);
        res.status(500).send({ status: 'error', message: 'Server Error' });
    }
});

// Home route
app.get('/', (req, res) => {
    res.send('Server is running Home Page');
});

//import routes
const openRoutes = require('./routes/openRoutes');


// route middleware
app.use('/api', openRoutes);


module.exports = app;




