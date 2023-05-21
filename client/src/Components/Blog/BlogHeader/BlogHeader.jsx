import React from 'react'
import './BlogHeader.css'
import { useNavigate } from 'react-router-dom'
function BlogHeader() {
    const navigate = useNavigate()
  return (
    <div id='blogheader'>
        <h4 className='blog-header-h4'>
            BLOG MODERN
        </h4>
        <p className='blog-header-p'><span onClick={()=>{navigate('/')}} className='nav-home'>Home</span> <span>{'>'}</span> <span>Blog</span></p>
    </div>
  )
}

export default BlogHeader