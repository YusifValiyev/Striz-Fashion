import React from 'react'
import { BsCartX } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBasket,increase,decrease} from '../../BasketSlice/BasketSlice';
import './CartProducts.css'
function CartProducts() {
    let user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const basket_table = useSelector(state=>state.basket.value)
    const handleDelete=(data)=>{
        dispatch(deleteBasket(data))
    }
    const handleIncrease=(data)=>{
        dispatch(increase(data))
    }
    const handleDecrease=(data)=>{
        dispatch(decrease(data))

    }
    let total=0;
    user?.userCheckout?.forEach(element => {
        try{
            total+=(element.counter)*(element.price);
            total.toFixed(2)
        }catch(err){
            console.log(err);
        }
    });
    return (
        <div id='cartproducts'>
            <div className="cartproducts-list">
                {
                    user && user?.userCheckout?.length !== 0 ?
                        <div className='checkout-list'>
                            <div className='checkout-list-elements'>
                                {
                                    user?.userCheckout?.map(element => (
                                        <div key={element._id} className="checkout-element-products">
                                            <div className='img-texts'>
                                                <div className="checkout-element-image">
                                                    <img src={element.img} alt="" />
                                                </div>
                                                <div className="checkout-element-texts">
                                                    <h4 className='checkout-element-h4'>{element.title}</h4>
                                                    <p className='checkout-element-p'>${element.price}</p>
                                                </div>
                                            </div>
                                            <div className="checkout-element-cart">
                                                <div className='incdec'>
                                                    <span onClick={()=>{handleDecrease(element)}}>-</span>
                                                    <p>{element.counter}</p>
                                                    <span onClick={()=>{handleIncrease(element)}}>+</span>
                                                </div>
                                                <p className='rmv-checkout' onClick={()=>handleDelete(element)}>
                                                    Remove From Checkout
                                                    <span></span>
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='checkout-total'>
                                <div className="total-header">
                                    <h4 className="total-header-h4">CHECKOUT</h4>
                                    <hr />
                                </div>
                                <div className="total-main">
                                    {
                                        user?.userCheckout?.map(elem => (
                                            <div key={elem._id} className="total-main-product">
                                                <h5 className='total-main-h5'>{elem.title}</h5>
                                                <p className='total-main-p'> {elem.counter} X ${elem.price}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="total-header">
                                    <h4 className="total-header-h4">TOTAL</h4>
                                    <hr />
                                </div>
                                <div className='total-price'>
                                    <h5 className="total-main-h5">
                                        TOTAL:
                                    </h5>
                                    <p className='total-main-p'>
                                        ${total}
                                    </p>
                                </div>
                                <button className='btn-checkout' onClick={()=>{navigate('/buy')}}>CHECKOUT</button>
                                <div className='check-accept'>
                                    <h4 className='accept-h4'>
                                        WE ACCEPT:
                                    </h4>
                                    <img src="https://demo2.wpopal.com/striz/wp-content/uploads/2018/12/payment.png" alt="" />
                                </div>
                            </div>

                        </div>
                        :
                        <div className='empty-cart'>
                            <BsCartX />
                            <h3 className='empty-cart-text'>Your cart is currently empty</h3>
                            <button className='goshop' onClick={() => { navigate("/") }}>RETURN TO SHOP</button>
                        </div>
                }
            </div>
        </div>
    )
}

export default CartProducts