const mongoose = require("mongoose")
const {Schema} = mongoose
const jwt = require("jsonwebtoken")

const UsersSchema = new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,select:true},
    isAdmin:{type:Boolean,default:false},
    userWishList:{type:Array,required:false},
    userCheckout:{type:Array,required:false},
    userCard:{type:Array,required:false}
},{timestamps:true})

UsersSchema.methods.generateJwtFromUser = function(){
    const {JWT_SECRET_KEY,JWT_EXPIRE} = process.env
    const payload = {
        id:this._id,
        name:this.name,
        email:this.email,
        password:this.password
    }

    const token = jwt.sign(payload,JWT_SECRET_KEY,{
        expiresIn:JWT_EXPIRE
    });
    return token
}


module.exports = mongoose.model("Users",UsersSchema)
