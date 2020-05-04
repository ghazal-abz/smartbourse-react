import React, { Component } from 'react';
import {AboutDiv} from './style';
import {StyledLink} from '../variables/StyledLink';

class About extends Component {
    render() {
        return (
            <AboutDiv>
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-lg-5 offset-lg-1">
                                <div className="about_info">
                                    <div className="section_title white_text">
                                        {/* <span className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">به اسمارت بورس خوش آمدید</span> */}
                                        <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">به اسمارت بورس خوش آمدی</h3>
                                        <p className="mid_text wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">مجموعه اسمارت بورس در زمینه پیاده سازی Machine Learning، هوش مصنوعی و الگوریتم تریدینگ، توسعه و معرفی بازار سهام و آموزش فعال است در حوزه Machine learning و هوش مصنوعی با بگارگیری نیروهای متخصص از دانشگاههای برتر کشور حرکت سازنده، مبتنی بر دانش روز دنیا و تجربیات ارزشمند از بازار ایران شروع شده </p>
                                        <p className="last_text wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">و در حال رسیدن به نتایج درخشان در راستای معاملات مبتنی بر ماشین با بازدهی مستمر و بالا می باشد توسعه بازار سهام با هدف معرفی این بازار پرسود به عموم جامعه از دیگر فعالیتهای مجموعه است بدیهی است</p>
                                        <StyledLink href="#" className="boxed-btn3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">بیشتر بدانید</StyledLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </AboutDiv>
           
          
        )
    }
}
export default About;

