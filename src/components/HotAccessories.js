import React from 'react'
import HotAccessoriesCard from './HotAccessoriesCard.js'
import "../styles/HotAccessories.css"
// import HotItemCard from "./components/HotItemCard.js"

const HotAccessories = ({music,musicCover,smartDevice,smartDevicesCover,home,homeCover,lifestyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover}) => {
    return (
        <div className='HotAccessories'>
        <div>
            <img src={musicCover || smartDevicesCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt="cover" />
        </div>
        {/* 2nd------------- div*/}
        <div>
            {music && music.map((item,index)=>(
             <HotAccessoriesCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
            ))}

            {smartDevice && smartDevice.map((item,index)=>(
             <HotAccessoriesCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
            ))}

            {home && home.map((item,index)=>(
             <HotAccessoriesCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
            ))}

            {lifestyle && lifestyle.map((item,index)=>(
             <HotAccessoriesCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
            ))}

            {mobileAccessories && mobileAccessories.map((item,index)=>(
             <HotAccessoriesCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index}  />
            ))}

            <HotAccessoriesCard image="	https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg
"/>
        </div>
        </div>
    )
}

export default HotAccessories

