import React from 'react';

let CartItem = ({item,value})=>{
    const {id,title,img,price,total,count} = item;
    const {decrement, increment, removeItem} = value;
    return (
        <div className="row mt-5">
         <div className="col-10 mx-auto col-lg-2">
           <img src={img} style={imgStyle} className="img-fluid"/>
         </div>
         <div className="col-10 mx-auto col-lg-2">
           <span className="d-lg-none">Product : </span>{title}
         </div>
         <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">Price : </span>${price}
         </div>
         <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
           <div style={flexContainerButton}>
             <div style={flexContainerButtonItem} className="button-hover-effect" onClick={()=>{decrement(id)}}>-</div>
             <div style={flexContainerButtonItem} className="button-hover-effect">{count}</div>
             <div style={flexContainerButtonItem} className="button-hover-effect" onClick={()=>{increment(id)}}>+</div>
           </div>
         </div>
         <div className="col-10 mx-auto col-lg-2">
           <span style={iconStyle} onClick={()=>{removeItem(id)}}><i class="fas fa-trash"></i></span>
         </div>
         <div className="col-10 mx-auto col-lg-2">
           <span>Item Total : </span>${total}
         </div>
        </div>
    )
}

export default CartItem;



const imgStyle = {
    width:'5rem',
    height:'5rem'
}

const iconStyle = {
    color:"orange"
}

const flexContainerButton = {
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
}

const flexContainerButtonItem = {
    padding:"10px 20px",
    border:"1px solid black",
    fontSize:"12px",
    cursor:"pointer",
    margin:"0px 5px"
}