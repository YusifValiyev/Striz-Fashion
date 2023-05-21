import React, { useEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading'
import ProfileInfo from '../../Components/Profile/ProfileInfo/ProfileInfo'

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
          <ProfileInfo/>
        </div>
      }
    </div>
  )
}

export default Index