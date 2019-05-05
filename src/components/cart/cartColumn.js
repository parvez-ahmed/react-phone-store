import React, { Component } from 'react';


export class CartColumn extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className=" text-center d-none d-lg-block">
              <div className="row">
              <div className="col-lg-2">
                <p className="text-uppercase">products</p>
               </div>
              <div className="col-lg-2">
              <p className="text-uppercase">name of product</p>
              </div>
              <div className="col-lg-2">
              <p className="text-uppercase">price</p>
              </div>
              <div className="col-lg-2">
              <p className="text-uppercase">quantity</p>
              </div>
              <div className="col-lg-2">
              <p className="text-uppercase">remove</p>
              </div>
              <div className="col-lg-2">
              <p className="text-uppercase">total</p>
              </div>
              </div>
            </div>
        )
    }
}