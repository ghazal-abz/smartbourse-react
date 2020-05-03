import React, { Component } from 'react';
import {SliderMain} from './style';
import { Div} from '../variables/Theme';

class Slider extends Component {
    render() {
        return (
            <Div>
            <SliderMain>
                
                    <div className="single_slider  d-flex align-items-center slider_bg_1 overlay">
                        <div className="container">
                            <div className="row align-items-center justify-content-start">
                                <div className="col-lg-10 col-md-10">
                                    <div className="slider_text">
                                        <h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
                                        به اسمارت بورس خوش آمدید...
                                        </h3>
                                        <a className="boxed-btn3 wow fadeInLeft"  data-wow-duration="1s" data-wow-delay=".2s" href="portfolio.html">تماس با ما</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
            </SliderMain>
            </Div>
           
          
        )
    }
}
export default Slider;