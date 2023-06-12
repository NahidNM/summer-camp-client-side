import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// import img1 from '../../../../public/Banner/1.jpg'
// import img2 from '../../../../public/Banner/2.jpg'
// import img3 from '../../../../public/Banner/3.jpg'
// import img4 from '../../../../public/Banner/4.jpg'
// import img5 from '../../../../public/Banner/5.jpg'
// import img6 from '../../../../public/Banner/6.jpg'
 import img1 from '../../../../public/Banner/658991.webp'
 import img2 from '../../../../public/Banner/images.jpeg'
 import img3 from '../../../../public/Banner/FikfgS.webp'
import img4 from '../../../../public/Banner/basketball-hd.jpg'
import img5 from '../../../../public/Banner/hd-background-olympic-swimming-sports-hd-background-wallpaper-preview.jpg'



const Banner = () => {
    return (
        <div className="pt-20 text-center">
           {/* <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />                   
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />                   
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel>  */}
            
            <div>
            <div className="w-full carousel">
  <div id="slide1" className="relative w-full carousel-item">
    <img src={img1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="relative w-full carousel-item">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="relative w-full carousel-item">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="relative w-full carousel-item">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide5" className="relative w-full carousel-item">
    <img src={img5} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
        </div>
        </div>
    );
};

export default Banner;