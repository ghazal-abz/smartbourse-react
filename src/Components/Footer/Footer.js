import React, { Component } from 'react';
import {FooterDiv} from './style';

class Footer extends Component {
    render() {
        return (
            <FooterDiv>
            <footer className="footer">
                <div className="footer_top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-3">
                                <div className="footer_logo wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                                    <a href="index.html">
                                        <img src="img/header/LOGO.png" alt=""></img>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-9">
                                <div className="menu_links">
                                    <ul>
                                        <li><a className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".2s" href="#">خانه</a ></li>
                                        <li><a className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".4s" href="#">آکادمی</a></li>
                                        <li><a className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".6s" href="#">آموزش</a></li>
                                        <li><a className="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".8s" href="#">تماس با ما</a></li>
                                        {/* <li><a className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s" href="#">Blog</a></li>
                                        <li><a className="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.1s" href="#">Contact</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12">
                                <div className="socail_links">
                                    <ul>
                                        <li><a className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" href="#"> <i className="fa fa-facebook"></i> </a></li>
                                        <li><a className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s" href="#"> <i className="fa fa-twitter"></i> </a></li>
                                        <li><a className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s" href="#"> <i className="fa fa-instagram"></i> </a></li>
                                        <li><a className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s" href="#"> <i className="fa fa-google-plus"></i> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right_text">
                    <div className="container">
                        <div className="footer_border"></div>
                        <div className="row">
                            <div className="col-xl-12">
                                <p className="copy_right text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.3s">
        2019 &copy;<script> </script> تمامی حق و حقوق این سایت محفوظ می باشد. <i className="fa fa-heart-o" aria-hidden="true"></i> توسط <a href="https://colorlib.com" target="_blank">SmartBourse </a>
      
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </FooterDiv>
        )
    }
}
export default Footer;
