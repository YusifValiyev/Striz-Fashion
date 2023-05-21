import React from 'react'
import './Pagination.css'
function Pagination({totalProducts,postPerPage,setCurrentPage,currentPage}) {
    let pages = []
    for(let i=1;i<=Math.ceil(totalProducts/postPerPage);i++){
        pages.push(i)
    }
    const handlePage=(element) =>{
            setCurrentPage(element)
    }
    
  return (
    <div id='pagination'>
        {
            pages.map((element,index)=>(
                <button key={index}  onClick={()=>handlePage(element)} className=
                {
                    element===currentPage ? 'active-btns':'pag-btns'
                }>{element}</button>
            ))
        }

    </div>
  )
}

export default Pagination