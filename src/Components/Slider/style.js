import styled from 'styled-components';
import {  mid_device, tablet_device, mobile_device } from '../variables/responsive';
// import {ravi_light,ravi_light} from '../variables/variable';
import {ravi_light} from '../variables/Font';
import img1 from './banner/banner.png';
import img2 from './banner/banner2.png';
import {border_radius, transition} from '../variables/mixin'

export const SliderMain = styled.div`


.single_slider{
        position: relative;
        z-index: 0;
        height: 900px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;

        @media ${mobile_device} {
            height: 500px;
        }
        @media ${tablet_device} {
            height: 620px;
        }
        &.about_banner.overlay::before{
            opacity: .5;
        }
        .slider_text{
            h3{
                color: #FFF;
                font-family: ${ravi_light};
                font-size:58px;
                font-weight: 400;
                line-height: 84px;
                margin-bottom: 54px;
             span{
                 font-weight: 700;
             }
             @media ${mobile_device} {
               font-size: 30px;
                letter-spacing: 3px;
                line-height: 35px;
            }
             @media ${tablet_device} {
               font-size: 50px;
               line-height: 62px;

            }
             @media ${mid_device} {
               font-size: 45px;
               line-height: 55px;

            }
            }
            span{
                font-size: 30px;
                font-weight: 400;
                color: #FFFFFF;
                position: relative;
                z-index: 1;
                &::before{
                    position: absolute;
                    background: #fff;
                    width: 50px;
                    height: 2px;
                    content: '';
                    left: -67px;
                    top: 50%;
                    margin-bottom: -1px;
                }
             @media ${mid_device} {
                font-size: 16px;
             }
             @media ${mobile_device} {
                font-size: 16px;
             }
            }
            .video_service_btn> a{
                margin-right: 15px;
                @media ${mobile_device} {
                    margin-bottom: 20px;
                }
            }
        }
    }
    .slider_bg_1{
    background-image: url(${img1});
    }
    .slider_bg_2{
        background-image: url(${img2});
    }
    .boxed-btn3 {
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#0181f5+0,5db2ff+100 */
    background: #615CFD;
	color: #fff;
	display: inline-block;
	padding: 12px 33px;
	font-family: ${ravi_light};
	font-size: 16px;
    font-weight: 500;
    border: 0;
    border: 1px solid transparent;
    ${border_radius('30px')};
    text-align: center;
    color: #fff !important;
    text-transform: capitalize;
    ${transition('.5s')};
    cursor: pointer;
    &:hover{
        border: 1px solid #615CFD;
        color: #615CFD !important;
        background: transparent ;
    }
    &:focus{
        outline: none;
    }
    &.large-width{
        width: 220px;
    }
}

`;


