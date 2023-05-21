import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './DetailsHeader.css'
import axios from 'axios'
import { useProvider } from '../../../Context/ProductContext'
function DetailsHeader() {
    const {productDetails,setProductDetails} = useProvider()
    const navigate = useNavigate()
    const {prodid} = useParams()
    const getproductbyid = async()=>{
        let response = await axios.get(`http://localhost:4000/products/${prodid}`)
        .then(response => setProductDetails(response.data))
    }
    useEffect(()=>{
      getproductbyid()
    },[prodid])
  return (
    <div id="detailsheader">
         <h4 className='details-header-h4'>
            {productDetails.title}
        </h4>
        <p className='details-header-p'><span onClick={()=>{navigate('/')}} className='nav-home'>Home</span> <span>{'>'}</span> <span onClick={()=>{navigate('/products')}} className='nav-home'>Products</span> <span>{'>'}</span> <span>{productDetails.title}</span></p>
    </div>
  )
}

export default DetailsHeader