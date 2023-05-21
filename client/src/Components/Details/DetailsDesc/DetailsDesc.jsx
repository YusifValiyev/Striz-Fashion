import React, { useState } from 'react'
import { useProvider } from '../../../Context/ProductContext'
import './DetailsDesc.css'
function DetailsDesc() {
    const { productDetails } = useProvider()
    const [activeToggle,setActiveToggle] = useState(1)
  return (
   <>
    <div id='detailsdesc'>
        <div className="detaildesc-headers">
            <h4 className='detaildesc-headers-h4' onClick={()=>setActiveToggle(1)}>DESCRIPTION <span className={activeToggle===1? 'activetabs':null}></span></h4>
            <h4 className='detaildesc-headers-h4' onClick={()=>setActiveToggle(2)}>ADDITIONAL INFORMATION <span className={activeToggle===2? 'activetabs':null}></span></h4>
            <h4 className='detaildesc-headers-h4' onClick={()=>setActiveToggle(3)}>{'REVIEWS(0)'} <span className={activeToggle===3? 'activetabs':null}></span></h4>
        </div>
        <div className="detaildesc-desc">
            {
                activeToggle===1?
                <div className="detaildesc-description">
                    <p className="detaildesc-description-p">
                        {productDetails.description}
                    </p>
                </div>:
                null
            }
            {
                activeToggle===2?
                <div className='detaildesc-addinfo'>
                    <table>
                        <tbody>
                            <tr>
                                <th>Handle height (ground to handle)</th>
                                <td>37-45″</td>
                            </tr>
                            <tr>
                                <th>Width</th>
                                <td>24″</td>
                            </tr>
                            <tr>
                                <th>Wheels</th>
                                <td>12″ air / wide track slick tread</td>
                            </tr>
                            <tr>
                                <th>Seat back height</th>
                                <td>21.5″</td>
                            </tr>
                            <tr>
                                <th>Head room (inside canopy)</th>
                                <td>25″</td>
                            </tr>
                            <tr>
                                <th>Weight Capacity</th>
                                <td>60 LBS</td>
                            </tr>
                            <tr>
                                <th>Weight (w/o wheels)</th>
                                <td>20 LBS</td>
                            </tr>
                            <tr>
                                <th>Folded (w/o wheels)</th>
                                <td>32.5″L x 18.5″W x 16.5″H</td>
                            </tr>
                            <tr>
                                <th>Door Pass Through</th>
                                <td>24</td>
                            </tr>
                            <tr>
                                <th>Frame</th>
                                <td>{productDetails.frame}</td>
                            </tr>
                            <tr>
                                <th>Stand Up</th>
                                <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                :null
            }
            {
                activeToggle===3?
                <div className='detaildesc-reviews'>
                    <div className='reviews'>
                        <p className='reviews-p'>There are no reviews yet.</p>
                    </div>
                </div>
                :null
            }
        </div>
    </div>
    <hr />
    </>
  )
}

export default DetailsDesc