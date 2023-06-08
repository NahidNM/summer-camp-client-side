import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../public/Banner/1.jpg'
import img2 from '../../../../public/Banner/2.jpg'
import img3 from '../../../../public/Banner/3.jpg'
import img4 from '../../../../public/Banner/4.jpg'
import img5 from '../../../../public/Banner/5.jpg'
import img6 from '../../../../public/Banner/6.jpg'

const Banner = () => {
    return (
        <div className="text-center pt-20">
           <Carousel>
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
            </Carousel> 
        </div>
    );
};

export default Banner;