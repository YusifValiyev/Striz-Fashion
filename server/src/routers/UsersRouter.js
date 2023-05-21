const express = require("express")
const router = express.Router()

const {GetUsers,GetUserById,PostUser,DeleteUser,UpdateUser} = require('../controllers/User.Controller')

//GetUsers
router.get("/",GetUsers)

//GetUserById
router.get("/:id",GetUserById)

//DELETE
router.delete("/:id",DeleteUser)

//UPDATE
router.put("/:id",UpdateUser)



module.exports = router