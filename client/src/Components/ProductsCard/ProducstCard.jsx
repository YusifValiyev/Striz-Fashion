import React, {useEffect } from 'react'
import './ProductsCard.css'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { CiHeart } from 'react-icons/ci'
import { BiRefresh } from 'react-icons/bi'
import { AiOutlineEye } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useProvider } from '../../Context/ProductContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
function ProducstCard({ element }) {

    //Add to wishlist
    let user = JSON.parse(localStorage.getItem("user"))
    const { favs, setFavs } = useProvider()
    useEffect(() => {
        setFavs(user ? user.userWishList : [])
    }, [])
    const handleFav = async(data) => {
        if (user) {
            if (favs.some(x => x._id === data._id)) {
                toast.error('This product has been already in wishlist', {
                    position: "top-right",
                    autoClose: 1000,
                      hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } else {
                let newuser = {
                    _id: user._id,
                    username: user.username,
                    isAdmin: user.isAdmin,
                    password: user.password,
                    email: user.email,
                    userCard: user.userCard,
                    userCheckout: user.userCheckout,
                    userWishList: [...favs, data]
                }
                setFavs(newuser.userWishList)
                localStorage.setItem("user", JSON.stringify(newuser))
                await axios.put(`http://localhost:4000/users/${user._id}`, newuser)
                toast.success('This product add to wishlist', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        } else {
            navigate("/login")
        }
    }

    const navigate = useNavigate()
    const handleDetails = (id) => {
        navigate(`/details/${id}`)
    }

    return (
        <div id='productscard'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
            <div className="product-card">
                <div className="product-card-image">
                    <img src={element.img} onClick={() => handleDetails(element._id)} alt="" />
                    {
                        element.isStock ?
                            <div className="product-add-to-cart" onClick={() => handleDetails(element._id)}>
                                <p>ADD TO CART<HiChevronDoubleRight /></p>
                            </div> :
                            <div className="product-add-to-cart" onClick={() => handleDetails(element._id)}>
                                <p>READ MORE<HiChevronDoubleRight /></p>
                            </div>


                    }
                    <div className="product-card-icon">
                        <CiHeart onClick={() => handleFav(element)} className={user !== null && favs.find(x => x._id === element._id) ? "heart" : null} />
                        <BiRefresh />
                        <AiOutlineEye onClick={() => handleDetails(element._id)} />
                    </div>
                </div>
                <div className="product-card-stock">
                    {
                        element.isSale ? <h6>SALE!</h6> : null
                    }
                    {
                        element.isStock ? <p>In Stock</p> : <p>Out Of Stock</p>
                    }
                </div>
                <hr />
                <div className="product-card-info">
                    <h4 className='product-card-info-h4'>{element.title}</h4>
                    <p className="product-card-info-p">{element.categories}</p>
                    <h3 className="product-card-info-h3"><span>$</span>{element.price}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProducstCard