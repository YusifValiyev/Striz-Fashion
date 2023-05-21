import React, { useEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading'
import OnSaleImage from '../../Components/OnSale/OnSaleImage/OnSaleImage'
import OnsSaleProducts from '../../Components/OnSale/OnSaleProducts/OnsSaleProducts'

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
            <OnSaleImage/>
            <OnsSaleProducts/>
        </div>
      }
        
    </div>
  )
}

export default Index