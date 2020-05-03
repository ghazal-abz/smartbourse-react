import styled from 'styled-components';
import {  mobile_device } from '../variables/responsive';
import {ravi_light} from '../variables/Font';
import img1 from './banner/banner.png';
import img2 from './banner/banner2.png';

export const BannerDiv = styled.div`
.bradcam_bg_1{
    background-image: url(${img1});
}
.breadcam_bg_2{
    background-image: url(${img2});
}
.breadcam_bg_3{
    background-image: url(${img2});
}
.breadcam_bg_4{
    background-image: url(${img2});
}
.bradcam_area{
    
    background-size: cover;
    background-position: bottom;
    padding: 214px 0 92px 0;
    background-repeat: no-repeat;
    position: relative;
    z-index: 0;
    &::before{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #1F1F1F;
        opacity: .5;
        z-index: -1;
        content: '';
    }
    @media ${mobile_device} {
        padding: 140px 0 90px 0;
    }
    h3{
        font-size: 78px;
        color: #fff;
        font-weight: 400;
        margin-bottom: 0;
        text-transform: capitalize;
        font-family: ${ravi_light};
        @media ${mobile_device} {
            font-size: 30px;
        }
    }
    p{
        font-size: 18px;
        color: #fff;
        font-weight: 400;
        text-transform: capitalize;
        a{
            color: #fff;
            &:hover{
                color: #fff;
            }
        }
    }
}
`;
