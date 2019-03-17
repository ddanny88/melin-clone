import React from 'react';
import  './headshotone.css';


const HeadShotOne = () => {
    return (
        <div className="head-shot-one">
           <div>
               <img 
               className="trenches-img"
               src="https://s3.us-east-2.amazonaws.com/melin-assets/websiteimagetrenchesspaceblack_1600x.jpg" alt="head-shot-one"
               />
           </div>
           <div className="trenches-intro">
                <h2 className="featured-heading">Introducing trenches in space black</h2>
                <p className="featured-stmnt">Our most popular flat bill style with in a brand new colorway. Constructed with an anti-microbial sweatband, sweat-wicking interior lining, and a lightweight perforated crown for breathability. Trenches is designed to perform.</p>

                <div className="featured-btn-sec">
                <button className="featured-btn">SHOP NOW</button>
                </div>
           </div>
        </div>
    )
}

export default HeadShotOne;