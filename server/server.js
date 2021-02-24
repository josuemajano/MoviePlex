const express = require('express');
const app = express();
const parseurl = require('parseurl');
const Sequelize = require('sequelize');
const { User } = require('./models');
const userHandler = require('./routes/userHandler');

const PORT = 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', userHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})