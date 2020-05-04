import styled from 'styled-components';
import { large_device, mid_device, tablet_device, mobile_device } from '../variables/responsive';
// import {ravi_light} from '../variables/variable';
import {ravi_light} from '../variables/Font';
import {justify_content, transition ,transform_time} from '../variables/mixin'

export const HeaderMain = styled.header`
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    top: 0;
    z-index: 99;
    .header-area{
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    top: 0;
    z-index: 99;
    @media ${mobile_device} {
        padding-top: 0;
    }
    @media ${tablet_device} {
        padding-top: 0;
    }
    .main-header-area{
        padding: 0 200px;
        @media ${mobile_device} {
            padding: 10px 10px;
            background: #1F1F1F;
        }
        @media ${tablet_device} {
            padding: 10px 10px;
            background: #1F1F1F;
        }
        @media ${mid_device} {
            padding: 0 30px;
        }
        @media ${large_device} {
            padding: 0 70px;
        }
        .logo-img{
            text-align: right;
            @media ${mobile_device} {
                text-align: left;
            }
            @media ${tablet_device} {
                // padding-left: 20px;
                text-align: left;
            }
            @media ${mid_device} {
                // padding-left: 20px;
                text-align: left;
            }
            img{
                height:70px;
            }
        }
        .main-menu{
            text-align: center;
            ul{
                li{
                    display: inline-block;
                    position: relative;
                    margin: 0 23px;
                    @media ${mid_device} {
                        
                    }
                    @media ${large_device} {
                        
                    }
                    a{
                        
                        font-size: 16px;
                        text-transform: capitalize;
                        font-weight: 600;
                        display: inline-block;
                        padding: 40px 0;
                        font-family: ${ravi_light};
                        position: relative;
                        
                        @media ${mid_device} {
                            // padding: 41px 0px 10px 0px;
                            font-size: 15px;
                        }
                        @media ${large_device} {
                            // padding: 41px 0px 10px 0px;
                            font-size: 15px;
                        }
                        i{
                            font-size: 9px;
                            @media ${mobile_device}{
                                display: none !important;
                            }
                            @media ${tablet_device}{
                                display: none !important;;
                            }
                        }
                        &.active{
                            &::before{
                                opacity: 1;
                                transform: scaleX(1);
                            }
                        }
                        &:hover{
                            color: #6959d1;
                            ${transition(.6)};
                            ${transform_time('.5s')};
                        }
                    }
                    .submenu {
                        position: absolute;
                        left: 0;
                        top: 140%;
                        background: #fff;
                        width: 200px;
                        z-index: 2;
                        box-shadow: 0 0  10px rgba(0,0,0,.02);
                        opacity: 0;
                        visibility: hidden;
                        text-align: left;
                        ${transition(.6)};
                        li{
                            display: block;
                            margin: 0;
                            a{
                                padding: 10px 15px;
                                position: inherit;
                               ${transition(.3)};
                                display: block;
                                color: #000;
                                &::before{
                                    display: none;
                                }
                            }
                            &:hover a{
                                color: #6959d1;
                            }
                        }
                    }
                    &:hover > .submenu{
                        opacity: 1;
                        visibility: visible;
                        top: 100%;
                    }
                    &:hover > a::before{
                        opacity: 1;
                        transform: scaleX(1);
                    }
                    &:first-child a {
                        padding-left: 0;
                    }
                }
            }
        }
        &.sticky {
            box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
            position: fixed;
            width: 100%;
            top: -70px;
            left: 0;
            right: 0;
            z-index: 999;
            transform: translateY(70px);
            transition: transform 500ms ease, background 500ms ease;
            -webkit-transition: transform 500ms ease, background 500ms ease;
            box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
            // padding: 0px 150px;
            background: #1F1F1F;
            // @media ${mobile_device} {
            //     padding: 10px 10px;
            // }
            // @media ${tablet_device} {
            //     padding: 10px 10px;
            // }
            // @media ${mid_device} {
            //     padding: 0px 20px;
            // }
            // @media ${large_device} {
            //     padding: 0px 20px
            // }
            .main-menu{
                padding: 0;
                ul{
                    li{
                        a{
                            /* color: #fff; */
                        }
                    }
                }
            }
            .log_chat_area{
                .say_hi{
                    color: #fff;
                }
            }
        }
        
        
    }
    .log_chat_area{
        /* ${justify_content('flex-end')}; */
        .say_hi{
            font-size: 16px;
            color: #fff;
            font-weight: 600;
            position: relative;
            z-index: 0;
            padding: 0 0 12px 0;
            margin-right: 0px;
            font-family: ${ravi_light};
            &:before{
                position: absolute;
                content: "";
                height: 3px;
                width: 100%;
                background: #615CFD;
                bottom: 0;
                left: 0;
                
            }
        }
    }
}


`;

