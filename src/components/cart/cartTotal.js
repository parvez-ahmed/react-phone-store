import React from 'react';


let cartTotal = ({value})=>{
   const { cartSubTotal, cartTax, cartTotal } = value;
   return (
       <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <h3>SubTotal : ${cartSubTotal}</h3>
          <h3>cartTax : ${cartTax}</h3>
          <h3>cartTotal : ${cartTotal}</h3>

        </div> 
       </div>
   )
}

export default cartTotal;