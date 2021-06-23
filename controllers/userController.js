const User = require('../models/user')

exports.addUser = function (req, res) {
    res.render('create.hbs')
};
exports.getUser = function (req, res) {
    User.find({}, function (err, allUsers) {
        if (err) {
            console.log(err)
            return res.status(500).send("error DataBase")
        }
        res.render("users.hbs", {
            users: allUsers
        })
    })
};
exports.postUser = function (req, res) {
  if (!req.body) return res.status(500).send("tyt errr");

    const name1 = req.body.name;
    const age1 = req.body.age;
    const user = new User({name:name1,age:age1})
    user.save(function (err){
        if (err) return console.log(err)

        res.redirect('/users')
    })
}