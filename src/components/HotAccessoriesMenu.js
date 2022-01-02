import React from 'react'
import { Link } from 'react-router-dom'
// import data from "../data/data.json"
import "../styles/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
    return (
        <div className='HotAccessoriesMenu'>
            <Link className='HotAccessoriesLink hover-underline-animation' to="/music">Music Store</Link>
            <Link className='HotAccessoriesLink hover-underline-animation' to="/smartDevice">Smart Devices</Link>
            <Link className='HotAccessoriesLink hover-underline-animation' to="/home">Home</Link>
            <Link className='HotAccessoriesLink hover-underline-animation' to="/lifestyle">Lifestyle</Link>
            <Link className='HotAccessoriesLink hover-underline-animation' to="/mobileAccessories">Mobile Accessories</Link>
        </div>
    )
}

export default HotAccessoriesMenu
