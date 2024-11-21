const User = require("../model/User")

exports.login = (req, res) => {

    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).send({
            message: "Username and password are required"
        })
    }

    User.findOne({
        attributes: ["username","password"],
        where: { username, password }
    })
    .then(user => {
        if (!user) {
            return res.status(401).send({
                message: "Invalid username or password"
            })
        }

        res.status(200).send({
            message: "Login successful",
            data: user
        })
    })
    .catch(error => {
        res.status(500).send({
            message: "Error logging in",
            error: error.message
        })
    });
}

exports.register = (req, res) => {

    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).send({
            message: "Username and password are required"
        })
    }

    User.create({ username, password })
    .then(user => {
        res.status(201).send({ message: "Account created successfully" })
    })
    .catch(error => {
        res.status(500).send({
            message: "Error creating account",
            error: error.message
        })
    });

}