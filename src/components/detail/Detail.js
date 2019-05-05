import React, { Component } from 'react';
import { ProductConsumer } from './../../contextAPI/productContext';
import { Link } from 'react-router-dom';
import './style.css';
class Detail extends Component{
    // constructor(){}

    render(){
        return (
            <ProductConsumer>
                {
                    (value)=>{
                          let { id, title, img, price, company, info, inCart} = value.detailProduct;
                          return (
                            <div className="product-detail-container">
                                <div className="detail-product-heading">
                                  <h1>{title}</h1>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6 col-md-6">
                                     <img src={img} alt="detail-image" className="img-fluid"></img>
                                  </div>
                                  <div className="col-lg-6 col-md-6">
                                   <h1 className="py-3">Model: {title}</h1>
                                   <h2 className="py-2">Made By: {company}</h2>
                                   <h3 className="py-2">Price: ${price}</h3>
                                   <h4 className="py-2">Some Info About Product</h4>
                                   <p>{info}</p>
                                   <div className="product-detail-button-container">
                                    <Link to="/" className="style-none"> 
                                     <button className="btn btn-primary">Back to Home</button>
                                     </Link> 
                                     {/* <Link to="/cart"> */}
                                     <button className="btn btn-warning" onClick={()=>{ if(!inCart){value.addToCart(id);}else{}}} >
                                        
                                       {inCart ? "Go to Cart" : "Add to cart"} 
                                        
                                      </button>
                                     {/* </Link> */}
                                   </div>
                                  </div>

                                </div>

                            </div>
                          )
                    }
                }
            </ProductConsumer>
        );
    }
}

export default Detail;