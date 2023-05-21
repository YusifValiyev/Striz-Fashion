import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAdminProvider } from '../../../Context/AdminPanelContext'
import './UserDetails.css'
function UserDetails() {
    const { userId } = useParams()
    const { adminuserdetails, setAdminUserDetails } = useAdminProvider()
    const [active,setActive] = useState(1)
    const getUserById = async () => {
        await axios.get(`http://localhost:4000/users/${userId}`)
            .then(res => setAdminUserDetails(res.data))
    }

    useEffect(() => {
        getUserById()
    }, [])
    return (
        <div id='userdetails'>
            <div className="userdetailsform">
                <div className="userimage">
                    <img src="https://logodix.com/logo/1070509.png" alt="" />
                </div>
                <div className="userinfo">
                    <div className="user-username">
                        <h4 className='userinfo-h4'>USERNAME:</h4>
                        <h6 className='userinfo-p'>{adminuserdetails.username} <span></span></h6>
                    </div>
                    <div className="user-useremail">
                        <h4 className='userinfo-h4' >EMAIL:</h4>
                        <h6 className='userinfo-p'>{adminuserdetails.email} <span></span></h6>
                    </div>
                </div>
                <div className="usercardandwish">
                    <div className="admincardwish">
                        <h3 className='admincardwish-usercard' onClick={()=>setActive(1)}>User Card <span></span></h3>
                        <h3 className='admincardwish-userwish' onClick={()=>setActive(2)}>User Wishlist <span></span></h3>
                    </div>

                        {
                            active===1?
                            <div className="usercard-table">
                            {
                                adminuserdetails.userCard?.length!==0?
                                <table>
                                <tbody>
                                    {
                                        adminuserdetails.userCard?.map(element => (
                                            <tr key={element._id}>
                                                <td>{element.title}</td>
                                                <td>{element.categories}</td>
                                                <td>{element.price}</td>
                                                <td>{element.counter}</td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>:
                            <p>CARD IS EMTPY</p>
                            }
                        </div>:null
                        }

                    {
                        active===2?
                        <div className="userwish-table">
                            {
                                adminuserdetails.userWishList?.length!==0?
                                <table>
                            <tbody>
                                {
                                    adminuserdetails.userWishList?.map(element => (
                                        <tr key={element._id}>
                                            <td>{element.title}</td>
                                            <td>{element.categories}</td>
                                            <td>{element.price}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>:<p>WISHLIST IS EMPTY</p>
                         }
                    </div>:null
                    }
                </div>
            </div>
        </div>
    )
}

export default UserDetails