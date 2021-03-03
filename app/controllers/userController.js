const db = require('../../models');
const User = db.User;
const Sequelize = require('sequelize');
var userHandeler = require('../routes/userHandler');


// Get all User in database



// Create new User 

exports.createUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        password
    });
    res.json({
        id: newUser.id
    });
}

// Log In User

exports.logUser = async (req, res)