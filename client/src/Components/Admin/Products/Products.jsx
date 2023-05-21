import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Products.css'
import Swal from 'sweetalert2'
function ProductsList() {
    const navigate = useNavigate()
    const [search,setSearch] = useState("")
    const [productslist,setProductsList] = useState([])
    const getProducts = async()=>{
        let response = await axios.get("http://localhost:4000/products")
        setProductsList(await response.data)
    }
    useEffect(()=>{
        getProducts()
    },[])

    const handleDelete=async(id)=>{
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
                await axios.delete(`http://localhost:4000/products/${id}`)
                .then(res=>{
                    if(res.status===200){
                        setProductsList(productslist.filter(x=>x._id!==id))
                    }
                }
                ).catch(err=>{
                    alert(err);
                })
              Swal.fire(
                    {
                        background:"#0B2744",
                        icon:"success",
                        title:"'Your product has been deleted.'"
                    }
              )
            }
          })
    }
    const handleProductDetail=(id)=>{
        navigate(`/admin/products/${id}`)
    }

    const handleUpdate=(id)=>{
        navigate(`/admin/products/update/${id}`)
    }
  return (
    <div id='productslist'>
        <div className='addandsearch'>
            <button className='addnewproduct' onClick={()=>navigate("/admin/products/add")}>Add New Product</button>
            <input onKeyUp={(e)=>setSearch(e.target.value)} className='searchinp' type="text" placeholder='Search...' />
        </div>
        <table>
            <thead>
                <tr>
                    <th>TITLE</th>
                    <th>CATEGORY</th>
                    <th>SKU</th>
                    <th>PRICE</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {
                    productslist.filter(x=>x.sku.toLowerCase().includes(search.toLowerCase())).map(element=>(
                        <tr key={element._id}>
                            <td>{element.title}</td>
                            <td>{element.categories}</td>
                            <td>{element.sku}</td>
                            <td>{element.price}</td>
                            <td className='settings-btns'>
                                <button className='dlt-btn' onClick={()=>handleDelete(element._id)}>DELETE</button>
                                <button className='upd-btn' onClick={()=>handleUpdate(element._id)}>UPDATE</button>
                                <button className='dtls-btn' onClick={()=>handleProductDetail(element._id)}>DETAILS</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductsList