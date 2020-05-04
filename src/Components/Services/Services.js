
import React, { Component } from 'react';
import {ServiceArea} from './style';
import { Div} from '../variables/Theme';


class Services extends Component {
    render() {
        return (
            <Div>
             <ServiceArea >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb-70">
                            <h3 className="wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".1s">
                                خدمات ما</h3>
                                <span className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s" >مجموعه اسمارت رویکرد جدید را با ارایه راهکارهای مبتنی بر هوش ماشین در معاملات سهام ارایه داده است در همین راستا با شناسایی تحرکات بازار و الگوریتمهای معاملاتی مطلوب استراتژیهای معاملاتی مناسب جهت اخذ تصمیمات مناسب در بازار سهام صورت میپذیرد</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-3">
                            <div className="single_service text-center wow fadeInLeft" data-wow-duration="1.2s" data-wow-delay=".4s">
                                <div className="icon">
                                    <img src="img/svg_icon/tutorial.svg" alt="" />
                                </div>
                                <h3>اموزش بورس</h3>
                                <p>مجموعه اسمارت بورس در زمینه توسعه بازار سهام و معرفی آن به آحاد مردم و ارایه تحلیلهای آموزشی فعال میباشد.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3">
                            <div className="single_service text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div className="icon">
                                    <img src="img/svg_icon/news.svg" alt="" />
                                </div>
                                <h3>اخبار</h3>
                                <p>مجموعه اسمارت بورس در زمینه توسعه بازار سهام و معرفی آن به آحاد مردم و ارایه تحلیلهای آموزشی فعال میباشد.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3">
                            <div className="single_service text-center wow fadeInRight" data-wow-duration="1.2s" data-wow-delay=".4s">
                                <div className="icon">
                                    <img src="img/svg_icon/brain.svg" alt="" />
                                </div>
                                <h3>هوش ماشین</h3>
                                <p>مجموعه اسمارت بورس در زمینه توسعه بازار سهام و معرفی آن به آحاد مردم و ارایه تحلیلهای آموزشی فعال میباشد.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-3">
                            <div className="single_service text-center wow fadeInRight" data-wow-duration="1.2s" data-wow-delay=".4s">
                                <div className="icon">
                                    <img src="img/svg_icon/algoritm.svg" alt="" />
                                </div>
                                <h3>هوش ماشین</h3>
                                <p>مجموعه اسمارت بورس در زمینه توسعه بازار سهام و معرفی آن به آحاد مردم و ارایه تحلیلهای آموزشی فعال میباشد.</p>
                            </div>
                        </div>
                    </div>
                </div>
    </ServiceArea>
    </Div>
           
          
        )
    }
}
export default Services;


