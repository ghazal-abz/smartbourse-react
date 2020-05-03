import styled from 'styled-components';
import {  mid_device, tablet_device, mobile_device,large_device } from '../variables/responsive';
import img from './about/about.png';
import {border_radius, transition} from '../variables/mixin';
// import {ravi_light} from '../variables/variable';
import {ravi_light} from '../variables/Font';


export const AboutDiv = styled.div`

    background: #1F1F1F;
    position: relative;
    &::before{
        content: '';
        background-image:url(${img});
        right: 0;
        top: 0;
        height: 100%;
        width: 50%;
        z-index: 9;
        background-size: cover;
        position: absolute;
        background-size: cover;
        background-position: center center;
        @media ${mobile_device} {
            display: none;
        }
        @media ${tablet_device} {
            display: none;
        }
    }

    .about_thumb{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 50%;
        img{
            width: 100%;
        }
    }
    .about_info{
        padding: 160px 0;
        @media ${mobile_device}{
            padding: 80px 0;
        }
        @media ${tablet_device}{
            padding: 100px 0;
        }
        @media ${mid_device}{
            padding: 100px 0;
        }
  
    }
    .section_title{
        span{
            color:white;
        }
        h3{
            color:#fff;
            margin-top: 25px;
            margin-bottom: 54px;
            @media ${mid_device} {
                font-size: 35px;
                margin-bottom: 20px;
            }
            @media ${large_device} {
                font-size: 35px;
                margin-bottom: 15px;
            }
        }
        .mid_text{
            color: #C9C9C9;
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 14px;
        }
        .last_text{
            color: #C9C9C9;
            font-size: 18px;
            font-weight: 400;
            margin-bottom: 44px;
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

