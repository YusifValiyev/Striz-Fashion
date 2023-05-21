const router = require("express").Router()
const {GetProducts,GetProductById,PostProduct, DeleteProduct, UpdateProduct} = require("../controllers/Products.Controller")

router.get("/",GetProducts)
router.get('/:id',GetProductById)
router.post('/',PostProduct)
router.delete("/:id",DeleteProduct)
router.put("/:id",UpdateProduct)
module.exports = router