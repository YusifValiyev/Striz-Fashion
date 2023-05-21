import { createContext, useContext, useState } from "react";

const Context = createContext()

export const AdminPanelProvider = ({children})=>{
    const [adminuserdetails,setAdminUserDetails] = useState("")
    const [adminproductdetails,setAdminProductUserDetails] = useState("")

    const data = {
        adminuserdetails,setAdminUserDetails,adminproductdetails,setAdminProductUserDetails
    }
    
    return(
        <Context.Provider value = {data}>{children}</Context.Provider>
    )
}

export const useAdminProvider =()=>useContext(Context)
