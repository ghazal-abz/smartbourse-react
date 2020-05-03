import styled from 'styled-components';
import { mobile_device } from '../variables/responsive';
// import {ravi_light,ravi_light} from '../variables/variable';
import {ravi_light} from '../variables/Font';
import {border_radius, transition} from '../variables/mixin'

export const Div = styled.div`
body {
	font-family: ${ravi_light};
	font-weight: normal;
    font-style: normal;
    
}

.img {
	max-width: 100%;
	${transition('.3s')};
}
a,
.button {
${transition('.3s')};
}
a:focus,
.button:focus,button:focus {
	text-decoration: none;
	outline: none;
}
a:focus{
	text-decoration: none;
}
a:focus,
a:hover,
.portfolio-cat a:hover,
.footer -menu li a:hover {
	text-decoration: none;
}
a,
button {
	color: #1F1F1F;
	outline: medium none;
}
h1,h2,h3,h4,h5{
	font-family: ${ravi_light};
	color: #1F1F1F;
}
h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
	color: inherit;
}

ul {
	margin: 0px;
	padding: 0px;
}
li {
	list-style: none
}
p {
	font-size: 16px;
	font-weight:400;
	line-height: 28px;
	color: #727272;
	margin-bottom: 13px;
	font-family: ${ravi_light};
}

label {
	color: #7e7e7e;
	cursor: pointer;
	font-size: 14px;
	font-weight: 400;
}
*::-moz-selection {
	background: #444;
	color: #fff;
	text-shadow: none;
}
::-moz-selection {
	background: #444;
	color: #fff;
	text-shadow: none;
}
::selection {
	background: #444;
	color: #fff;
	text-shadow: none;
}
*::-webkit-input-placeholder {
	color: #cccccc;
	font-size: 14px;
	opacity: 1;
}
*:-ms-input-placeholder {
	color: #cccccc;
	font-size: 14px;
	opacity: 1;
}
*::-ms-input-placeholder {
	color: #cccccc;
	font-size: 14px;
	opacity: 1;
}
*::placeholder {
	color: #cccccc;
	font-size: 14px;
	opacity: 1;
}

h3{
	font-size: 24px;
}

.mb-70{
	margin-bottom: 73px;
	@media ${mobile_device} {
		margin-bottom: 30px;
	}
}
// default-bg-color
.black-bg{
	background: #020c26 !important;
}

.white-bg{
	background: #ffffff;
}
.gray-bg{
	background: #f5f5f5;
}

// background-image
.bg-img-1{
    background-image: url(../img/slider/slider-img-1.jpg);
}
.bg-img-2{
    background-image: url(../img/background-img/bg-img-2.jpg);
}
.cta-bg-1{
    background-image: url(../img/background-img/bg-img-3.jpg);

}

.overlay{
	position: relative;
	z-index: 0;
}
.overlay::before{
	position: absolute;
	content: "";
	background-color: #1F1F1F;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	opacity: .8;
}

.overlay2{
	position: relative;
	z-index: 0;
}
.overlay2::before{
	position: absolute;
	content: "";
	background-color: #2C2C2C;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	opacity: 0.6;
}

.overlay_03{
	position: relative;
	z-index: 0;
}
.overlay_03::before{
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background: #2C2C2C;
	opacity: .6;
	content: '';
	z-index: -1;
}


.bradcam_overlay{
	position: relative;
	z-index: 0;
}
.bradcam_overlay::before{
	position: absolute;
	content: "";
	/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#5db2ff+0,7db9e8+100&1+24,0+96 */
background: -moz-linear-gradient(left,  rgba(93,178,255,1) 0%, rgba(101,180,249,1) 24%, rgba(124,185,233,0) 96%, rgba(125,185,232,0) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(left,  rgba(93,178,255,1) 0%,rgba(101,180,249,1) 24%,rgba(124,185,233,0) 96%,rgba(125,185,232,0) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right,  rgba(93,178,255,1) 0%,rgba(101,180,249,1) 24%,rgba(124,185,233,0) 96%,rgba(125,185,232,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5db2ff', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	opacity: 1;
}

.section-padding{
	padding-top: 120px;
	padding-bottom: 120px;
}
.pt-120{
	padding-top: 120px;
}

/* button style */
.owl-carousel {
	.owl-nav div {
		background: transparent;
		height: 40px;
		left: 0px;
		// opacity: 0;
		position: absolute;
		text-align: center;
		top: 50%;
		-webkit-transform: translateY(-50%);
			-ms-transform: translateY(-50%);
				transform: translateY(-50%);
		-webkit-transition: all 0.3s ease 0s;
		-o-transition: all 0.3s ease 0s;
		transition: all 0.3s ease 0s;
		// visibility: hidden;
		width: 40px;
		color: #FFFFFF;
		background-color: transparent;
		${border_radius('50%')};
		left: 50px;
		font-size: 15px;
		line-height: 40px;
		border: 1px solid #8E8B8B;
		left: 150px;
	}
	.owl-nav{
		div{
			&.owl-next{
				// left: 86px;
				// right: auto;
				left: auto;
				right: 150px;
				i{
					position: relative;
					right: 0;
					// top: 1px;
				}
			}
			&.owl-prev{
				i{
					position: relative;
					// right: 1px;
					top: 0px;
				}
			}
		}
	}
	&:hover{
		.owl-nav{
			div{
				opacity: 1;
				visibility: visible;
				&:hover{
					color: #fff;
					background: #615CFD;
					border: 1px solid transparent ;
				}
			}
		}
	}
}

.mb-20px{
	margin-bottom: 20px;
}

.mb-55{
	margin-bottom: 55px;
}
.mb-40{
	margin-bottom: 40px;
}
.mb-20{
	margin-bottom: 20px;
}



`;