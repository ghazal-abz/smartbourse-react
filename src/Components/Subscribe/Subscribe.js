import React, { Component } from 'react';
import {GetinDiv} from './style';

 class Subscribe extends Component {
    render() {
        return (
            <GetinDiv>
            <div data-scroll-index="0" className="get_in_tauch_area">
                    <section className="text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="widget widget-newsletter">
                                        <form className="widget-subscribe-form" action="#" role="form" method="post">
                                            <h3 className="text-light">اشتراک رایگان خبرنامه ما را بگیرید</h3>
                                            <div className="input-group mb-0 rtl">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-paper-plane" aria-hidden="true"></i></span>
                                                </div>
                                                <input type="email" required="" name="widget-subscribe-form-email" className="form-control required email" placeholder="ایمیل خود را وارد نمایید" />
                                                <div className="input-group-append">
                                                    <button type="submit" id="widget-subscribe-submit-button" className="btn btn-light">اشتراک خبرنامه</button>
                                                </div>
                                            </div>
                                            <small className="text-light">همیشه با اخبار ما به روز و مطلع از بازار بورس باشید</small>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>                           
            </div>
            </GetinDiv>
        )
    }
}
export default Subscribe;