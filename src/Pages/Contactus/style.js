import styled from 'styled-components';

import {baseColor} from '../../Components/variables/variable';

import {  medium_device ,tab_device} from '../../Components/variables/variable';





export const ContactDiv = styled.div`

.dropdown .dropdown-menu {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  .contact-info{
    margin-bottom: 25px;
  
    &__icon{
      margin-right: 20px;
  
      i,span{
        color: #8f9195;
        font-size: 27px;
      }
    }
  
    .media-body{
  
      h3{
        font-size: 16px;
        margin-bottom: 0;
        font-size: 16px;
        color: #2a2a2a;
        a{
          &:hover{
            color: ${baseColor};
          }
        }
      }
  
      p{
        color: #8a8a8a;
      }
    }
  }
  /*=================== contact banner end ====================*/
  
  
  /*=================== contact form start ====================*/
  .contact-title{
    font-size: 27px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  
  .form-contact{
  
    label{
      font-size: 14px;
    }
  
    .form-group{
      margin-bottom: 30px;
    }
  
    .form-control{
      border: 1px solid #e5e6e9;
      border-radius: 0px;
      height: 48px;
      padding-left: 18px;
      font-size: 13px;
      background: transparent;
  
      &:focus{
        outline: 0;
        box-shadow: none;
      }
  
      &::placeholder{
        font-weight: 300;
        color: #999999;
      }
    }
  
    textarea{
      border-radius: 0px;
      height: 100% !important;
    }
  
    // button{
    //   border: 0;
    // }
  }
  
  /*=================== contact form end ====================*/
  
  /* Contact Success and error Area css
  ============================================================================================ */
  
  
  .modal-message {
      .modal-dialog {
          position: absolute;
          top: 36%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%) !important;
          margin: 0px;
          max-width: 500px;
          width: 100%;
          .modal-content {
              .modal-header {
                  text-align: center;
                  display: block;
                  border-bottom: none;
                  padding-top: 50px;
                  padding-bottom: 50px;
                  .close {
                      position: absolute;
                      right: -15px;
                      top: -15px;
                      padding: 0px;
                      color: #fff;
                      opacity: 1;
                      cursor: pointer;
                  }
                  h2 {
                      display: block;
                      text-align: center;
                      padding-bottom: 10px;
                  }
                  p {
                      display: block;
                  }
              }
          }
      }
  }
  .contact-section{
    padding: 130px 0 100px;
    @media ${tab_device}{
      padding: 70px 0 40px;
    }
    @media ${medium_device}{
      padding: 80px 0 50px;
    }
    .btn_2{
      background-color:#191d34;
      padding: 18px 60px;
      border-radius: 50px;
      margin-top: 0;
      &:hover{
        background-color: ${baseColor};
        
      }
    }
  }
  
  
  `;

