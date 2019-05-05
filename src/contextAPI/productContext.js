import React, { Component} from 'react';
import { storeProducts, detailProduct} from '../data';
const ProductContext = React.createContext();


class ProductProvider extends Component{
    
    constructor(){
        super();
        this.state = {
            storeProducts:storeProducts,
            detailProduct:detailProduct,
            modalOpen:false,
            modalProduct:detailProduct,
            cart:[],
            cartSubTotal:0,
            cartTax:0,
            cartTotal:0
        }     
    }
           

    getItemById = (id)=>{
        return this.state.storeProducts.find(item => item.id == id);
    }


    handleDetail = (id)=>{
        let product = this.getItemById(id);
        this.setState({
            detailProduct:product
        })
    }

    addToCart = (id)=>{
        let productList = [...this.state.storeProducts];
        let index = productList.indexOf(this.getItemById(id));
        let product = productList[index];
        
            product.inCart = true;
            product.total = product.price;
            productList[index] = product;

        this.setState({
            storeProducts:productList,
            cart:[...this.state.cart,product],
            modalProduct:product,
            modalOpen:true,
        },()=>{this.addTotals();});

        

    }

    closeModal= ()=>{
        this.setState({
            modalOpen:false
        })
    }

    increment = (id)=>{
        let product = this.getItemById(id);
        product.count++;
        product.total = product.price * product.count;
        let newCartList = [...this.state.cart];
        
        this.setState({
            cart:newCartList,
        },()=>{this.addTotals();});

        
    }

    decrement = ()=>{
        console.log("decrement function called");
    }
    removeItem = (id)=>{
        let product = this.getItemById(id);
        let index = this.state.cart.indexOf(product);
        let newCartList = [...this.state.cart];
        newCartList.splice(index,1);
        product.inCart=false;
        product.count=1;
        this.setState({
            cart:newCartList
        })
    }

    addTotals = ()=>{
        console.log("working");
        let subTotals = 0;
        this.state.cart.forEach(item=>{
            subTotals += item.total;
        });

        let tempTax = subTotals * 0.1;



        this.setState({
            cartSubTotal:subTotals,
            cartTax : tempTax,
            cartTotal : subTotals+tempTax
        })
    }
    render(){
        return (
            <ProductContext.Provider value={
                {
                   storeProducts:this.state.storeProducts,
                   detailProduct:this.state.detailProduct,
                   modalOpen:this.state.modalOpen,
                   modalProduct:this.state.modalProduct,
                   handleDetail:this.handleDetail,
                   addToCart:this.addToCart,
                   closeModal:this.closeModal,
                   cart:this.state.cart,
                   increment:this.increment,
                   decrement:this.decrement,
                   removeItem:this.removeItem,
                   cartSubTotal:this.state.cartSubTotal,
                   cartTax:this.state.cartTax,
                   cartTotal:this.state.cartTotal,
                }
            } >

             { this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};