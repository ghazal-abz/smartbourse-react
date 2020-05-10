import styled from 'styled-components';
import {  transform_time ,transition} from '../../Components/variables/mixin';
import {font_1 ,border_color,baseColor,title_color,white_color,btn_bg, gray1} from '../../Components/variables/variable'
import { ravi_light } from '../../Components/variables/Font';


export const Shopdiv = styled.div`

{

    margin:15px auto;
}

hr{
    width:90%;
}
.product-cart{
    border: solid 2px #9773dd00;
    transition: all 0.3s ease-in-out;
}
.product-cart:hover{
    border: solid 2px #9773dd61;
    border-radius: 18px;
    
    transition: all 0.1s ease-in-out;
}


.product-image{
    width:100%;
}
.QNTinput{
    width:40%;
    margin-right: 10px;
    border-radius: 30px;
    border-color: #38a4ff;
}

.product-category{
    font-size: 12px;
    color: #8a8a8a;
}
.product-discription{
    text-align:justify;
}

.add-to-card > button{
    background-color: #f44a40;
    border-radius:30px;
    padding: 5px 15px;
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
`