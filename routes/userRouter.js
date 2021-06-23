const express =require('express')

const userController =require('../controllers/userController')
const userRouter = express.Router()

userRouter.use('/create', userController.addUser);
userRouter.use("/", userController.getUser);

module.exports =userRouter