import React, { Component } from 'react';
import Slider from '../../Components/Slider/Slider';
import { Shopdiv } from './style';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import primage from './pr.jpg';
class Shop extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <React.Fragment>
                <Slider />
                <Shopdiv className="container">

       
                    <div className="row">
                 

                

                        <div className="col-md-4 text-center product-cart">
                            <img className="product-image" src={primage} />
                            <div className="row">
                                <div className="col-md-6 product-name">نام محصول</div>
                                <div className="col-md-6 product-price">قیمت محصول</div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-6 add-to-card"><button>افزودن به سبد</button></div>
                                <div className="col-md-6 QNT">تعداد:<input className="QNTinput text-center" type="number" min="0"/></div>
                            </div>
                            <p className="product-category text-right my-2 px-1">دسته بندی : <span>آموزش مقدماتی</span></p>
                            <p className="product-discription">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون با استفاده از طراحان گرافیک است، چاپگرها و متون</p>
                        </div>

                        
                        <div className="col-md-4 text-center product-cart">
                            <img className="product-image" src={primage} />
                            <div className="row">
                                <div className="col-md-6 product-name">نام محصول</div>
                                <div className="col-md-6 product-price">قیمت محصول</div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-6 add-to-card"><button>افزودن به سبد</button></div>
                                <div className="col-md-6 QNT">تعداد:<input className="QNTinput text-center" type="number" min="0"/></div>
                            </div>
                            <p className="product-category text-right my-2 px-1">دسته بندی : <span>آموزش مقدماتی</span></p>
                            <p className="product-discription">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون با استفاده از طراحان گرافیک است، چاپگرها و متون</p>
                        </div>



                        <div className="col-md-4 text-center product-cart">
                            <img className="product-image" src={primage} />
                            <div className="row">
                                <div className="col-md-6 product-name">نام محصول</div>
                                <div className="col-md-6 product-price">قیمت محصول</div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-md-6 add-to-card"><button>افزودن به سبد</button></div>
                                <div className="col-md-6 QNT">تعداد:<input className="QNTinput text-center" type="number" min="0"/></div>
                            </div>
                            <p className="product-category text-right my-2 px-1">دسته بندی : <span>آموزش مقدماتی</span></p>
                            <p className="product-discription">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون با استفاده از طراحان گرافیک است، چاپگرها و متون</p>
                        </div>




                        
                        

                        


                        
                        




                    </div>



                </Shopdiv>



            </React.Fragment>
        );
    }
}
export default Shop;
