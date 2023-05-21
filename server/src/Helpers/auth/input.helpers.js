const bcrypt = require("bcryptjs")

const validateInput = (email,password)=>{
    return email && password;
}

module.exports={
    validateInput
}