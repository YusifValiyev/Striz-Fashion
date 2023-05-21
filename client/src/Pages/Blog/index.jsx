import React, { useEffect, useState } from 'react'
import BlogHeader from '../../Components/Blog/BlogHeader/BlogHeader'
import Blogs from '../../Components/Blog/Blogs/Blogs'
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
            <BlogHeader/>
            <Blogs/>
        </div>
      }
      
    </div>
  )
}

export default Index