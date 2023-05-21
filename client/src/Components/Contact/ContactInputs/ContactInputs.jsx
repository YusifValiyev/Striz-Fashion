import React from 'react'
import './ContactInputs.css'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { Formik, Form, Field } from "formik"
import * as Yup from 'yup'
function ContactInputs() {
    const numberregex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?([0-9]{2}[-\s\.]?[0-9]{2})$/
    const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const ContactSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email().matches(emailregex, "Email is not valid").required("Email is required"),
        number: Yup.string().matches(numberregex, "Phone number is not valid").required("Number is required")
    });

    return (
        <div id='contactinputs'>
            <div className="contact-inputs-section">
                <div className="contactinputs-contact">
                    <div className="contactinputs-contact-header">
                        <h4 className='contact-header-h4'>WE’D LOVE TO HEAR FROM YOU! GIVE US CALL, SEND US A MESSAGE? OR FIND US ON SOCIAL MEDIA.</h4>
                    </div>
                    <div className="contactinputs-contact-texts">
                        <div className="contactinputs-addressandopening">
                            <div className="contactinputs-address">
                                <h5 className='contactinputs-h5'>ADDRESS</h5>
                                <p className='contactinputs-p add-p'>12356 Glassford Street Glasgow G1 1UL New York, USA</p>
                            </div>
                            <div className="contactinputs-opening">
                                <h5 className='contactinputs-h5'>OPENING HOUR</h5>
                                <p className='contactinputs-p'>Mon – Fri: 8.00 – 18.00</p>
                                <p className='contactinputs-p'>Saturday: 9.00 – 19.00</p>
                                <p className='contactinputs-p'>Sunday: 9.00 – 20.00</p>
                            </div>
                        </div>
                        <div className="contactinputs-email">
                            <h5 className='contactinputs-h5'>EMAIL</h5>
                            <p className='contactinputs-p'>contact@example.com</p>
                        </div>
                        <div className="contactinputs-phonenumber">
                            <h5 className='contactinputs-h5'>PHONE NUMBER</h5>
                            <p className='contactinputs-p'>+844 123 456 78</p>
                        </div>
                        <div className="contactinputs-social">
                            <h5 className='contactinputs-h5'>SOCIAL</h5>
                            <p className='contactinputs-p fb'>Facebook</p>
                            <p className='contactinputs-p tw'>Twitter</p>
                            <p className='contactinputs-p ins'>Instagram</p>
                        </div>
                    </div>
                </div>
                <div className="contactinputs-inputs">
                    <div className="contactinputs-inputs-header">
                        <h4 className='contact-inputs-h4'>Sign Up</h4>
                        <p className='contact-inputs-p'>THE FOLLOWING INFO IS REQUIRED</p>
                    </div>
                    <div className="contactinputs-fields">
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                number: "",
                                content: "",
                            }}
                            validationSchema={ContactSchema}
                            onSubmit={(values,{resetForm}) => {
                                resetForm()
                            }
                            } 
                        >
                            {({ errors }) => (
                                <Form>
                                    <label>
                                        <p>Name <span>*</span></p>
                                        <Field name="name" />
                                        {errors.name ? <p style={{ color: "red" }}>{errors.name}</p> : null}
                                    </label>
                                    <label>
                                        <p>Email <span>*</span></p>
                                        <Field name="email" />
                                        {errors.email ? <p style={{ color: "red" }}>{errors.email}</p> : null}
                                    </label>
                                    <label>
                                        <p>Phone number <span>*</span></p>
                                        <Field name="number" />
                                        {errors.number ? <p style={{ color: "red" }}>{errors.number}</p> : null}
                                    </label>
                                    <label>
                                        <p>Content <span>*</span></p>
                                        <Field name="content" component="textarea" />
                                    </label>
                                    <button type='submit' className='contact-submit-btn'>SUBMIT <HiOutlineArrowSmRight /></button>
                                </Form>
                            )}

                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInputs