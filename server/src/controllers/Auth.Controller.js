const User = require('../models/Users.Models')
const AsyncErrorHandler = require("express-async-handler")
const {sendJwtToClient} = require("../Helpers/auth/token.helpers")
const { validateInput } = require('../Helpers/auth/input.helpers')

const postUser = AsyncErrorHandler(async(req,res,next)=>{
    const{
        username,
        email,
        password,
        isAdmin,
        gender,
        userWishList,
        userCheckout,
        userCard,
    } = req.body

    const user = await User.create({
        username,
        email,
        password,
        isAdmin,
        gender,
        userWishList,
        userCheckout,
        userCard,
    });
    sendJwtToClient(user,res)
})

const login = AsyncErrorHandler(async(req,res,next) => {
    const {email,password} = req.body
    if(!validateInput(email,password)){
        return next(res.status(400).json({
            success:false,
            message:"Wrong password or email"
        }))
    }
    const user = await User.findOne({email}).select('+password');
    if(password !==user?.password){
        return next(res.status(400).json({
            success:false,
            message:"Wrong password"
        }))
    }
    sendJwtToClient(user,res)
})

module.exports = {
    postUser,login
}