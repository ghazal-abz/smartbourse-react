import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route , Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";

import Tutorial from "./Pages/Tutorial/Tutorial";
import Shop from "./Pages/shop/shop";
import Product from "./Pages/product/product";
import Shopingcart from "./Pages/shopingcart/shopingcart";
import './'


function App() {
  return (
    <React.Fragment>
      <Header />
           
                   <Switch>
                       <Route path="/" exact={true} component={Home}/>
                        {/* <Route path="/" component={}/> */}
                       {/* <Route path="/product/:id" component={}/> */}
                       <Route path="/tutorial" component={Tutorial}/>
                       <Route path="/Shop" component={Shop}/>
                       <Route path="/product" component={Product}/>
                       <Route path="/shopingcart" component={Shopingcart}/>
                       {/* <Route path="/news" component={}/>
                       <Route path="/contact" component={}/>
                       <PrivateRoute path="/user-panel" component={} auth={this.state.isAuthenticated}/>
                       <Route path="/login" render={(props) => <Login {...props} auth={this.state.isAuthenticated} login={this.handleLogin.bind(this)}/>}/>
                       <Route component={}/>   */}
                   </Switch>
       
    

           <Footer/>

    </React.Fragment>
  );
}

export default App;
