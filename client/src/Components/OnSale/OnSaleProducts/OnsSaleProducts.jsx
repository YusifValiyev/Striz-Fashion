import React from 'react'
import { useProvider } from '../../../Context/ProductContext'
import ProducstCard from '../../ProductsCard/ProducstCard'
import './OnSaleProduct.css'
function OnsSaleProducts() {
    const {products} = useProvider()
  return (
    <div id='onsaleproducts'>
        <div className="onsaleproducts-header">
            <h4 className='onsale-header-h4'>FOR MEN<span></span></h4>
        </div>
        <div className="onsaleproducts-cards">
            {
                products.filter(x=>x.isSale).map(elem=>(
                    <ProducstCard key={elem._id} element={elem}/>
                ))
            }
        </div>
    </div>
  )
}

export default OnsSaleProducts