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
                 
                 <Link to="/" style={styleNone}>
                 <h1 className="heading-size" style={productHeading}>Products</h1>
                 </Link>
                  
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


const productHeading = {
    margin:"0px",
    padding:"0px",
    color:"white",
    underline:"none"
}

const styleNone = {
    all:"unset"
}