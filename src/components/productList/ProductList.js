import React, { Component } from 'react';
import Product from '../product/Product';
import { ProductConsumer } from '../../contextAPI/productContext'
import './style.css';
class ProductList extends Component{
    // constructor(){}

    render(){
        return (
            <div className="row margin">
            <ProductConsumer>
                {
                    (value)=>{
                        console.log(value);
                        return value.storeProducts.map(product=>{
                            return(
                                <Product key={product.id} product={product} handleDetail={value.handleDetail} addToCart={value.addToCart}></Product>
                            ) 
                        })
                    }
                }
            </ProductConsumer>
            </div>
        );
    }
}

export default ProductList;