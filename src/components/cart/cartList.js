import React from 'react';
import CartItem from './cartItem';

let CartList = ({value})=>{
    console.log(value);
    const { cart } = value;
    return (
        <div className=" text-center d-lg-block">
            {
                cart.map(item=>{
                    return <CartItem key={item.id} item={item} value={value}/>
                })
            }
        </div>
    )
}

export default CartList;