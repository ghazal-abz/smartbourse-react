import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route , Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import './'
import FirstPB from './Pages/FirstPublishing/FirstPublishing';


function App() {
  return (
    <React.Fragment>
      <Header />
           
                   <Switch>
                       <Route path="/" exact={true} component={Home}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/FirstPublishing" component={FirstPB}/>
                       {/* <Route path="/product/:id" component={}/>
                       <Route path="/about" component={}/>
                       <Route path="/news" component={}/>
                       <Route path="/contact" component={}/>
                       <PrivateRoute path="/user-panel" component={} auth={this.state.isAuthenticated}/>
                       <Route path="/login" render={(props) => <Login {...props} auth={this.state.isAuthenticated} login={this.handleLogin.bind(this)}/>}/>
                       <Route component={}/>  */}
                   </Switch>
       
    

           <Footer/>

    </React.Fragment>
  );
}

export default App;
