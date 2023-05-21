import React from 'react'
import './AddNewProduct.css'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { message } from 'antd'
function AddNewProduct() {
    const priceregex = /^[0-9.]+$/
    const CreateSchema = Yup.object().shape({
        img: Yup.string().required("Image url is required"),
        title: Yup.string().required("Title is required "),
        sku: Yup.string().required("Sku is required"),
        description: Yup.string().required("Description is required"),
        frame: Yup.string().required("Frame is required"),
        color: Yup.string().required("Color is required"),
        size: Yup.string().required("Size is required"),
        categories: Yup.string().required("Categories is required"),
        price: Yup.string().matches(priceregex, "Invalid price").required("Price is required")
    });


    const navigate = useNavigate()
    return (
        <div id='addnewproduct'>
            <div className="addnewproduct-form">
                <Formik
                    initialValues={{
                        img: "",
                        title: "",
                        color: "",
                        size: "",
                        sku: "",
                        categories: "",
                        description: "",
                        price: Number,
                        frame: "",
                        isSale: false,
                        isStock: false,
                        isBestSeller: false,
                        isNeew: false
                    }}
                    validationSchema={CreateSchema}
                    onSubmit={(values, { resetForm }) => {
                        let newProduct = {
                            img: values.img,
                            title: values.title,
                            color: values.color,
                            size: values.size,
                            sku: values.sku,
                            categories: values.categories,
                            description: values.description,
                            price: Number(values.price),
                            frame: values.frame,
                            isSale: values.isSale === "true" ? true : false,
                            isStock: values.isStock === "true" ? true : false,
                            isNeew: values.isNeew === "true" ? true : false,
                            isBestSeller: values.isBestSeller === "true" ? true : false
                        }
                        axios.post("http://localhost:4000/products",newProduct)
                            .then(res=>{
                                if(res.status===200){
                                    message.open({
                                        type:"success",
                                        content:`Create`,
                                        style:{
                                            color:"black"
                                        }

                                    })
                                    navigate("/admin/products")
                                }
                            })
                            .catch(err=>{
                                message.open({
                                    type:"error",
                                    content:`Error`,
                                    style:{
                                        color:"black"
                                    }

                                })
                            })
                    }}
                >

                    {({ errors }) => (
                        <Form>
                            <div className="firstline">
                                <label>
                                    <span>Image URL: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="img" placeholder="URL..." />
                                    {errors.img ? <p style={{ color: "red" }}>{errors.img}</p> : null}
                                </label>
                                <label>
                                    <span>Title: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="title" placeholder="TITLE..." />
                                    {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                                </label>
                                <label>
                                    <span>Sku: <span style={{ color: "red" }}>*</span></span>

                                    <Field name="sku" placeholder="SKU..." />
                                    {errors.sku ? <p style={{ color: "red" }}>{errors.sku}</p> : null}

                                </label>
                            </div>
                            <div className="secondline">
                                <label>
                                    <span>Description: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="description" placeholder="DESCRIPTION..." />
                                    {errors.description ? <p style={{ color: "red" }}>{errors.description}</p> : null}
                                </label>
                                <label>
                                    <span>Price: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="price" placeholder="PRICE..." />
                                    {errors.price ? <p style={{ color: "red" }}>{errors.price}</p> : null}
                                </label>
                                <label>
                                    <span>Frame: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="frame" placeholder="FRAME..." />
                                    {errors.frame ? <p style={{ color: "red" }}>{errors.frame}</p> : null}
                                </label>
                            </div>
                            <div className="thirdline">
                                <label>
                                    <span>Category: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="categories" as="select">
                                        <option value="Sweaters">Sweaters</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Sneakers">Sneakers</option>
                                        <option value="Uncategorized">Uncategorized</option>
                                        <option value="T-shirts">T-shirts</option>
                                        <option value="Outerwear">Outerwear</option>
                                    </Field>
                                    {errors.categories ? <p style={{ color: "red" }}>{errors.categories}</p> : null}

                                </label>
                                <label>
                                    <span>Color: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="color" as="select">
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="blue">Blue</option>
                                        <option value="black">Black</option>
                                        <option value="white">White</option>
                                    </Field>
                                    {errors.color ? <p style={{ color: "red" }}>{errors.color}</p> : null}
                                </label>
                                <label>
                                    <span>Size: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="size" as="select">
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                    </Field>
                                    {errors.size ? <p style={{ color: "red" }}>{errors.size}</p> : null}

                                </label>
                            </div>
                            <div className="lastline">
                                <div className="select-radio">
                                    SALE:
                                    <div className='select-label'>
                                        <label>
                                            <Field type="radio" name="isSale" value="true" />
                                            YES
                                        </label>
                                        <label>
                                            <Field type="radio" name="isSale" value="false" />
                                            NO
                                        </label>
                                    </div>
                                </div>
                                <div className="select-radio">
                                    STOCK:
                                    <div className='select-label'>
                                        <label>
                                            <Field type="radio" name="isStock" value="true" />
                                            YES
                                        </label>
                                        <label>
                                            <Field type="radio" name="isStock" value="false" />
                                            NO
                                        </label>
                                    </div>
                                </div>
                                <div className="select-radio">
                                    NEW:
                                    <div className='select-label'>
                                        <label>
                                            <Field type="radio" name="isNeew" value="true" />
                                            YES
                                        </label>
                                        <label>
                                            <Field type="radio" name="isNeew" value="false" />
                                            NO
                                        </label>
                                    </div>
                                </div>
                                <div className="select-radio">
                                    BESTSELLER:
                                    <div className='select-label'>
                                        <label>
                                            <Field type="radio" name="isBestSeller" value="true" />
                                            YES
                                        </label>
                                        <label>
                                            <Field type="radio" name="isBestSeller" value="false" />
                                            NO
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <button className='create-product' type='submit'>Create</button>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    )
}

export default AddNewProduct