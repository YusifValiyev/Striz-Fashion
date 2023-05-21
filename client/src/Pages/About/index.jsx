import React, { useEffect, useState } from 'react'
import AboutImage from '../../Components/About/AboutImage/AboutImage'
import AboutImage2 from '../../Components/About/AboutImage2/AboutImage2'
import Story from '../../Components/About/Story/Story'
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
          <AboutImage/>
          <Story/>
          <AboutImage2/>
        </div>
      }
    </div>
  )
}

export default Index