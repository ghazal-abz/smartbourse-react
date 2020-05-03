import React, { Component } from 'react';
import {TestimonialDiv} from './style';
import {Owl} from '../variables/Owl';
import {Div} from '../variables/Theme';

class Testimonial extends Component {
    render() {
        return (
            <TestimonialDiv>
                <Div>
                    <div className="testimonial_area ">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <Owl className="testmonial_active owl-carousel">
                                        <div className="single_carousel">
                                            <div className="single_testmonial text-center">
                                                <div className="quote">
                                                    <img src="img/testmonial/quote.svg" alt="" />
                                                </div>
                                                <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                                                        sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                                                        Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                                                <div className="testmonial_author">
                                                    <div className="thumb">
                                                            <img src="img/testmonial/thumb.png" alt="" />
                                                    </div>
                                                    <h3>Robert Thomson</h3>
                                                    <span>Business Owner</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single_carousel">
                                            <div className="single_testmonial text-center">
                                                <div className="quote">
                                                    <img src="img/testmonial/quote.svg" alt="" />
                                                </div>
                                                <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                                                        sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                                                        Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                                                <div className="testmonial_author">
                                                    <div className="thumb">
                                                            <img src="img/testmonial/thumb.png" alt="" />
                                                    </div>
                                                    <h3>Robert Thomson</h3>
                                                    <span>Business Owner</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single_carousel">
                                            <div className="single_testmonial text-center">
                                                <div className="quote">
                                                    <img src="img/testmonial/quote.svg" alt="" />
                                                </div>
                                                <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/> 
                                                        sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.  <br/>
                                                        Fusce ac mattis nulla. Morbi eget ornare dui. </p>
                                                <div className="testmonial_author">
                                                    <div className="thumb">
                                                            <img src="img/testmonial/thumb.png" alt="" />
                                                    </div>
                                                    <h3>Robert Thomson</h3>
                                                    <span>Business Owner</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Owl>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Div>
            </TestimonialDiv>
        )
    }
}
export default Testimonial;