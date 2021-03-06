import styled from 'styled-components';
import { tablet_device, mobile_device } from '../variables/responsive';
// import {ravi_light,ravi_light} from '../variables/variable';
import {ravi_light} from '../variables/Font';
import {border_radius, transition,transform,transform_time} from '../variables/mixin'

export const AnalysisDiv = styled.div`


.team_area{
    padding-top: 155px;
    padding-bottom: 122px;
    @media ${mobile_device}{
        padding-top: 50px;
        padding-bottom: 20px;
    }
    @media ${tablet_device}{
        padding-top: 100px;
        padding-bottom: 70px;
    }
    &.overlay2::before {
        opacity: 0.85;
    }
    .single_team{
        margin-bottom: 30px;
        .team_thumb{
            ${border_radius('0px')};
            overflow: hidden;
            position: relative;
            img{
                width: 100%;
                height:auto;
                ${border_radius('0px')};
            }
            .team_hover{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: transparent ;
                ${transform("translateY(10%)")};
                ${transition('.3s')};
                
                opacity: 0;
                .hover_inner{
                    position: absolute;
                    left: 0;
                    right: 0;
                    margin: auto;
                    bottom: 20px;
                    ul{
                        li{
                            display: inline-block;
                            margin: 0 4px;
                            a{
                                width: 40px;
                                height: 40px;
                                ${border_radius('50%')};
                                line-height: 37px !important;
                                text-align: center;
                                font-size: 14px;
                                color: #fff;
                                border: 1px solid #615CFD;
                                display: inline-block;
                                background: #615CFD;
                                &:hover{
                                    background: #615CFD;
                                    border: 1px solid #615CFD;
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            } 
        }
        .team_title{
            padding-top: 28px;
            h3{
                font-size: 20px;
                font-family: ${ravi_light};
                color: #1F1F1F;
                font-weight: 400;
                margin-bottom: 7px;
            }
            p{
                font-size: 16px;
                margin-bottom: 0;
                font-weight: 400;
                color: #707070;
                font-family: ${ravi_light};
            }
        }
        &:hover{
            cursor: pointer;
            .team_hover{
                ${transform('translateY(0px)')};
                opacity: 1;
                ${transition('.3s')};
                border-radius:3px;
                border: 2px solid #5969d1;
                ${transform_time('.5s')};

                
                
            }
            h3 ,p{
                color:#5969d1;
            }
        }
    }
}

`;


