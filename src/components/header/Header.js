import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../logo.svg';
class Header extends Component{
    // constructor(){}

    render(){
        return (
            <div className="header">
               <div className="navbarcustom m-v-20">

                 <div className="firstPart">
                 
                 <Link to="/">
                  <img src={logo}></img>
                 </Link>
                 
                  <h1 className="heading-size">Products</h1>
                 </div>

                 <div className="secondPart">
                  <Link to="/cart">
                  <button className="header-cart-button"><span className="header-cart-icon"><i className="fas fa-cart-plus"></i></span>My Cart</button>
                  </Link>
                 </div>

               </div>
            </div>
        );
    }
}

export default Header;