import React, { Component } from 'react';
import Slider from '../../Components/Slider/Slider';
import { Shopingcartdiv } from './style';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import primage from '../shop/pr.jpg';
class Shopingcart extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <React.Fragment>
                <Slider />
                <Shopingcartdiv className="container">
                    <div><h4>سبد خرید</h4></div>

                    <hr />
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row product-summary my-3">
                                <div className="col-md-3"><img className="product-image" src={primage} /></div>
                                <div className="col-md-9">
                                    <h4>نام محصول</h4>

                                    <hr />

                                    <p>توضیحات کوتاه شامل کلیات محصول در کنار نیازمندی های مربوطه به شکل قانونی</p>
                                    <p>مدت زمان دوره <span>18</span> ساعت</p>
                                    <p>تعداد : <span>2</span> عدد</p>
                                    <p>قیمت محصول : <span>20,000,000</span> ریال</p>
                                    <p>تخفیف : <span>2,000,000</span> ریال</p>




                                </div>

                            </div>

                            <div className="row product-summary my-3">
                                <div className="col-md-3"><img className="product-image" src={primage} /></div>
                                <div className="col-md-9">
                                    <h4>نام محصول</h4>

                                    <hr />

                                    <p>توضیحات کوتاه شامل کلیات محصول در کنار نیازمندی های مربوطه به شکل قانونی</p>
                                    <p>مدت زمان دوره <span>18</span> ساعت</p>
                                    <p>تعداد : <span>2</span> عدد</p>
                                    <p>قیمت محصول : <span>20,000,000</span> ریال</p>
                                    <p>تخفیف : <span>2,000,000</span> ریال</p>




                                </div>

                            </div>


                            






                            <hr />
                            <div className="row">

                                <div className="col-md-6">
                                    <button className="payment-btn m-4 px-5 py-2">پرداخت اینترنتی</button>

                                </div>


                                <div className="col-md-6 text-left">
                                    <p>مبلغ قابل پرداخت</p>
                                    <p><span>18,000,000</span> ریال</p>
                                </div>
                            </div>



                        </div>




                        <div className="col-md-3">
                            <div className="cost-summary my-3">
                                <div>قیمت کالا(ها) <span className="float-left">ریال</span><span className="float-left">20,000,000</span></div>
                                <div>تخفیف کالا(ها) <span className="float-left">ریال</span><span className="float-left">2,000,000</span></div>
                                <div>هزینه ارسال<span className="float-left">ریال</span><span className="float-left">200,000</span></div>
                                <hr />
                                <div>جمع<span className="float-left">ریال</span><span className="float-left">18,200,000</span></div>
                                <hr />
                                <div>مبلغ قابل پرداخت<span className="float-left">ریال</span><span className="float-left">18,200,000</span></div>
                            </div>
                        </div>
                    </div>

                </Shopingcartdiv>



            </React.Fragment>
        );
    }
}
export default Shopingcart;
