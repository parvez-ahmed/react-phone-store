import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../contextAPI/productContext'
import './style.css'

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.product.id,
            title:this.props.product.title,
            price:this.props.product.price,
            inCart:this.props.product.inCart,
            img:this.props.product.img,
            handleDetail:this.props.handleDetail,
            addToCart:this.props.addToCart
        };
    }

    render(){
        let {inCart} = this.props.product
        return (
            <ProductConsumer>
                {
                    (value)=>{ 
                        return (
                                    <div className="col-lg-4 col-md-4 padding-bottom">
                                    <div className="card">

                                    <div className="p-5 hover-effect image-container">

                                        <Link to="/detail" className="style-none">
                                        <img className="card-img-top " src={this.state.img} onClick={()=>{this.state.handleDetail(this.state.id)}}></img>
                                        </Link>

                                        <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {this.state.addToCart(this.state.id)}}>
                                        {
                                            inCart ? (<p> In Cart</p>) : (<i className="fas fa-cart-plus"></i>)
                                        }
                                        </button>

                                    </div>
                                    
                                    <div className="card-body border-top">
                                        <h5 className="card-title flex-container">
                                        <span>{this.state.title}</span>
                                        <span>${this.state.price}</span>
                                        </h5>
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

export default Product;