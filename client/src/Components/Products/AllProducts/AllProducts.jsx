import React, { useEffect, useState } from 'react'
import { useProvider } from '../../../Context/ProductContext'
import './AllProducts.css'
import axios from 'axios'
import Slider from '@mui/material/Slider';
import ProducstCard from '../../ProductsCard/ProducstCard'
import Pagination from '../../Pagination/Pagination';
import { HiOutlineX } from 'react-icons/hi'
function AllProducts() {
    //Filter Products
    const { products, setProducts } = useProvider()
    const { sortproducts, setSortProducts } = useProvider()

    const [filterproducts, setFilterProducts] = useState([])
    const [display, setDisplay] = useState('none')
    const [minn, setMin] = useState(90)
    const [maxx, setMax] = useState(200)
    const [category, setCategory] = useState(null)
    const [color, setColor] = useState(null)
    const [size, setSize] = useState(null)
    const [filterprice, setFilterPrice] = useState(0);

    //GEt Products From API
    const getProductsFromApi = async () => {
        let res = await axios.get("http://localhost:4000/products")
        setProducts(await res.data)
        setSortProducts(await res.data)
    }
    useEffect(() => {
        getProductsFromApi()
    },[])

    //Price Slider
    function valuetext(value) {
        return `${value}°C`;
    }
    let min, max;
    const [value, setValue] = React.useState([90, 200]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setMin(min)
        setMax(max)
    }
    for (let i = 0; i < value.length; i++) {
        min = value[0]
        max = value[1]
    }

    useEffect(()=>{
        if (filterprice==0){
            setProducts([...sortproducts],sortproducts)
        }
        else if(filterprice==1){
            setProducts([...products].sort((a,b)=>a.price - b.price))
        }
        else if(filterprice==2){
            setProducts([...products].sort((a,b)=>b.price - a.price))
        }
    },[filterprice])

    useEffect(() => {
        setFilterProducts(products.filter(x => (
            (category ? x.categories === category : x) &&
            (x.price > minn && x.price < maxx) &&
            (size ? x.size === size : x) &&
            (color ? x.color === color : x)

        )))
    }, [products, minn, maxx, category, size, color])
    


    //Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(9)
    const lastposindex = currentPage * postPerPage
    const firstpostindex = lastposindex - postPerPage
    const currentPosts = filterproducts.slice(firstpostindex, lastposindex)


    //Delete Filters
    const handleClear = () => {
        setDisplay("none")
        setCategory(null)
        setValue([90, 200])
        setMin(90)
        setMax(200)
        setSize(null)
        setColor(null)
    }
    const handleCategory = () => {
        setCategory(null)
    }

    const handleSize = () => {
        setSize(null)
    }
    return (
        <div id='allproducts'>
            <div className="allproducts-filters">
                <div className="products-categories">
                    <h3 className='categories-h3'>
                        PRODUCT CATEGORIES
                    </h3>
                    <ul>
                        <li>
                            <div className='categs-head'>
                                <p className="categs-texts" onClick={() => { setCategory("Accessories"); setDisplay("block") }}>Accessories</p>
                                <p className="categs-number">({products.filter(x => x.categories === "Accessories").length})</p>
                            </div>
                        </li>
                        <hr />
                        <li>
                            <div className='categs-head'>
                                <p className="categs-texts" onClick={() => { setCategory("Outerwear"); setDisplay("block") }}>Outerwear</p>
                                <p className="categs-number">({products.filter(x => x.categories === "Outerwear").length})</p>

                            </div>
                        </li>
                        <hr />
                        <li>
                            <div className='categs-head'>
                                <p className="categs-texts" onClick={() => { setCategory("Sneakers");; setDisplay("block") }}>Sneakers</p>
                                <p className="categs-number">({products.filter(x => x.categories === "Sneakers").length})</p>

                            </div>
                        </li>
                        <hr />
                        <li>
                            <div className='categs-head'>
                                <p className="categs-texts" onClick={() => { setCategory("Sweaters"); setDisplay("block") }}>Sweaters</p>
                                <p className="categs-number">({products.filter(x => x.categories === "Sweaters").length})</p>

                            </div>
                        </li>
                        <hr />
                        <li>
                            <div className='categs-head'>
                                <p className="categs-texts" onClick={() => { setCategory("T-shirts"); setDisplay("block") }}>T-shirts</p>
                                <p className="categs-number">({products.filter(x => x.categories === "T-shirts").length})</p>

                            </div>
                        </li>
                        <hr />
                        <li>
                            <div className='categs-head'>
                                <p className="categs-texts" onClick={() => { setCategory("Uncategorized"); setDisplay("block") }}>Uncategorized</p>
                                <p className="categs-number">({products.filter(x => x.categories === "Uncategorized").length})</p>

                            </div>
                        </li>
                    </ul>
                </div>
                <div className='pricefilter'>
                    <h3 className='filter-h3'>FILTER BY PRICE</h3>
                    <Slider
                        className='range'
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        defaultValue={[90, 200]}
                        min={90}
                        max={200}
                        step={1}
                        color={'error'}
                    />
                    <p className='range-price'>
                        Price:
                        <span className='prices'>
                            <span>${minn}</span>
                            -
                            <span>${maxx}</span>

                        </span>
                    </p>
                </div>
                <hr />
                <div className="colorfilter">
                    <h3 className='colorfilter-h3'>FILTER BY COLOR</h3>
                    <ul>
                        <li>
                            <div className='color-head'>
                                <div className="color-texts" onClick={() => setColor("blue")}>
                                    <div className='color-texts-backdiv'>
                                        <div className='color-texts-frontdiv blue'>

                                        </div>
                                    </div>
                                    <p className='color-texts-color'>BLUE</p>
                                </div>
                                <p className="color-number">{products.filter(x => x.color === 'blue').length}</p>
                            </div>
                        </li>
                        <li>
                            <div className='color-head'>
                                <div className="color-texts" onClick={() => setColor("yellow")}>
                                    <div className='color-texts-backdiv'>
                                        <div className='color-texts-frontdiv yellow'>

                                        </div>
                                    </div>
                                    <p className='color-texts-color'>YELLOW</p>
                                </div>
                                <p className="color-number">{products.filter(x => x.color === 'yellow').length}</p>
                            </div>
                        </li>
                        <li>
                            <div className='color-head'>
                                <div className="color-texts" onClick={() => setColor("black")}>
                                    <div className='color-texts-backdiv'>
                                        <div className='color-texts-frontdiv black'>

                                        </div>
                                    </div>
                                    <p className='color-texts-color'>BLACK</p>
                                </div>
                                <p className="color-number">{products.filter(x => x.color === 'black').length}</p>
                            </div>
                        </li>
                        <li>
                            <div className='color-head'>
                                <div className="color-texts" onClick={() => setColor("white")}>
                                    <div className='color-texts-backdiv'>
                                        <div className='color-texts-frontdiv white'>

                                        </div>
                                    </div>
                                    <p className='color-texts-color'>WHITE</p>
                                </div>
                                <p className="color-number">{products.filter(x => x.color === 'white').length}</p>
                            </div>
                        </li>
                        <li>
                            <div className='color-head'>
                                <div className="color-texts" onClick={() => setColor("red")}>
                                    <div className='color-texts-backdiv'>
                                        <div className='color-texts-frontdiv red'>
                                        </div>
                                    </div>
                                    <p className='color-texts-color'>RED</p>
                                </div>
                                <p className="color-number">{products.filter(x => x.color === 'red').length}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="sizefilter">
                    <h3 className='sizefilter-h3'>FILTER BY SIZE</h3>
                    <ul>
                        <li>
                            <div className='sizefilter-filters'>
                                <div className="size-check" onClick={() => { setSize("XS"); setDisplay("block") }}>
                                    <span
                                    className={
                                        size==="XS"?
                                        "active-size":null
                                    }></span>

                                </div>
                                <p>XS</p>
                            </div>
                        </li>
                        <li>
                            <div className='sizefilter-filters'>
                                <div className="size-check" onClick={() => { setSize("S"); setDisplay("block") }}>
                                    <span
                                    className={
                                        size==="S"?
                                        "active-size":null
                                    }></span>
                                </div>
                                <p>S</p>
                            </div>
                        </li>
                        <li>
                            <div className='sizefilter-filters'>
                                <div className="size-check" onClick={() => { setSize("M"); setDisplay("block") }}>
                                    <span
                                    className={
                                        size==="M"?
                                        "active-size":null
                                    }></span>
                                </div>
                                <p>M</p>
                            </div>
                        </li>
                        <li>
                            <div className='sizefilter-filters'>
                                <div className="size-check" onClick={() => { setSize("L"); setDisplay("block") }}>
                                    <span
                                    className={
                                        size==="L"?
                                        "active-size":null
                                    }></span>
                                </div>
                                <p>L</p>
                            </div>
                        </li>
                        <li>
                            <div className='sizefilter-filters'>
                                <div className="size-check" onClick={() => { setSize("XL"); setDisplay("block") }}>
                                    <span
                                    className={
                                        size==="XL"?
                                        "active-size":null
                                    }></span>
                                </div>
                                <p>XL</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="allproducts-products">
                <hr />
                <div className='select-filters'>
                    <div className="selection">
                    <select onChange={(e)=>setFilterPrice(e.target.value)}  name="" id="">
                        <option value={0}  >Default sorting</option>
                        <option value={1}  >Low to high</option>
                        <option value={2}  >High to low</option>
                    </select>
                    </div>
                </div> 
                <hr />
                <div className="remove-filters">
                    <p className=
                        {
                            color ? "rmv-txt" : "hidden"
                        } onClick={() => { setColor(null) }}>{color} <HiOutlineX /></p>

                    <p className=
                        {
                            minn !== 90 ? "rmv-txt" : "hidden"
                        } onClick={() => { setMin(90); setValue([90, maxx]) }}>Min:{minn} <HiOutlineX /></p>
                    <p className=
                        {
                            maxx !== 200 ? "rmv-txt" : "hidden"
                        } onClick={() => { setMax(200); setValue([minn, 200]) }}>Max:{maxx} <HiOutlineX /></p>
                    <p className=
                        {
                            category ? "rmv-txt" : "hidden"
                        } onClick={handleCategory}>{category}<HiOutlineX /></p>
                    <p className=
                        {
                            size ? "rmv-txt" : 'hidden'
                        } onClick={handleSize}>{size} <HiOutlineX /></p>
                    <p className='clr-txt' onClick={handleClear} style={{ display: `${display}` }}>Clear filters</p>
                </div>
                <div className='prod'>
                    {
                        currentPosts.map(elem => (
                            <ProducstCard key={elem._id} element={elem} />
                        ))
                    }
                </div>
                <Pagination totalProducts={filterproducts.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} firstpostindex={firstpostindex} lastposindex={lastposindex} />
            </div>
        </div>
    )
}


export default AllProducts