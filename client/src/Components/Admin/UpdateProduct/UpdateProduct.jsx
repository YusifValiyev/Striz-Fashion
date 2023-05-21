import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Formik,Form,Field} from 'formik'
import { message } from 'antd'
import "./UpdateProduct.css"
// import * as Yup from 'yup'
function UpdateProduct() {
  // const priceregex = /^[0-9.]+$/
  // const UpdateSchema = Yup.object().shape({
  //     img: Yup.string().required("Image url is required"),
  //     title: Yup.string().required("Title is required "),
  //     sku: Yup.string().required("Sku is required"),
  //     description: Yup.string().required("Description is required"),
  //     frame: Yup.string().required("Frame is required"),
  //     color: Yup.string().required("Color is required"),
  //     size: Yup.string().required("Size is required"),
  //     categories: Yup.string().required("Categories is required"),
  //     price: Yup.string().matches(priceregex, "Invalid price").required("Price is required")
  // });
  const [updateproduct,setUpdateProduct] = useState("")
  const [imgg,setImg] = useState("")
  const [titlee,setTitle] = useState("")
  const [colorr,setColor] = useState("")
  const [sizee,setSize] = useState("")
  const [skuu,setSku] = useState("")
  const [descriptionn,setDescription] = useState("")
  const [categoryy,setCategory] = useState("")
  const [pricee,setPrice] = useState()
  const [framee,setFrame] = useState("")
  const [isSalee,setIsSale] = useState()
  const [isStockk,setIsStock] = useState()
  const [isNeww,setIsNew] = useState()
  const [isSellerr,setIsSeller] = useState()

  const {updateId} = useParams()
  const navigate = useNavigate()
  const getProductById =async()=>{
    await axios.get(`http://localhost:4000/products/${updateId}`)
      .then(res=>{
        setUpdateProduct(res.data);
        setImg(res.data.img);
        setTitle(res.data.title);
        setColor(res.data.color);
        setSize(res.data.size);
        setSku(res.data.sku);
        setDescription(res.data.description);
        setCategory(res.data.categories);
        setPrice(res.data.price);
        setFrame(res.data.frame);
        setIsSale(res.data.isSale);
        setIsStock(res.data.isStock);
        setIsNew(res.data.isNeew);
        setIsSeller(res.data.isBestSeller);
      }
    )
  }

  useEffect(()=>{
    getProductById()
  },[])
  return (
    <div id='updateproduct'>
      <div className="addnewproduct-form">
                <Formik
                initialValues={{
                  img:"",
                  title:"",
                  color:"",
                  size:"",
                  sku:"",
                  description:"",
                  categories:"",
                  price:"",
                  frame:"",
                  isSale:false,
                  isStock:false,
                  isNeew:false,
                  isBestSeller:false
                }}

                onSubmit={(values)=>{
                  let UpdateProduct={
                    img:imgg,
                    title:titlee,
                    color:colorr,
                    size:sizee,
                    sku:skuu,
                    description:descriptionn,
                    categories:categoryy,
                    price:pricee,
                    frame:framee,
                    isSale:isSalee==="true"?true:false,
                    isStock:isStockk==="true"?true:false,
                    isNeew:isNeww==="true"?true:false,
                    isBestSeller:isSellerr==="true"?true:false
                  }
                  axios.put(`http://localhost:4000/products/${updateId}`,UpdateProduct)
                    .then(res=>{
                      if(res.status===200){
                        message.open({
                            type:"success",
                            content:`Updated`,
                            style:{
                                color:"black"
                            }

                        })
                        navigate("/admin/products")
                      }
                    })

                }}
                >
                    {({ errors }) => (
                        <Form>
                            <div className="firstline">
                                <label>
                                    <span>Image URL: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="img" placeholder="URL..." value={imgg} onChange={(e)=>setImg(e.target.value)}  />
                                    {errors.img ? <p style={{ color: "red" }}>{errors.img}</p> : null}
                                </label>
                                <label>
                                    <span>Title: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="title" placeholder="TITLE..." value={titlee} onChange={(e)=>setTitle(e.target.value)}/>
                                    {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                                </label>
                                <label>
                                    <span>Sku: <span style={{ color: "red" }}>*</span></span>

                                    <Field name="sku" placeholder="SKU..." value={skuu} onChange={(e)=>setSku(e.target.value)} />
                                    {errors.sku ? <p style={{ color: "red" }}>{errors.sku}</p> : null}

                                </label>
                            </div>
                            <div className="secondline">
                                <label>
                                    <span>Description: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="description" placeholder="DESCRIPTION..." value={descriptionn} onChange={(e)=>setDescription(e.target.value)} />
                                    {errors.description ? <p style={{ color: "red" }}>{errors.description}</p> : null}
                                </label>
                                <label>
                                    <span>Price: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="price" placeholder="PRICE..." value={pricee} onChange={(e)=>setPrice(e.target.value)} />
                                    {errors.price ? <p style={{ color: "red" }}>{errors.price}</p> : null}
                                </label>
                                <label>
                                    <span>Frame: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="frame" placeholder="FRAME..." value={framee} onChange={(e)=>setFrame(e.target.value)} />
                                    {errors.frame ? <p style={{ color: "red" }}>{errors.frame}</p> : null}
                                </label>
                            </div>
                            <div className="thirdline">
                                <label>
                                    <span>Category: <span style={{ color: "red" }}>*</span></span>
                                    <Field name="categories" as="select" value={categoryy} onChange={(e)=>setCategory(e.target.value)}>
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
                                    <Field name="color" as="select" value={colorr} onChange={(e)=>setColor(e.target.value)}>
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
                                    <Field name="size" as="select" value={sizee} onChange={(e)=>setSize(e.target.value)}>
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
                                            <Field type="radio" name="isSale" value='true' onClick={(e)=>setIsSale(e.target.value)}/>
                                            YES
                                        </label>
                                        <label>
                                            <Field type="radio" name="isSale" value="false" onClick={(e)=>setIsSale(e.target.value)}/>
                                            NO
                                        </label>
                                    </div>
                                </div>
                                <div className="select-radio">
                                    STOCK:
                                    <div className='select-label'>
                                        <label>
                                            <Field type="radio" name="isStock" value="true" onClick={(e)=>setIsStock(e.target.value)} />
                                            YES
                                        </label>
                                        <label>
                                            <Field type="radio" name="isStock" value="false" onClick={(e)=>setIsStock(e.target.value)} />
                                            NO
                                        </label>
                                    </div>
                                </div>
                                <div className="select-radio">
                                    NEW:
                                    <div className='select-label'>
                                        <label>
                                            <Field type="radio" name="isNeew" value="true" onClick={(e)=>setIsNew(e.target.value)} />
                                            YES
                                        </label>
                                        <label>
                                            <Field type="radio" name="isNeew" value="false" onClick={(e)=>setIsNew(e.target.value)} />
                                            NO
                                        </label>
                                    </div>
                                </div>
                                <div className="select-radio">
                                    BESTSELLER:
                                    <div className='select-label'>
                                        <label>
                                            <Field type="radio" name="isBestSeller" value="true" onClick={(e)=>setIsSeller(e.target.value)} />
                                            YES
                                        </label>
                                        <label>
                                            <Field type="radio" name="isBestSeller" value="false" onClick={(e)=>setIsSeller(e.target.value)} />
                                            NO
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <button className='create-product' type='submit'>Update</button>
                        </Form>
                    )}

                </Formik>
            </div>
    </div>
  )
}

export default UpdateProduct