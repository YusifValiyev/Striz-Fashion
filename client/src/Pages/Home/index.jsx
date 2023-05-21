import React from 'react'
import Arrivals from '../../Components/Home/Arrivals/Arrivals'
import Seller from '../../Components/Home/BestSeller/Seller'
import Carousel from '../../Components/Home/Carousel/Carousel'
import Discover from '../../Components/Home/Discover/Discover'
import Explore from '../../Components/Home/Explore/Explore'
import Follow from '../../Components/Home/FollowUs/Follow'
import Recent from '../../Components/Home/RcentPost/Recent'
import Summer from '../../Components/Home/SummerCollection/Summer'
import { useEffect, useState } from "react"
import Loading from '../../Components/Loading/Loading'
import {Helmet} from 'react-helmet'

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
          <Helmet>
            <title>Striz - Fashion</title>
          </Helmet>
            <Carousel/>
            <Explore/>
            <Arrivals/>
            <Summer/>
            <Seller/>
            <Discover/>
            <Recent/>
            <Follow/>
        </div>
      }
    </div>
  )
}

export default Index