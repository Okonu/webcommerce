import React from 'react'
import {Link} from 'react-router-dom';
import './product.css';

export default function ImageSlider() {
    return (
        
        <div class="hero-image">
            <div class="hero-text">
            <p>we have special offers just for you</p>
            <button><Link to="/">Start shopping</Link></button>
            </div>
         </div>
    
    
    
    //<div className="homebanner">
    //   <Carousel autoFocus={true} autoPlay={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
    //          <div key="content-0" className="my-slide primary">
                 
    //              <img src="https://meuresiduo.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-18-at-11.02.48-1024x536.jpeg"/>
    //          </div>
    //          <div key="content-1" className="my-slide secondary">
    //              <img src="https://meuresiduo.com/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-18-at-11.02.48-1024x536.jpeg" />
    //          </div>
    //          <div key="content-2" className="my-slide content">
    //              <img src="https://www.switch-asia.eu/site/assets/files/2109/resizes/zero-waste.jpg" width="100%" height="100%"/>
    //          </div>
    //          <div key="content-3" className="my-slide content">
    //              <img src="https://www.switch-asia.eu/site/assets/files/2109/resizes/zero-waste.jpg" />
    //          </div>
    //          <div key="content-4" className="my-slide content">
    //              <p>
    //                  <img src="https://www.switch-asia.eu/site/assets/files/2109/resizes/zero-waste.jpg" />
    //              </p>
    //          </div>
    //          <div key="content-5" className="my-slide content">
    //              <img  src="https://www.waste360.com/sites/waste360.com/files/zero-waste.jpg" />
    //          </div>
    //          <div key="content-6" className="my-slide content">
    //              <img src="https://www.waste360.com/sites/waste360.com/files/zero-waste.jpg" width="640" height="360" />
    //          </div>
    //          <div key="content-11" className="my-slide content">
    //                  <img src="https://images.placetoplug.com/post-image-images/65d73be3-b6f5-41e8-a1bf-eb7472c37e08/original.jpg"/>
    //          </div>
    //</Carousel>
    //  <Carousel>
    //            <div>
    //                <img src="https://www.waste360.com/sites/waste360.com/files/zero-waste.jpg" />
    //                <p className="legend">Legend 1</p>
    //            </div>
    //            <div>
    //                <img src="https://tunza.eco-generation.org/file/ArcticGarden_infographic_English_-01.jpg" />
    //                <p className="legend">Legend 2</p>
    //            </div>
    //            <div>
    //                <img src="https://tunza.eco-generation.org/file/ArcticGarden_infographic_English_-01.jpg" />
    //                <p className="legend">Legend 3</p>
    //            </div>
    //        </Carousel>
    //</div>
  )
}
