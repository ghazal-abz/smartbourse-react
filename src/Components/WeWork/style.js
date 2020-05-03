
import styled from 'styled-components';
import {  tablet_device, mobile_device } from '../variables/responsive';
// import {ravi_light,ravi_light} from '../variables/variable';
import {ravi_light} from '../variables/Font';
import img from './work/work.jpg';
import {border_radius, transition} from '../variables/mixin'


export const WeWorkDiv = styled.div`


.how_we_work_area{
    position: relative;
    &.extra_margin_bottom{
        margin-bottom: 160px;
        @media ${mobile_device}{
            margin-bottom: 70px;
        }
        @media ${tablet_device}{
            margin-bottom: 100px;
        }
    }
    &.extra_margin{
        margin-top: 160px;
        @media ${mobile_device} {
            margin-top: 70px;
        }
        @media ${tablet_device} {
            margin-top: 100px;
        }
    }
    &::before{
        position: absolute;
        content: '';
        width: 50%;
        left: 0;
        top: 0;
        height: 100%;
        background-image: url(${img});
        background-size: cover;
        background-position: center center;
        ${border_radius('0 20px 20px 0')}
        @media ${mobile_device} {
            display: none;
        }
        @media ${tablet_device} {
            display: none;
        }
    }
    .work_info{
        padding: 180px 0;
        @media ${mobile_device} {
            padding: 80px 0;
        }
        @media ${tablet_device} {
            padding: 100px 0;
        }
        .section_title{
            .mid_text{
                font-size: 18px;
                font-family: ${ravi_light};
                color: #1F1F1F;
                font-weight: 400;
                margin-bottom: 25px;
            }
            .last_p{
                font-size: 16px;  
                color: #707070;
                font-weight: 400;
            }
        }
        .video_watch{
            margin-top: 37px;
            .play_btn{
                a{
                    width: 60px;
                    height: 60px;                
                    ${border_radius('50%')}
                    background: #615CFD;
                    font-size: 14px;
                    text-align: center;
                    line-height: 60px;
                    color: #fff;
                    display: inline-block;
                }
            }
            span{
                font-size: 20px;
                color: #1F1F1F;
                font-weight: 400;
                font-family: ${ravi_light};
                margin-left: 20px;
            }
        }
    }
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