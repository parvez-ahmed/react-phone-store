import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import Detail from './components/detail/Detail';
import Cart from './components/cart/Cart';
import { ProductProvider } from './contextAPI/productContext';
import  Modal  from './components/modal/modal'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductProvider >
          <Header />
          <div className="container">
          <Switch>
              <Route  exact path="/" component={ ProductList } />
              <Route path="/detail" component={ Detail } />
              <Route path="/cart" component={ Cart } />
          </Switch>
          </div>
          <Modal />
        </ProductProvider>
      </React.Fragment>
      
    );
  }
}

export default App;
