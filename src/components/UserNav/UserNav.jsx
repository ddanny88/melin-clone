import React, { Component } from 'react';
import './usernav.css';

class UserNav extends Component {
    render() {
        return (
            <div className="user-nav-container">
                <div className="info-slider">
                    <p>info slider</p>
                </div>
                <div className="user-info-container">
                   <p className="account"><i className="fas fa-user"></i>Account</p>
                   <p className="cart"><i className="fas fa-shopping-cart"></i>Cart (<span>0</span>)</p>
                </div>
            </div>
        );
    }
}

export default UserNav;