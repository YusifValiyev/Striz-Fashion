import React from 'react'
import './Sidebar.css'
import {RiAdminFill} from 'react-icons/ri'
import {IoStatsChartSharp} from 'react-icons/io5'
import {SiGoogleearth} from 'react-icons/si'
import {RiVipDiamondFill} from 'react-icons/ri'
import { HiUsers } from 'react-icons/hi'
import {GrProductHunt} from 'react-icons/gr'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import {IoDocuments} from 'react-icons/io5'
import {ImUser} from 'react-icons/im'
import { Link } from 'react-router-dom'
function Sidebar() {
let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div id='adminsidebar'>
        <img src="https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg" alt="" />
        <div className="adminsidebar-header">
            <RiAdminFill/>
            <h3 className='adminsidebar-h3'>Admin Panel</h3>
        </div>
        <div className="adminsidebar-general">
            <p className='general'>General</p>
            <ul>
                <li><IoStatsChartSharp/> Charts</li>
                <li><SiGoogleearth/>Maps</li>
                <li><RiVipDiamondFill/>Components</li>
                <li><Link to={"/admin/users"}><HiUsers/>Users</Link></li>
                <li><Link to={"/admin/products"}><GrProductHunt/>Products</Link></li>
            </ul>
        </div>
        <div className="adminsidebar-general">
            <p className='general'>Extra</p>
            <ul>
                <li><BsFillCalendarDateFill/> Calendar</li>
                <li><IoDocuments/>Documentation</li>
            </ul>
        </div>
        <div className="adminsidebar-general">
            <p className='general'>Admin</p>
            <ul>
                <li><ImUser/>{user?.username}</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar