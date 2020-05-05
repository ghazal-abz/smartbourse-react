import styled from 'styled-components';
import {  mobile_device } from '../variables/responsive';
// import {ravi_light} from '../variables/variable';
import {ravi_light} from '../variables/Font';
import {border_radius} from '../variables/mixin'

export const TestimonialDiv = styled.div`


.testimonial_area{
    padding: 160px 0;
    background-image: url(../img/testmonial/banner.png);
    position: relative;
    z-index: 0;
    background-size: cover;
    background-position: center center;
    &:before{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
        content: '';
        background: #1F1F1F;
        opacity: .6;
    }
    @media ${mobile_device} {
        padding: 50px 0;
    }
    .single_testmonial{
        p{
            color: #fff;
            font-weight: 400;
            font-size: 24px;
            line-height: 32px;
            margin: 35px 0 25px 0;
            br{
                @media (min-width: 320px) and (max-width: 1500px) {
                    display: none;
                }
            }

        }
        .testmonial_author{
            .thumb{
                width: 42px;
                height: 42px;
                ${border_radius('50%')};
                margin: auto;
                margin: auto auto 12px auto;
            }
            h3{
                color: #fff;
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 4px;
                font-family: ${ravi_light};
                color: #FFFFFF;
            }
            span{
                font-size: 14px;
                font-weight: 400;
                color: #fff;
                font-family: ${ravi_light};
            }   
        }
    }
    .owl-carousel .owl-item img {
        display: inline-block;
        width: auto;
    }
    .owl-carousel .owl-nav div.owl-next {
        left: auto;
        right: 0;
    }
    .owl-carousel .owl-nav div {
        left: 0;
    }
}

`;

