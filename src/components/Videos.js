import React from 'react'
import VideosCard from "./videosCard.js"
import "../styles/Videos.css"

const Videos = ({videos}) => {
    return (
        <div className='Videos'>
            {videos.map((item,index)=>(
                <VideosCard key={item.image} name={item.name} image={item.image} index={index}/>
            ))}
        </div>
    )
}

export default Videos
