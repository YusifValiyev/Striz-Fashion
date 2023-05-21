import React, { useState } from 'react'
import './BuyCart.css'
import { Form, Formik, Field } from 'formik'
import axios from 'axios';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { empty} from '../../BasketSlice/BasketSlice';
import Swal from 'sweetalert2';
function BuyCart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const nameregex = /^[A-Za-z" "]+$/
    const cardnumberregex = /^(?:\d[ -]*?){16}$/
    const dateregex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/
    const cvvregex = /^[0-9]{3}$/
    const BuySchame = Yup.object().shape({
        name: Yup.string().matches(nameregex).required("Name is required"),
        date: Yup.string().matches(dateregex, "Date is not valid").required("Date is required"),
        cardnumber: Yup.string().matches(cardnumberregex, "Phone number is not valid").required("Cardnumber is required"),
        cvv: Yup.string().matches(cvvregex).required()
    });
    let user = JSON.parse(localStorage.getItem("user"));
    const [borderclass2, setBorderclass2] = useState(null)
    const [borderclass3, setBorderclass3] = useState(null)
    const [borderclass4, setBorderclass4] = useState(null)
    const [borderclass5, setBorderclass5] = useState(null)
    const [number, setNumber] = useState("XXXX XXXX XXXX XXXX")
    const [name, setName] = useState("NAME")
    const [date, setDate] = useState("XX/XX")

    return (
        <div id='buycart'>
            <div className="buycart-wrapper">
                <div className="credit-cart">
                    <img className='map' src="https://www.freeiconspng.com/thumbs/world-map-png/world-map-png-13.png" alt="" />
                    <div className="cart-visa">
                        <img src="https://seeklogo.com/images/C/Chip-logo-3C162A3B9B-seeklogo.com.png" alt="" />
                        <h3 className='visa'>VISA</h3>
                    </div>
                    <div className="cart-number">
                        <div className="cart-number-number">
                            <h3 className='number-example'>{number.length !== 0 ? number : "XXXX XXXX XXXX XXXX"}</h3>
                        </div>
                    </div>
                    <div className="cart-cvv-date">
                        <div className="cart-name">
                            <h3 className='name-example'>{name.length !== 0 ? name : "NAME"}</h3>
                        </div>
                        <div className="cvv-date">
                            <h4>{date.length !== 0 ? date : "XX/XX"}</h4>
                            <h4> &#183;&#183;&#183;</h4>
                        </div>
                    </div>
                </div>
                <div className="cart-inputs">
                    <Formik
                        initialValues={{
                            name: "",
                            cardnumber: "",
                            date: "",
                            cvv: ""

                        }}
                        validationSchema={BuySchame}
                        onSubmit={(values,{ resetForm }) => {
                            Swal.fire({
                                title: 'Are you sure?',
                                text: "You won't be able to revert this!",
                                icon: "question",
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes'
                              }).then((result) => {
                                if (result.isConfirmed) {
                                    let newuser = {
                                        _id: user._id,
                                        username: user.username,
                                        isAdmin: user.isAdmin,
                                        password: user.password,
                                        email: user.email,
                                        userCard: [...user.userCard, ...user.userCheckout],
                                        userCheckout: [],
                                        userWishList: user.userWishList
                                    }
                                    axios.put(`http://localhost:4000/users/${user._id}`, newuser)
                                    localStorage.setItem("user", JSON.stringify(newuser))
                                    dispatch(empty())
                                    resetForm()
                                  navigate("/")
                                }
                              })
                        }}
                    >
                        {({errors }) => (
                            <Form>
                                <Field onKeyUp={(e) => setName(e.target.value)} className={borderclass2} name="name" placeholder="NAME" />
                                {errors.name ? (setBorderclass2("borderred")) : (setBorderclass2(null))}
                                <Field onKeyUp={(e) => setNumber(e.target.value)} className={borderclass3} name="cardnumber" placeholder="XXXX-XXXX-XXXX-XXXX" type="text" />
                                {errors.cardnumber ? setBorderclass3("borderred") : setBorderclass3(null)}
                                <Field onKeyUp={(e) => setDate(e.target.value)} className={borderclass4} name="date" placeholder="XX/XX" />
                                {errors.date ? setBorderclass4("borderred") : setBorderclass4(null)}
                                <Field className={borderclass5} type="password" name="cvv" placeholder='CVV' />
                                {errors.cvv ? setBorderclass5("borderred") : setBorderclass5(null)}
                                <button type='submit'>BUY</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}


export default BuyCart