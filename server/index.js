const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const ProductRouter = require("./src/routers/ProductsRouter")
const UserRouter = require("./src/routers/UsersRouter")
const AuthRouter = require('./src/routers/AuthRouters')
const cookieParser = require("cookie-parser")
require("dotenv").config()
require('./src/database/dbConnection')

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

app.get("/",(req,res)=>{
    res.send("<h1>Admin Panel</h1>");
})
//Products 
app.use("/products",ProductRouter)
//auth
app.use("/auth",AuthRouter)
//users
app.use('/users',UserRouter)

//Server
const port = process.env.PORT
app.listen(port,(err)=>{
    try {
        if(!err){
            console.log("Server loading...");
        }
    } catch (error) {
        throw(error)
    }
})