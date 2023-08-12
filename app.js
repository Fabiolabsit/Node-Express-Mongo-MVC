const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(cors()) // Allow Cross Origin Resource Sharing
app.use(express.json()) 

// Home route
app.get('/', (req, res) => {
    res.send('Server is running Home Page');
});

//import routes
const openRoutes = require('./routes/openRoutes');

// route middleware
app.use('/api', openRoutes);



module.exports = app;




