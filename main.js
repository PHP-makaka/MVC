const express = require("express");
const bodyParser = require("body-parser");
const app = express()
const mongoose = require('mongoose')

const userRouter = require('./routes/userRouter')
const homeRouter = require('./routes/homeRouter')
app.set("view engine","hbs");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users",userRouter);
app.use('/',homeRouter)

////////////

app.use(function (req,res,next){
    res.status(404).send("page not found")
})


mongoose.connect("mongodb+srv://user1:1234@cluster0.chn5l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

