import React, { useEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading'
import AllProducts from '../../Components/Products/AllProducts/AllProducts'
import ProductsHeader from '../../Components/Products/ProductsHeader/ProductsHeader'

function Index() {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    window.scrollTo({top:0})
    setTimeout(()=>{
      setLoading(false)
    },1500)
  },[])
  return (
    <div>
      {
        loading?
          <Loading/>:
        <div>
           <ProductsHeader/>
           <AllProducts/>
        </div>
      }

    </div>
  )
}

export default Index