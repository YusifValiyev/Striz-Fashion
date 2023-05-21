import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HiOutlineX } from 'react-icons/hi'
import { AiOutlineCheck } from 'react-icons/ai'
import "./Userslist.css"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
function Userslist() {
    const navigate = useNavigate()
    const [userslist, setUsersList] = useState([])
    const getUsers = async () => {
        let response = await axios.get('http://localhost:4000/users')
        setUsersList(await response.data)
    }
    const handleDeleteUser=async(id)=>{
        Swal.fire({
            background:"#0B2744",
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
                 await axios.delete(`http://localhost:4000/users/${id}`)
                .then(res=>{
                    if(res.status===200){
                        setUsersList(userslist.filter(x=>x._id!==id))
                    }
                }
                ).catch(err=>{
                    alert(err);
                })
              Swal.fire(
                {
                    background:"#0B2744",
                    icon:"success",
                    title:"'Your user has been deleted.'"
                }
              )
            }
          })
    }
    const handleUserDetails=async(id)=>{
        navigate(`/admin/users/${id}`)
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div id='userslist'>
            <table>
                <thead>
                    <tr>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>ISADMIN</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userslist.filter(x=>x.isAdmin===false).map(element => (
                            <tr key={element._id}>
                                <td>{element.username}</td>
                                <td>{element.email}</td>
                                <td>{element.isAdmin?<AiOutlineCheck/>:<HiOutlineX/>}</td>
                                <td className='settings-btns'>
                                    <button className='dlt-btn' onClick={()=>handleDeleteUser(element._id)}>DELETE</button>
                                    <button className='dtls-btn' onClick={()=>handleUserDetails(element._id)}>DETAILS</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Userslist