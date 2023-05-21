const Products = require("../models/Products.Models")

const GetProducts = async(req,res)=>{
    Products.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).json({message:err})
        }
    })
}

const GetProductById = async(req,res)=>{
    const {id} = req.params
    Products.findById(id,(err,doc)=>{
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

const PostProduct = async(req,res,next)=>{
    try {
        const Product = new Products({
            img:req.body.img,
            title:req.body.title,
            color:req.body.color,
            size:req.body.size,
            sku:req.body.sku,
            categories:req.body.categories,
            description:req.body.description,
            price:req.body.price,
            frame:req.body.frame,
            isSale:req.body.isSale,
            isStock:req.body.isStock,
            isBestSeller:req.body.isBestSeller,
            isNeew:req.body.isNeew,
        })
        Product.save()
        res.status(200).json({message:"Create"})
    } catch (error) {
        next(err);
    }
}

const DeleteProduct = async(req,res)=>{
    const {id} = req.params
    Products.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.status(200).json({message:"Delete"})
        }else{
            res.status(404).json({message:err})
        }
    })
}

const UpdateProduct = async(req,res)=>{
    const {id} = req.params
    Products.findByIdAndUpdate(id,req.body,(err,doc)=>{
        if(!err){
            res.status(200).json({message:"Update"})
        }else{
            res.status(404).json({message:err})
        }
    })

}

module.exports = {
    GetProducts,
    GetProductById,
    PostProduct,
    DeleteProduct,
    UpdateProduct
}

