const mongoose = require("mongoose")
const {Schema} = mongoose

const ProductsSchema = new Schema(
    {
        img:{required:true,type:String},
        title:{required:true,type:String},
        color:{required:true,type:String},
        size:{required:true,type:String},
        sku:{required:true,type:String},
        categories:{required:true,type:String,trim:true},
        description:{required:true,type:String},
        price:{required:true,type:Number},
        frame:{type:String},
        isSale:{type:Boolean,default:false},
        isStock:{required:true,type:Boolean,default:false},
        isBestSeller:{type:Boolean,default:false},
        isNeew:{type:Boolean,default:false},
    },
    {timestamps:true}
)

module.exports = mongoose.model("Products",ProductsSchema)
