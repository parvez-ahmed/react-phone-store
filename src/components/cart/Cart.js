import React, { Component } from 'react';
import CartTitile from './cartTitle';
import {CartColumn} from './cartColumn';
import EmptyCart from './emptyCart';
import { ProductConsumer } from '../../contextAPI/productContext';
import CartList from './cartList';
import CartTotal from './cartTotal';
class Cart extends Component{
    // constructor(){}

    render(){
        return (
               <ProductConsumer>
                   {
                       (value)=>{
                           console.log(value)
                           if(value.cart.length > 0){
                               return (
                                   <React.Fragment>
                                            <CartTitile title="Your Cart"/> 
                                            <CartColumn /> 
                                            <CartList value={value} />
                                            <CartTotal value={value} />
                                   </React.Fragment>
                               )
                           }else{
                               return <EmptyCart />
                           }
                       }
                   }
               </ProductConsumer>
        );
    }
}

export default Cart;