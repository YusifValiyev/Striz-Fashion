import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Components/Admin/Sidebar/Sidebar';
import ErrorPage from '../../Components/Error/ErrorPage/ErrorPage';
import Loading from '../../Components/Loading/Loading';
import { AdminPanelProvider } from '../../Context/AdminPanelContext';
import { Helmet } from 'react-helmet';
let user = JSON.parse(localStorage.getItem("user"));
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
          user && user.isAdmin?
           <AdminPanelProvider>
          <Helmet>
            <title>Admin Panel</title>
          </Helmet>
            <Sidebar/>
            <Outlet/>
           </AdminPanelProvider>
          :
          <ErrorPage/>
      }
          
    </div>
  )
}

export default Index