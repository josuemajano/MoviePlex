const express = require('express');
const app = express();
const path = require('path');
const { User } = require('./models');
const userHandler = require('./app/routes/userHandler');

const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', userHandler);

// Catch all route 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  }); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});