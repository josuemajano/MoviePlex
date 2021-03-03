const express = require('express');
const app = express();
const parseurl = require('parseurl');
const Sequelize = require('sequelize');
const { User } = require('./models');
const userHandler = require('./app/routes/userHandler');
const router = express.Router();

const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', userHandler);

router.get()

// Catch all route 
app.get('*', (req, res) => {
    res.status(404).send('No Content Found')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});