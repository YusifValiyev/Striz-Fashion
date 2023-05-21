import { createContext, useContext, useState } from "react";


const Context = createContext()

export const ProductProvider = ({children})=>{
    const [products,setProducts] = useState([])
    const [favs,setFavs] = useState([])
    const [productDetails,setProductDetails] = useState("")
    const [sortproducts,setSortProducts] = useState([])
    const [checkout,setCheckOut] = useState([])

    const data = {
        products,setProducts,productDetails,setProductDetails,
        favs,setFavs,sortproducts,setSortProducts,checkout,setCheckOut,
    }
    return(
        <Context.Provider value={data}>{children}</Context.Provider>
    )
}

export const useProvider =()=>useContext(Context)