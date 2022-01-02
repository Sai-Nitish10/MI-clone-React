import PreNavbar from './components/PreNavbar';
import './App.css';
import Navbar from './components/Navbar.js'
import Slider from "./components/Slider.js"
import {  BrowserRouter as Router} from "react-router-dom"
import {Route,Routes} from "react-router-dom"
// import {Switch} from "react-router-dom"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import HeadingLines from "./components/HeadingLines.js"
import StarProducts from "./components/StarProducts.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
// import NavOptions from "./components/NavOptions.js"
import NavOptions2 from './components/NavOptions2.js';

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Routes>
      <Route exact path="/miphones" element={<NavOptions2 miPhones={data.miPhones}/>}></Route>
      <Route exact path="/redmiphones" element={<NavOptions2 miPhones={data.redmiPhones}/>}></Route>
      <Route exact path="/tv" element={<NavOptions2 miPhones={data.tv}/>}></Route>
      <Route exact path="/laptops" element={<NavOptions2 miPhones={data.laptop}/>}></Route>
      <Route exact path="/lifestyle" element={<NavOptions2 miPhones={data.fitnessAndLifeStyle}/>}></Route>
      <Route exact path="/home" element={<NavOptions2 miPhones={data.home}/>}></Route>
      <Route exact path="/audio" element={<NavOptions2 miPhones={data.audio}/>}></Route>
      <Route exact path="/accessories" element={<NavOptions2 miPhones={data.accessories}/>}></Route>
      </Routes>
      <Slider start={data.banner.start}/>
      <Offers offers={data.offer}/>
      <HeadingLines text="STAR PRODUCTS"/>
      <StarProducts starproduct={data.starProduct}/>
      <HeadingLines text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path="/" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />}>
          </Route>

          <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />}>
          </Route>

          <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDevicesCover={data.hotAccessoriesCover.smartDevice}  />}>
          </Route>

          <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}>
          </Route>

          <Route exact path="/lifestyle" element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}  />}>
          </Route>

          <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}>
          </Route>
      </Routes>
      <HeadingLines text="PRODUCT REVIEWS"/>
      <ProductReviews productReviews={data.productReviews}/>
      <HeadingLines text="VIDEOS"/>
      <Videos videos={data.videos}/>
      <HeadingLines text="IN THE PRESS"/>
      <Banner banner={data.banner.end}/>
      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
