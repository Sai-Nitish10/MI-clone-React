import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Banner.css"

const Banner = ({banner}) => {
    return (
        <Carousel fade className='banner'>
            {banner.map((item)=>(
                <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={item.image}
                        alt="First slide"
                    />
                    <Carousel.Caption className='bannercap'>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.source}</p>
                        <u>Read More</u>
                    </Carousel.Caption>
            </Carousel.Item>
                ))}
        </Carousel>
    )
}

export default Banner
