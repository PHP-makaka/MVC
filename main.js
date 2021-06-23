const express = require("express");
const bodyParser = require("body-parser");
const app = express()

const homeController = require('./controllers/homeController');

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

app.listen(3000)