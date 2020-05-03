import React, { Component } from 'react';
import {GetinDiv} from './style';

 class Getin extends Component {
    render() {
        return (
            <GetinDiv>
            <div data-scroll-index="" className="get_in_tauch_area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb-90">
                                <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">با ما در تماس باشید</h3>
                                <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">مخاطب در این حوزه فعالیت مناسبی را در شبکه های اجتماعی تلگرام و اینستاگرام دنبال میکند</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="touch_form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="single_input wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                                <input type="text" placeholder="نام و نام خانوادگی" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="single_input wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                                <input type="email" placeholder="ایمیل" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single_input wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                                                <input type="email" placeholder="موضوع" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="single_input wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                            <textarea name="" id="" cols="30" placeholder="پیام خود را وارد کنید" rows="10"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="submit_btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                                                <button className="boxed-btn3" type="submit">ارسال پیام </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </GetinDiv>
        )
    }
}
export default Getin;