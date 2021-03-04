const db = require('../../models');
const User = db.User;



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