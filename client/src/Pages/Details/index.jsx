
import React, { useEffect, useState } from 'react'
import DetailsDesc from '../../Components/Details/DetailsDesc/DetailsDesc'
import DetailsHeader from '../../Components/Details/DetailsHeader/DetailsHeader'
import DetailsProduct from '../../Components/Details/DetailsProduct/DetailsProduct'
import Related from '../../Components/Details/Related/Related'
import Loading from '../../Components/Loading/Loading'

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
          <DetailsHeader/>
          <DetailsProduct/>
          <DetailsDesc/>
          <Related/>
        </div>
      }
    </div>
  )
}

export default Index