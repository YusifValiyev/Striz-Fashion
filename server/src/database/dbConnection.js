const mongoose = require("mongoose")

const db_url = process.env.URL.replace('<password>',process.env.PASSWORD)

//Db Connection
mongoose.set('strictQuery', true)
mongoose.connect(db_url,{

})
    .then(()=>{
        console.log("DB connect...");
    })
    .catch((err)=>{
        throw(err);
    })