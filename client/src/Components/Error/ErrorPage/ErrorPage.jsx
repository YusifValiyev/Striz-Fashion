import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ErrorPage.css'
function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div id='error-page'>
        <h1 className='error'>404</h1>
        <h2 className='oops'>OOPS, THAT LINK IS FOR ADMIN.</h2>
        <h5 className='error-text' onClick={()=>{navigate('/')}}>This page is only appointed for admins <span>Home Page</span></h5>
    </div>
  )
}

export default ErrorPage