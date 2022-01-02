import React from 'react'
import "../styles/HeadingLines.css"

const HeadingLines = ({text}) => {
    return (
        <div className='heading'>
            <div></div>
            <p>{text}</p>
            <div></div>
        </div>
    )
}

export default HeadingLines
