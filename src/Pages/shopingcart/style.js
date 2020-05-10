
import styled from 'styled-components';
import {  transform_time ,transition} from '../../Components/variables/mixin';
import {font_1 ,border_color,baseColor,title_color,white_color,btn_bg, gray1} from '../../Components/variables/variable'
import { ravi_light } from '../../Components/variables/Font';


export const Shopingcartdiv = styled.div`
{
    background-color: #f3f3f3;
    margin: 20px auto;
    padding: 25px;
    border-radius:10px;
}

.product-image{
    width:100%;
}
.payment-btn{
    background: #ef394e;
    color: white;
    border: none;
    border-radius: 50px;
    font-weight: 500;
    border:solid 2px #ef394e00;
    transition: all 0.2s ease-in-out;
}


.payment-btn:hover{
    background: #fff;
    color: #ef394e;
    border:solid 2px #ef394e;
    border-radius: 50px;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
}

.product-summary{
    background-color: white;
    padding: 15px 5px;
    border-radius: 15px;
}

.cost-summary{
    background-color: white;
    padding: 15px 10px;
    border-radius: 15px;
}


`;