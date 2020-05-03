import React, { Component } from 'react';
import {BannerDiv} from './style';

 class Banner extends Component {
    render() {
        return (
            <BannerDiv>
            <div class="bradcam_area breadcam_bg_3">
            <div class="container">
              <div class="row">
                  <div class="col-xl-12">
                      <div class="bradcam_text">
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