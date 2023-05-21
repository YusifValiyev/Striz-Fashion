import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik'
import { useNavigate } from 'react-router-dom'
import {message } from "antd";
import './LoginSignup.css'
import axios from 'axios'
import * as Yup from 'yup'
function LoginSignup() {
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email().matches(emailregex, "Email is not valid").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });
    const RegisterSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email().matches(emailregex, "Email is not valid").required("Email is required"),
        password: Yup.string().required("Password is required"),
    });
    const [rtClass, setRtClass] = useState(null)
    const [back, setBack] = useState(null)
    const [borderclass, setBorderclass] = useState(null)
    const [borderclass2, setBorderclass2] = useState(null)
    const [borderclass3, setBorderclass3] = useState(null)
    const [borderclass4, setBorderclass4] = useState(null)
    const [borderclass5, setBorderclass5] = useState(null)
    const [user,setUser] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:4000/users")
        .then(res=>{
            setUser(res.data)
        })
    },[])

    return (
        <div id='loginsignup' className={back}>
            <div className={`loginsignup-card ${rtClass}`}>
                <div className="login">
                    <h4 className='login-h4'>LOGIN</h4>
                    <Formik
                        initialValues={{
                            email: "",
                            password: ""
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { resetForm }) => {
                            axios.post("http://localhost:4000/auth/login",
                                {
                                    email: values.email,
                                    password: values.password
                                }
                            )
                                .then((res) => {
                                    if (res.status === 200) {
                                        user.forEach(elem=>{
                                            if(elem.email===res.data.data.email){
                                                message.open({
                                                    type:"success",
                                                    content:`Welcome ${elem.username}`,
                                                    style:{
                                                        color:"black"
                                                    }

                                                })
                                                localStorage.setItem("user",JSON.stringify(elem))
                                            }
                                            setTimeout(()=>{
                                                navigate("/")
                                                window.location.reload()
                                            },1300)

                                        })

                                    }
                                })
                                .catch(error => {
                                    message.open({
                                        type:"error",
                                        content:`Email or password wrong`,
                                        style:{
                                            color:"black"
                                        }

                                    })
                                })
                        }}
                    >
                        {({ errors }) => (
                            <Form>
                                <label>
                                    <Field className={borderclass} name="email" placeholder="Email..." autocomplete="off" />
                                    {errors.email ? setBorderclass("borderred") : setBorderclass(null)}
                                </label>
                                <label>
                                    <Field className={borderclass2} type="password" name="password" placeholder='Password...' />
                                    {errors.password ? setBorderclass2("borderred") : setBorderclass2(null)}
                                </label>
                                <button type='submit' className='login-btn'>LOGIN</button>
                            </Form>
                        )}

                    </Formik>
                    <p className='login-p' onClick={() => { setRtClass("rotate"); setBack("create-back") }}>Create an account <span></span></p>
                </div>
                <div className="signup">
                    <h4 className='signup-h4'>SIGNUP</h4>
                    <Formik
                        initialValues={{
                            username: "",
                            email: "",
                            password: ""
                        }}
                        validationSchema={RegisterSchema}
                        onSubmit={(values, { resetForm }) => {
                            axios.post("http://localhost:4000/auth/register",
                                {
                                    username: values.username,
                                    email: values.email,
                                    password: values.password,
                                }
                            )
                                .then(res => {
                                    if (res.status === 200) {
                                        message.success("Success")
                                        setTimeout(()=>{
                                            window.location.reload()
                                        },1000)
                                    }
                                })
                                .catch(err => {
                                    throw (err.response.data.message)
                                })
                        }}
                    >
                        {({ errors }) => (
                            <Form>
                                <label>
                                    <Field className={borderclass3} name="username" placeholder="Username..." autocomplete="off" />
                                    {errors.username ? setBorderclass3("borderred") : setBorderclass3(null)}

                                </label>
                                <label>
                                    <Field className={borderclass4} type="email" name="email" placeholder='Email...' autocomplete="off" />
                                    {errors.email ? setBorderclass4("borderred") : setBorderclass4(null)}
                                </label>
                                <label>
                                    <Field className={borderclass5} type="password" name="password" placeholder='Password...' />
                                    {errors.password ? setBorderclass5("borderred") : setBorderclass5(null)}
                                </label>
                                <button type='submit' className='signup-btn'>SIGNUP</button>
                            </Form>
                        )}

                    </Formik>
                    <p className='signup-p' onClick={() => { setRtClass(null); setBack(null) }}>Already have an account?<span></span></p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup