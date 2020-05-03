import React, { Component } from 'react';

import Slider from '../../Components/Slider/Slider';
import Services from '../../Components/Services/Services';
import About from '../../Components/About/About';
import Portfolio from '../../Components/Portfolio/Portfolio';
import WeWork from '../../Components/WeWork/WeWork';
import Team from '../../Components/Team/Team';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Getin from '../../Components/Getin/Getin';
import Subscribe from '../../Components/Subscribe/Subscribe';




class Home extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <React.Fragment>
              
                <Slider />
                <Services />
                <About />
                <Portfolio /> 
                <WeWork/> 
                <Team/>
                <Testimonial />
                <Getin/>
                <Subscribe />     
          </React.Fragment>
        );
    }
}

export default Home;
