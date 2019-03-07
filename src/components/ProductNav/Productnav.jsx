import React, { Component } from 'react';
import'./productnav.css';

class Productnav extends Component {
    render() {
        return (
            <div className="product-nav">
                <div className="brand-list">
                    <p>shop</p>
                    <p>brand</p>
                </div>

                <div className="logo">
                    <img 
                    className="melin-logo"
                    src="https://s3.us-east-2.amazonaws.com/melin-assets/Header_Logo.png" alt="melin logo"
                    /> 
                </div>

                <div className="search">
                <span><i className="fa fa-search"></i></span>
                    <input 
                        className="nav-search"
                        type="text"
                        placeholder=" Search"
                    />
                </div>
            </div>
        );
    }
}

export default Productnav;