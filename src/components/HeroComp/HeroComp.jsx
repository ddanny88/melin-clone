import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const HeroComp = () => {
    return (
        <div>
           <Carousel 
            interval={ 3000 }
            stopOnHover={ false }
            showStatus={ false } 
            showThumbs= { false } 
            infiniteLoop={ true } 
            autoPlay={ true } 
            swipeable={ true }
           >
                <div>
                    <img src="https://s3.us-east-2.amazonaws.com/melin-assets/Desktop_Mantle_1_6c7eeca5-baba-4006-8880-adea0fc644c3_1400x.progressive.jpg" alt="first"/>
                   
                </div>
                <div>
                    <img src="https://s3.us-east-2.amazonaws.com/melin-assets/Desktop_Mantle_1_1400x.progressive.jpg" alt="second" />
                   
                </div>
            </Carousel>
        </div>
    )
}
export default HeroComp;


/**
 * React Responsive Carousel
 * https://www.npmjs.com/package/react-responsive-carousel
 * 
 */