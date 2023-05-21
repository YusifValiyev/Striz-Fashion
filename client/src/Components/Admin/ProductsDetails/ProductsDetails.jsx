import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AiOutlineCheck} from 'react-icons/ai'
import {HiOutlineX} from 'react-icons/hi'
import './ProductsDetails.css'
function ProductsDetails() {
    const [detailproduct,setdDetailProduct] = useState("")
    let {productsId} = useParams()
    const getProductById = async()=>{
        await axios.get(`http://localhost:4000/products/${productsId}`)
        .then(res=>setdDetailProduct(res.data))
    }
    useEffect(()=>{
        getProductById()
    },[])
  return (
    <div id='productdetails'>
        <div className="productdetailform">
            <div className="product-image">
                <img src={detailproduct.img} alt="" />
            </div>
            <div className="product-infoo">
                <div className="product-infoo-title">
                    <h4>TITLE :</h4>
                    <h6>{detailproduct.title}</h6>
                </div>
                <div className="product-infoo-title">
                    <h4>CATEGORY :</h4>
                    <h6>{detailproduct.categories}</h6>
                </div>
                <div className="product-infoo-title">
                    <h4>COLOR :</h4>
                    <h6>{detailproduct.color}</h6>
                </div>
                <div className="product-infoo-title">
                    <h4>SIZE :</h4>
                    <h6>{detailproduct.size}</h6>
                </div>
                <div className="product-infoo-title">
                    <h4>SKU :</h4>
                    <h6>{detailproduct.sku}</h6>
                </div>
                <div className="product-infoo-title">
                    <h4>PRICE :</h4>
                    <h6>{detailproduct.price}</h6>
                </div>
                <div className="product-infoo-title">
                    <h4>IsStock :</h4>
                    {
                        detailproduct.isStock?
                        <h6><AiOutlineCheck/></h6>:
                        <h6><HiOutlineX/></h6>
                    }
                </div>
                <div className="product-infoo-title">
                    <h4>IsSale :</h4>
                    {
                        detailproduct.isSale?
                        <h6><AiOutlineCheck/></h6>:
                        <h6><HiOutlineX/></h6>
                    }
                </div>
                <div className="product-infoo-title">
                    <h4>IsNew :</h4>
                    {
                        detailproduct.isNew?
                        <h6><AiOutlineCheck/></h6>:
                        <h6><HiOutlineX/></h6>
                    }
                </div>
                <div className="product-infoo-title">
                    <h4>IsBestSeller :</h4>
                    {
                        detailproduct.isBestSeller?
                        <h6><AiOutlineCheck/></h6>:
                        <h6><HiOutlineX/></h6>
                    }
                </div>
                <div className="product-infoo-title infoo-desc">
                    <h4>DECRIPTION :</h4>
                    <h6>{detailproduct.description}</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsDetails