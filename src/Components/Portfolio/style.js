
import styled from 'styled-components';
import {  mid_device, tablet_device, mobile_device } from '../variables/responsive';
// import {ravi_light,ravi_light} from '../variables/variable';
import {ravi_light} from '../variables/Font';
import {border_radius, transition,transform} from '../variables/mixin'


export const PortfolioDiv = styled.div`



    padding-top: 147px;
    padding-bottom: 130px;
    position: relative;
    @media ${mobile_device} {
        padding-top: 70px;
        padding-bottom: 40px;
    }
    &.dec_margin{
        margin-top: 0;
        padding-top: 150px;
        padding-bottom: 150px;
        @media ${mobile_device} {
            padding: 50px 0; 
        }
        @media ${tablet_device} {
            padding: 70px 0; 
        }
        @media ${mid_device} {
            padding: 100px 0; 
        }
    }
    .single_Portfolio{
        position: relative;
        margin-bottom: 30px;
        overflow: hidden;
        ${border_radius('5px')}
        .portfolio_thumb{
            height: 350px;
            ${border_radius('5px')}
            overflow: hidden;
            @media ${mobile_device} {
                height: auto;
            }
            img{
                width: 100%;
                height: 100%;
                ${border_radius('5px')}
            }
        }
        .portfolio_hover{
            padding:10px;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            background: #fff;
            border: 0;
            ${transform('scale(.9)')};
            ${transition('.5s')}
            opacity: 0;
            overflow: hidden;
            ${border_radius('5px')}
            .title{
                position: absolute;
                top: 20%;
                left: 0;
                right: 0;
                text-align: center;
                ${transform('translateY('-50%')')};
            }
            span{
                font-size: 14px;
                color: #615CFD;
                font-weight: 400;
                font-family: ${ravi_light};
            }
            h3{
                color: #1F1F1F;
                font-size:24px ;
                font-weight: 700;
                margin-top: 11px;
                margin-bottom: 25px;
            }
            .boxed-btn3{
                margin-top:3%;
                &:hover{
                    border: 1px solid #615CFD !important;
                    color: #615CFD !important;
                    background: #fff !important;
                }
            }
        }
        &:hover .portfolio_hover{
            ${transform('scale(1)')};
            opacity: 1;
        }
    }   
    .more_portfolio{
        margin-top: 60px;
    }
    .popup {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 9;
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


export const PortfolioDetail =styled.div`
.portfolio_details_banner{
    background: #1F1F1F;
    padding-top: 220px;
    padding-bottom: 470px;
    @media ${mobile_device}{
        padding: 100px 0;
    }
    .details_info{
        h3{
            font-size: 78px;
            font-weight: 400;
            color: #fff;
            text-align: center;
            margin-bottom: 62px;
            @media ${mobile_device} {
                font-size: 30px;
                margin-bottom: 30px;
            }
        }
        .details_links{
            @media ${mobile_device} {
                display: block !important;
                text-align: center;
            }
            .single_details{
                @media ${mobile_device}{
                    margin-bottom: 30px;
                }
                span{
                    color: #C9C9C9;
                    font-size: 12px;
                    font-weight: 400;
                    display: block;
                    margin-bottom: 9px;
                    font-family: ${ravi_light};
                }
                h4{
                    font-family: ${ravi_light};
                    font-size: 16px;
                    font-weight: 400;
                    color: #fff;
                }
                .social_links{
                    ul{
                        li{
                            display: inline-block;
                            margin-right: 21px;
                            @media ${mobile_device}{
                                margin: 0 5px;
                            }
                            a{
                                color: #fff;
                                font-size: 16px;

                                &:hover{
                                    color: #615CFD;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

.portfolio_details_wrap{
    padding-bottom: 130px;
    position: relative;
    margin-top: -380px;
    @media ${mobile_device}{
        padding-bottom: 60px;
    }
    @media ${mobile_device} {
        margin-top: 60px;
    }
    .banner{
        img{
            width: 100%;
        }
    }
    .details_text{
        margin-bottom: 70px;
        margin-top: 80px;
        @media ${mobile_device} {
            margin: 30px 0;
        }
        p{

        }
    }
    .thumbs{
        .single_thumb{
            margin-bottom: 30px;
            img{
                width: 100%;
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

