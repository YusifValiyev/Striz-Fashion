import React, { useEffect } from 'react'
import { useProvider } from '../../../Context/ProductContext'
import { useDispatch } from 'react-redux'
import './DetailsProduct.css'
import { BiHeart } from 'react-icons/bi'
import { BsEmojiFrown } from 'react-icons/bs'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { addBasket } from '../../BasketSlice/BasketSlice'
import { useNavigate } from 'react-router-dom'

function DetailsProduct() {
    let user = JSON.parse(localStorage.getItem("user"))
    const { productDetails } = useProvider()
    const { favs, setFavs } = useProvider()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        setFavs(user ? user.userWishList : [])
    }, [])
    const handleAddBasket = (data) => {
        dispatch(addBasket(data))
    }
    const handleFav = (data) => {
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
                let newuserr = {
                    _id: user._id,
                    username: user.username,
                    isAdmin: user.isAdmin,
                    password: user.password,
                    email: user.email,
                    userCard: user.userCard,
                    userCheckout: user.userCheckout,
                    userWishList: [...favs, data]
                }
                setFavs(newuserr.userWishList)
                localStorage.setItem("user", JSON.stringify(newuserr))
                axios.put(`http://localhost:4000/users/${user._id}`, newuserr)
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
    return (
        <>
            <div id='detailsproduct'>
                <div className="detailsproduct-image">
                    <img src={productDetails.img} alt="" />
                </div>
                <div className="detailsproduct-details">
                    <div className="priceanddesc">
                        <div className="price">
                            <h5 className='price-h5'>${productDetails.price}</h5>
                        </div>
                        <div className="desc">
                            <p className='desc-p'>{productDetails.description}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="countandcart">
                        {
                            productDetails.isStock ?
                                <>
                                    <button className='addcart' onClick={() => { user ? handleAddBasket(productDetails) : navigate("/login") }}>ADD TO CART</button>
                                </> :
                                <div className='outofstock'>
                                    <BsEmojiFrown />
                                    <h3 className='out-h3'>OUT OF STOCK</h3>
                                </div>
                        }
                    </div>
                    <hr />
                    <div className="categoriesandsku">
                        <div className="color">
                            <h6 className='skucat-h6'>COLOR: </h6>
                            <div className='color-div'>
                                <span style={{ backgroundColor: `${productDetails.color}` }} className='color-div-color'>
                                </span>
                            </div>
                        </div>
                        <div className="sku">
                            <h6 className='skucat-h6'>SKU: </h6>
                            <p className='skucat-p'>{productDetails.sku}</p>
                        </div>
                        <div className="categories">
                            <h6 className='skucat-h6'>CATEGORIES: </h6>
                            <p className='skucat-p'>{productDetails.categories}</p>
                        </div>
                        <div className="browse-wish">
                            <BiHeart />
                            <p className='browse-p' onClick={() => handleFav(productDetails)} >Browse wishlist</p>
                        </div>
                    </div>
                    <div className="socialmedias">
                        <ul>
                            <li>FACEBOOK</li>
                            <li>TWITTER</li>
                            <li>LINKEDIN</li>
                            <li>TUMBLR</li>
                            <li>GOOGLE+ </li>
                            <li>PINTEREST</li>
                            <li>MAIL</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default DetailsProduct