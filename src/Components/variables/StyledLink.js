import styled from 'styled-components';
// import {ravi_light} from './variable';
import {ravi_light} from '../variables/Font';
import {border_radius, transition} from '../variables/mixin'

export const StyledLink = styled.a`
.boxed-btn {
	background: #fff;
	color: #131313;
	display: inline-block;
	padding: 14px 44px;
	font-family: ${ravi_light};
	font-size: 16px;
    font-weight: 400;
    border: 0;
    border: 1px solid #615CFD;
    // width: 180px;
    text-align: center;
    color: #615CFD !important;
    text-transform: uppercase;
    cursor: pointer;
    &:hover{
        background: #615CFD;
        color: #fff !important;
        border: 1px solid #615CFD;
    }
    &:focus{
        outline: none;
    }
    &.large-width{
        width: 220px;
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
.boxed-btn4 {
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#0181f5+0,5db2ff+100 */
    background: #615CFD;
	color: #fff;
	display: inline-block;
	padding: 14px 27px;
	font-family: ${ravi_light};
	font-size: 16px;
    font-weight: 500;
    border: 0;
    // border: 1px solid transparent;
    ${border_radius('0px')};
    // width: 180px;
    text-align: center;
    color: #fff !important;
    text-transform: capitalize;
    ${transition('.5s')};
    cursor: pointer;
    letter-spacing: 2px;
    &:hover{
        background: #615CFD;
        color: #fff !important;
        // border: 1px solid #28AE61;
    }
    &:focus{
        outline: none;
    }
    &.large-width{
        width: 220px;
    }
}

.boxed-btn3-white {
	color: #fff;
	display: inline-block;
    padding: 13px 27px;
	font-family: ${ravi_light};
	font-size: 14px;
    font-weight: 400;
    border: 0;
    border: 1px solid #fff;
    ${border_radius('5px')};
    // width: 180px;
    text-align: center;
    color: #fff !important;
    text-transform: capitalize;
    ${transition('.5s')};
    cursor: pointer;
    letter-spacing: 2px;
    &:hover{
        background: #28AE61;
        color: #fff !important;
        border: 1px solid transparent;
    }
    i{
        margin-right: 2px;
    }
    &:focus{
        outline: none;
    }
    &.large-width{
        width: 220px;
    }
}

.boxed-btn3-green-2 {
	color: #615CFD !important;
	display: inline-block;
    padding: 14px 31px;
	font-family: ${ravi_light};
	font-size: 14px;
    font-weight: 400;
    border: 0;
    border: 1px solid #615CFD;
    ${border_radius('5px')};
    // width: 180px;
    text-align: center;
    text-transform: capitalize;
   ${transition('.5s')};
    cursor: pointer;
    letter-spacing: 2px;
    &:hover{
        background: #615CFD;
        color: #fff !important;
        border: 1px solid transparent;
    }
    &:focus{
        outline: none;
    }
    &.large-width{
        width: 220px;
    }
}
.boxed-btn2 {
	background: transparent;
	color: #fff;
	display: inline-block;
	padding: 18px 24px;
	font-family: ${ravi_light};
	font-size: 14px;
    font-weight: 400;
    border: 0;
    border: 1px solid #fff;
    letter-spacing: 2px;
    text-transform: uppercase;
    &:hover{
        background: #fff;
        color: #131313 !important;
    }
    &:focus{
        outline: none;
    }
}
.line-button{
    color: #919191;
    font-size: 16px;
    font-weight: 400;
    display: inline-block;
    position: relative;
    padding-right: 5px;
    padding-bottom: 2px;
    &::before{
        position: absolute;
        content: "";
        background: #919191;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
    }
    &:hover{
        color: #009DFF;
    }
    &:hover::before{
        background: #009DFF;
    }
}
.line_btn{
    display: inline-block;
    font-size: 15px;
    color: #615CFD;
    border: 1px solid #615CFD;
    text-transform: capitalize;
    padding: 13px 34px;
    font-weight: 600;
    &:hover{
        background: #615CFD;
        color: #fff;
    }
}
`;
