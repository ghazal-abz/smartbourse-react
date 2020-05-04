import React, { Component } from 'react';

import Slider from '../../Components/Slider/Slider';
import Services from '../../Components/Services/Services';
import About from '../../Components/About/About';
import News from '../../Components/News/News';
import WeWork from '../../Components/WeWork/WeWork';
import Analysis from '../../Components/Analysis/Analysis';
import Getin from '../../Components/Getin/Getin';
// import Subscribe from '../../Components/Subscribe/Subscribe';




class Home extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <React.Fragment>              
                <Slider />
                <WeWork/> 
                <Services />
                <About />
                <News />                           
                <Analysis />
                <Getin/>
                {/* <Subscribe />      */}
          </React.Fragment>
        );
    }
}

export default Home;
