import React from 'react'
import "../styles/ProductReviewsCard.css"

const ProductReviewsCard = ({review,name,price,image,index}) => {
    return (
        <div className='ProductReviewsCard'>
            <img src={image} alt={`${index} reviewCard`} />
            {/* <div className='content'> */}
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
            {/* </div> */}
        </div>
    )
}

export default ProductReviewsCard
