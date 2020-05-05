import React, { Component } from 'react';
import {HeaderMain} from './style';
import NavItem from "../../NavItem";

 class Header extends Component {
    render() {
        return (
            <HeaderMain>
            <div className="header-area ">
                <div id="sticky-header" className="main-header-area">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center no-gutters">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo-img">
                                    <a href="index.html">
                                        <img src="./logo.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="main-menu  d-none d-lg-block text-center">
                                    <nav>
                                        <ul id="navigation">
                                            <li  className="active" ><NavItem to="/" >خانه</NavItem></li>
                                            <li><NavItem to="/academy">آکادمی</NavItem></li>
                                            <li><a href="Portfolio.html">مقالات</a></li>
                                            <li><a href="#">اخبار <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="portfolio_details.html">افتتاح حساب آنلاین</a></li>
                                                    <li><a href="about.html">about</a></li>
                                                    <li><a href="elements.html">elements</a></li>
                                                </ul>
                                            </li>
    
                                            <li><a href="#">تماس با ما <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="single-blog.html">single-blog</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">درباره ما</a></li>
                                            {/* <li><NavItem to="/FirstPublishing">عرضه اولیه</NavItem></li> */}
                                            <li><NavItem to="/SignUp">افتتاح حساب آنلاین</NavItem></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-2 d-none d-lg-block">
                                <div className="log_chat_area d-flex align-items-end">
                                    <div  className="say_hi">
                                        <NavItem to="/login"  className="say_hi">ورود / عضویت</NavItem>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </HeaderMain>
            )
    }
}

export default Header;