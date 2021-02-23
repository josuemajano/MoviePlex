const express = require('express');
const app = express();
const parseurl = require('parseurl');
const Sequelize = require('sequelize');

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})