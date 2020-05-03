import React, { Component } from 'react';
import {WeWorkDiv} from './style';
import { Div} from '../variables/Theme';


 class WeWork extends Component {
    render() {
        return (
            <Div>
            <WeWorkDiv>
            <div className="how_we_work_area">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-5">
                            <div className="work_info">
                                <div className="section_title">
                                    <h3 className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s">خدمات ما</h3>
                                    <p className="mid_text wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".4s">مجموعه اسمارت رویکرد جدید را با ارایه راهکارهای مبتنی بر هوش ماشین در معاملات سهام ارایه داده است در همین راستا با شناسایی تحرکات بازار و الگوریتمهای معاملاتی مطلوب استراتژیهای معاملاتی مناسب جهت اخذ تصمیمات مناسب در بازار سهام صورت میپذیرد</p>
                                    <p className="last_p wow fadeInRight" data-wow-duration="1s" data-wow-delay=".5s">دیگر حوزه فعالیت مجوعه اسمارت در زمینه آموزشهای مرتبط با بازار سهام در زمینه های مختلف میباشد مجموعه اسمارت بورس در زمینه توسعه بازار سهام و معرفی آن به آحاد مردم و ارایه تحلیلهای آموزشی فعال میباشد.</p>
                                </div>
                                <div className="video_watch d-flex align-items-center">
                                <span className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".7s"> بیشتر بدانید</span>
                                    <div className="play_btn wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                        <a href="https://www.youtube.com/watch?v=D7tF-cY2M9o" className="video_icon popup-video"> <i className="fa fa-play"></i> </a>
                                    </div>
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </WeWorkDiv>
            </Div>
            )
    }
}

export default WeWork;