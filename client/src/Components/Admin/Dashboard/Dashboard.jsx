import React from 'react'
import './Dashboard.css'
function Dashboard() {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div id='dashboard'>
      <div className="admin-username">
        <h1>Welcome {user?.username}</h1>
      </div>
    </div>
  )
}

export default Dashboard