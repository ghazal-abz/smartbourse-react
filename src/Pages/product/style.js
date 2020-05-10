import styled from 'styled-components';
import {  transform_time ,transition} from '../../Components/variables/mixin';
import {font_1 ,border_color,baseColor,title_color,white_color,btn_bg, gray1} from '../../Components/variables/variable'
import { ravi_light } from '../../Components/variables/Font';


export const Productdiv = styled.div`
{

    margin:15px auto;
}

.product-image{
    width:100%;
}


product-description{
    text-align:justify;
    line-height: 30px;
}

.QNTinput{
    width:40%;
    margin-right: 10px;
    border-radius: 30px;
    border-color: #38a4ff;
    
}

.QNT{
    padding-top:5px;
}

.add-to-card > button{
    background-color: #f44a40;
    border-radius:30px;
    padding: 5px 16px;
    border: solid 2px #f44a40;
    color: white;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
}

.add-to-card > button:hover{
    background-color: #fff;
    border: solid 2px #f44a40;
    color:#f44a40;
    transition: all 0.2s ease-in-out;

}

.product-id>p{
    border: solid 2px #38a4ff;
    background-color: #38a4ff;
    border-radius: 30px;
    color:white;
    padding: 5px 15px;

}
.product-multi-info a  , .product-multi-info a {
color:#000;
}

a.active.show {
    background-color: #38a4ff;
    color: white;
    border-radius: 45px;
    transition: all 0.2s ease-in-out;
}

`