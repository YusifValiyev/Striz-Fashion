const { postUser, login } = require("../controllers/Auth.Controller")
const router = require("express").Router()


router.get('/',(req,res)=>{
    res.send("Auth")
})

router.get('/register',(req,res)=>{
    res.send("Reg")
})
router.post('/register',postUser)
router.post('/login',login)


module.exports = router