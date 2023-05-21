import React, { useEffect, useState } from 'react'
import Loading from '../../Components/Loading/Loading'
import LoginSignup from '../../Components/LoginSignup/LoginSignup'
import { Helmet } from 'react-helmet'
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
            <title>Login and SignUp</title>
          </Helmet>
            <LoginSignup/>
        </div>
      }
    </div>
  )
}

export default Index