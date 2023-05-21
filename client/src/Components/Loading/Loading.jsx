import React from 'react'
import './Loading.css'
import HashLoader from "react-spinners/HashLoader";
function Loading() {
return (
    <div className='loader'>
        <HashLoader
            size={40}
            color={"#000000"}
        />
    </div>
)
}

export default Loading