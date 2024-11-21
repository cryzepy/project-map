const User = require("../model/User");

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({
      message: "Username and password are required",
    });
  }

  User.findOne({
    attributes: ["username", "password"],
    where: { username, password },
  })
    .then((user) => {
      if (!user) {
        // return res.status(401).send({
        //   message: "Invalid username or password",
        // });
        return res.status(401).redirect("/admin/login")
      }

      req.session.isLoggedIn = true; // Set session
      req.session.username = username; // Simpan username ke session
      res.redirect("/admin/dashboard");
    })
    .catch((error) => {
      res.status(500).redirect("/admin/login")
    });
};

exports.register = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    
    return res.status(400).redirect("/admin/regisiter")
  }

  User.create({ username, password })
    .then((user) => {
    //   res.status(201).send({ message: "Account created successfully" });
    res.status(201).redirect("/admin/login")
    })
    .catch((error) => {
    //   res.status(500).send({
    //     message: "Error creating account",
    //     error: error.message,
    //   });
      res.status(500).redirect("/admin/register")
    });
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/admin/login");
  });
};
