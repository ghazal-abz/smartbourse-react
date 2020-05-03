import styled from 'styled-components';
import {  tablet_device, mobile_device } from '../../Components/variables/responsive';
import {border_radius, transition} from '../../Components/variables/mixin'


export const TutorialDiv = styled.div`
    /* top:40%;
    padding-top: 155px; */
    padding-bottom: 130px;
    @media ${mobile_device} {
        padding-bottom: 40px;
        padding-top: 70px;
    }
    @media ${tablet_device} {
        padding-bottom: 50px;
    }
    .single_service{
        padding: 48px 35px 45px 35px;
        border: 2px solid #E8E8E8;
        ${transition('.3s')}
        margin-bottom: 30px;
        ${border_radius('5px')}
        @media ${tablet_device}{
            padding: 30px 20px;
        }
        .icon{

        }
        h3{
            font-size: 24px;
            font-weight: 400;
            color: #1F1F1F;
            margin-top: 29px;
            margin-bottom: 13px;
            @media ${tablet_device} {
                font-size: 22px;
            }
        }
        p{
            color: #727272;
            font-size: 16px;
            font-weight: 400;
            line-height: 30px;
            margin-bottom: 0;
        }
        &:hover{
            border: 2px solid #615CFD;
        }
    }


`;

