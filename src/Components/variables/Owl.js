import styled from 'styled-components';
import { mobile_device } from '../variables/responsive';
import {border_radius, transition,transform} from '../variables/mixin'

export const Owl = styled.div`
.expert_doctors_area{
    padding-top: 120px;
    padding-bottom: 120px;
    &.doctor_page{
        padding-bottom: 80px;
    }
    @media ${mobile_device} {
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .doctors_title{
        h3{
            font-size: 36px;
            font-weight: 500;
            color: #1F1F1F;
            @media ${mobile_device} {
                font-size: 24px;
            }
        }
    }
    .single_expert{
        .expert_thumb{
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            overflow: hidden;
            img{
                ${transition('.3s')};
                ${transform('scale(1)')};
                width: 100%;
            }
        }
        .experts_name{
            ${transition('.3s')};
            background: #F5FBFF;
            padding-top: 16px;
            padding-bottom: 18px;
            h3{
                font-size: 20px;
                font-weight: 500;
                margin-bottom: 1px;
                ${transition('.3s')};
            }
            span{
                color: #919191;
                font-size: 13px;
                ${transition('.3s')};
            }
        }
        &:hover{
            .expert_thumb{
                img{
                    ${transform('scale(1.03)')};
                }
            }
            .experts_name{
                background: #5DB2FF;
                h3{
                    color: #fff;
                }
                span{
                    color: #fff;
                }
            }
        }
    }
    .owl-carousel {
        .owl-nav div {
            background: transparent;
            height: 40px;
            left: 0px;
            text-align: center;
            -webkit-transform: translateY(0%);
                -ms-transform: translateY(0%);
                    transform: translateY(0%);
            width: 40px;
            color: #919191;
            background-color: transparent;
            ${border_radius("5px")};
            font-size: 15px;
            line-height: 40px;
            border: 1px solid #EEEEEE;
            left: auto;
            left: auto;
            top: -100px;
            right: 55px;
        }
        .owl-nav{
            div{
                &.owl-next{
                    // left: 86px;
                    // right: auto;
                    left: auto;
                    right: 0;
                    i{
                        position: relative;
                        right: 0;
                        // top: 1px;
                    }
                }
                &.owl-prev{
                    i{
                        position: relative;
                        // right: 1px;
                        top: 0px;
                    }
                }
            }
        }
    }
}
`;