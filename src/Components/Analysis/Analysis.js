import React, { Component } from 'react';
import {AnalysisDiv} from './style';

class Analysis extends Component {
    render() {
        return (
            <AnalysisDiv>
            <div className="team_area ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb-90">
                                <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">آخرین تحلیل ها</h3>
                                <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">پاسار شکست سقف و شکل گیری سقفی بالاتر از سقف قبلی با شکست</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single_team wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                                <div className="team_thumb">
                                    <img src="img/analysis/stop_loss.jpg" alt="" />
                                    <div className="team_hover">
                                        <div className="hover_inner text-center">
                                            {/* <ul>
                                                <li><a href="#"> <i className="fa fa-twitter"></i> </a></li>
                                            </ul>                                                                                                                            */}
                                        </div>
                                    </div>
                                </div>
                                <div className="team_title text-center">
                                    <h3>مادیرا</h3>
                                    <p>تحلیل تکنیکال مادیرا</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single_team wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                                <div className="team_thumb">
                                    <img src="img/analysis/stop_loss.jpg" alt="" /> 
                                    <div className="team_hover">
                                        <div className="hover_inner text-center">
                                        </div>
                                    </div>
                                </div>
                                <div className="team_title text-center">
                                    <h3>وپاسار</h3>
                                    <p>وپاسار شکست سقف و شکل گیری سقفی بالاتر از سقف قبلی با شکست</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single_team wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                                <div className="team_thumb">
                                    <img src="img/analysis/stop_loss.jpg" alt="" />
                                    <div className="team_hover">
                                        <div className="hover_inner text-center">
                                        </div>
                                    </div>
                                </div>
                                <div className="team_title text-center">
                                    <h3>مادیرا</h3>
                                    <p>تحلیل تکنیکال مادیرا</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single_team wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
                                <div className="team_thumb">
                                    <img src="img/analysis/stop_loss.jpg" alt="" />
                                    <div className="team_hover">
                                        <div className="hover_inner text-center">
                                        </div>
                                    </div>
                                </div>
                                <div className="team_title text-center">
                                    <h3>مادیرا</h3>
                                    <p>اسار شکست سقف و شکل گیری سقفی بالاتر از سقف قبلی با شکستا</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </AnalysisDiv>
        )
    }
}
export default Analysis;
