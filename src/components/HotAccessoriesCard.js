import React from 'react'
import "../styles/HotAccessoriesCard.css"

const HotAccessoriesCard = ({image,index,name,price}) => {
    return (
        <div className='HotAccessoriesCard'>
            <img src={image} alt={`${index} product`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )
}

export default HotAccessoriesCard
