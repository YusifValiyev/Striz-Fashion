const User = require("../models/Users.Models")

const GetUsers = async(req,res,next)=>{
    try{
        User.find({},(err,docs)=>{
            res.send(docs)
        })
    }catch(error){
        next(error)
    }
}

const GetUserById = async(req,res,next)=>{
    const {id} = req.params
    User.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.status(200)
                res.send(doc)
            }else{
                res.status(404).json({message:"Not Found!!!"})
            }
        }else{
            res.status(500).json({message:err})
        }
    })
}

const PostUser = async(req,res,next)=>{
    try {
        const user = new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            isAdmin:req.body.isAdmin
        })
        user.save()
        res.status(200).json({message:"Create"})
    } catch (error) {
        next(error);
    }
}

const DeleteUser = async(req,res,next)=>{
    const {id} = req.params
    try{
        User.findByIdAndDelete(id,(err)=>{
            res.status(200).json({message:"Delete"})
        })
    }catch(err){
        next(err)
    }
}

const UpdateUser = async(req,res,next)=>{
    const {id} = req.params
    try{
        User.findByIdAndUpdate(id,req.body,(doc)=>{
            res.status(200).json({message:"Update"})
        })
    }catch(err){
        next(err)
    }

}

module.exports = {
    GetUsers,
    GetUserById,
    // PostUser,
    DeleteUser,
    UpdateUser
}

