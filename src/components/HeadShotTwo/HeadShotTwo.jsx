import React from 'react';
import './headshottwo.css';


const HeadShotTwo = () => {
    return (
        <div className="head-shot-two">
           <div className="tech-collection">
                <h2 className="featured-heading">t.e.c.h. collection</h2>
                <p className="featured-stmnt">Trans element capable headwear - water and sweat repellent styles built to go harder than you do. </p>

                <div className="featured-btn-sec">
                <button className="featured-btn">SHOP NOW</button>
                </div>
           </div>
           <div>
               <img 
               className="tech-img"
               src="https://s3.us-east-2.amazonaws.com/melin-assets/tech.jpg"
               alt="tech-head-shot"
               />
           </div>
        </div>
    )
}

export default HeadShotTwo;