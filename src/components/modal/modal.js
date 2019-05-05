import React, { Component } from 'react'
import { ProductConsumer } from '../../contextAPI/productContext';
import { Link } from 'react-router-dom';
import './modal.css';
class Modal extends Component{
    constructor(){
        super();
    }

    render(){

        return (
            <ProductConsumer>
            {
                (value)=>{

                    let {img,title,price} = value.modalProduct;
                    if(!value.modalOpen){
                        return null;
                    }
                    return (
                            <div className="modal-container">
                              <div className="modal-flex-container">
                                 <div className="custom-modal-content">
                                   <h3 className="align-center">Item Added to cart</h3>
                                   <img src={img} className="img-fluid p-1"></img>
                                   <h4 className="align-center">{title}</h4>
                                   <h5 className="align-center">Price: ${price}</h5>
                                   <div className="align-center p-1">
                                       <button className="btn btn-primary" onClick={()=>{value.closeModal()}}>Continue to Shopping</button>
                                   </div>
                                   <div className="align-center ">
                                     <Link to="/cart">
                                       <button className="btn btn-success" onClick={() => value.closeModal()}>Go to Cart</button>
                                    </Link> 
                                   </div>
                                 </div>
                              </div>
                            </div>
                    )
                }
            }
        </ProductConsumer>
        )
        

        
    }
}

export default Modal;