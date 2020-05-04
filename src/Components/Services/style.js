import styled from 'styled-components';
import {  tablet_device, mobile_device } from '../variables/responsive';
import {border_radius, transition} from '../variables/mixin'


export const ServiceArea = styled.div`
    padding-top: 155px;
    padding-bottom: 130px;
    @media ${mobile_device} {
        padding-bottom: 40px;
        padding-top: 70px;
    }
    @media ${tablet_device} {
        padding-bottom: 50px;
    }
    .single_service{
        padding: 15px 25px 25px 25px;
        border: 2px solid #E8E8E8;
        ${transition('.3s')}
        margin-bottom: 30px;
        ${border_radius('5px')}
        @media ${tablet_device}{
            padding: 30px 20px;
        }
        .icon{
            img{
                height:110px;
            }
        }
        h3{
            font-size: 24px;
            font-weight: 400;
            color: #1F1F1F;
            margin-top:15px;
            margin-bottom: 15px;
            @media ${tablet_device} {
                font-size: 22px;
            }
        }
        p{
            color: #727272;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            margin-bottom: 0;
        }
        &:hover{
            border: 2px solid #615CFD;
        }
    }


`;

