import React, { Component } from 'react';
import {BannerDiv} from './style';

 class Banner extends Component {
    render() {
        return (
            <BannerDiv>
            <div className="bradcam_area breadcam_bg_3">
            <div className="container">
              <div className="row">
                  <div className="col-xl-12">
                      <div className="bradcam_text">
                        <h3>{this.props.title}</h3>
                      </div>
                  </div>
              </div>
            </div>
          </div>
          </BannerDiv>
        )
    }
}
export default Banner;