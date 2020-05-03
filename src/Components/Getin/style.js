import styled from 'styled-components';
import {  mobile_device } from '../variables/responsive';
// import {ravi_light,ravi_light} from '../variables/variable';
import {ravi_light} from '../variables/Font';
import {border_radius,transition} from '../variables/mixin'

export const GetinDiv = styled.div`

.get_in_tauch_area{
    padding-top: 146px;
    padding-bottom: 160px;
    @media ${mobile_device} {
        padding-top: 70px;
        padding-bottom: 70px;
    }
    .touch_form{
        .single_input{
            input,textarea{
                width: 100%;
                border: 1px solid #C9C9C9;
                height: 50px;
                ${border_radius('30px')};
                padding: 20px 16px;
                margin-bottom: 25px;
                font-family: ${ravi_light};
                font-size: 14px;
                color: #000;
                font-weight: 400;
                direction: rtl !important;
                text-align: right !important;

                &::placeholder{
                    color: #707070;
                    font-size: 14px;
                    font-family: ${ravi_light};
                    font-weight: 400;
                }
                &:focus{
                    outline: none;
                }
            }
            textarea{
                height: 148px;
                resize: none;
            }
        }
        .submit_btn{
            .boxed-btn3{
                width: 100%;
                text-align: center;
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