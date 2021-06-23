const User =require('../models/user')

exports.addUser = function (req,res){
    res.render('create.hbs')
};
exports.getUser = function (req,res){
    res.render('users.hbs',{
        users:User.getAll()
    })
};
exports.postUser = function (req,res){
    const name = req.body.name;
    const age =req.body.age;
    const user = new User(name,age)
    user.save()
    res.redirect('/users')
}