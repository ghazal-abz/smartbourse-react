import styled from 'styled-components';
import {  mobile_device } from '../variables/responsive';



export const GetinDiv = styled.div`

.get_in_tauch_area{
    background-color: #6658d1;
    padding-top: 80px !important;
    padding-bottom: 30px !important;
    @media ${mobile_device} {
        padding-top: 70px;
        padding-bottom: 70px;
    }
}
.widget {
    margin-bottom: 30px;
    position: relative;
    .text-light{
            margin-bottom:30px;
        }
    .widget-title,
    >h4 {
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 24px;
        letter-spacing: 1px;
        margin-bottom: 20px;
    }

    &:after,
    &:before {
        clear: both;
        content: " ";
        display: table;
    }

    .flickity-page-dots {
        margin-bottom: 20px;
    }

    a {
        color: $color-body;
    }

    p {
        margin-bottom: 20px;
    }
}

.sidebar {
    .widget {
        border-bottom: 1px solid #eee;
        margin-bottom: 30px;
        padding-bottom: 30px;

        &:last-child {
            border-bottom: 0;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        #testimonials .testimonial-item>img {
            border-radius: 50%;
            display: block;
            float: none;
            height: 50px !important;
            margin: 0 auto 20px;
            width: 50px !important;
        }
    }
}

// Widget tags
.tags a {
    border: 2px solid $border-color;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
    outline: none;
    padding: 5px 14px;
    margin: 0 2px 5px 0;
    background-color: transparent;
    color: $color-body;
    display: inline-block;

    &:hover,
    &:focus,
    &:active,
    &.active {
        background-color: $color-theme;
        border-color: $color-theme;
        color: $color-white !important;
    }

    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
}

// Archive widgets
.widget-archive ul {
    padding-left: 0;
}

body {
    &.breakpoint-md .sidebar .widget {
        float: left;
        width: 330px;
    }

    &.breakpoint-sm .sidebar .widget {
        width: 100%;
    }

    &.breakpoint-md .sidebar .widget:nth-child(odd),
    &.breakpoint-sm .sidebar .widget:nth-child(odd) {
        margin-right: 30px;
    }
}

.flickr-widget,
.widget-instagram {
    opacity: 0;
    min-height: 225px;
    transition: opacity .3s ease;
    margin-bottom: 20px;

    &.widget-instagram-loaded,
    &.flickr-widget-loaded {
        opacity: 1;
    }

    a {
        img {
            width: 25%;
            height: auto;
            padding: 3px;
            border-radius: 6px;
        }
    }

    .col-lg-3>a img {
        padding: 2px;
        width: 25%;
    }

    .col-lg-4>a>img {
        width: 25%;
    }
}

body.breakpoint-sm .col-3 {
    .flickr-widget img .widget-instagram img {
        width: 16.666%;
    }
}

// social widget 
.widget .footer-widget .social-icon {
    background-color: rgba(0, 0, 0, 0.2);
}

// Newsletter widgets 
.widget.widget-newsletter {
    .input-group-text{
        border-top-right-radius:30px;
        border-bottom-right-radius:30px;
        background: #615CFD;
        color:#fff;
    }
    button {
        margin-left: -1px;
    }

    button {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }

    .btn {
        background: #615CFD;
        text-transform: none;
        border-top-left-radius:30px;
        border-bottom-left-radius:30px;
        height: 50px;
        color:#fff;
    }

    .form-control {
        width: 100%;
        border: 1px solid #C9C9C9;
        height: 50px;
        padding: 20px 16px;
        font-size: 14px;
        color: #000;
        font-weight: 400;
        direction: rtl !important;
        text-align: right !important;
    }

    .btn {
        font-size: 12px;
        font-weight: 600;
        padding: 8px 16px;
    }

    label.error {
        color: #e42c3e;
        display: none !important;
        font-weight: 400;
        margin-top: 5px;
    }
}

.background-dark .widget.widget-newsletter {
    .input-group-prepend {
        background-color: $color-white;
        color: $color-white;
    }

    .form-transparent-fields .form-control {
        border-left: 0;
        padding-left: 0;
    }
}

.form-control.error,
.sm-form-control.error {
    border-color: #e42c3e;
}

.widget-newsletter small {
    display: block;
}

// search widegt
.widget.widget-search {
    button {
        margin-left: -1px;
    }

    button {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }

    .btn {
        text-transform: none;
    }

    .btn {
        font-size: 12px;
        font-weight: 600;
        height: 40px;
        padding: 8px 16px;
    }
}

.background-dark .widget.widget-search .input-group-prepend {
    background-color: rgba(0, 0, 0, 0.35);
    border-color: rgba(0, 0, 0, 0.25);
    color: #999;
}

// Widget
#widget-contact-form {
    clear: left;
}

// Twitter
.widget-tweeter,
.widget-twitter {
    min-height: 248px;
}

.widget-tweeter:not([data-avatar="true"]) li {
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
}

.widget-tweeter:not([data-avatar="true"]) li:before,
.widget-twitter:not([data-avatar="true"]) li:before {
    margin-left: -22px;
    position: absolute;
    font-family: $font-icon-fontawesome-brands;
    content: "\f099";
}

.widget-tweeter[data-avatar="true"] li img,
.widget-twitter[data-avatar="true"] li img {
    border-radius: 50%;
    left: -4px;
    position: absolute;
    width: 26px;
    z-index: 3;
}

.widget-tweeter[data-avatar="true"] li,
.widget-twitter[data-avatar="true"] li {
    padding-left: 10px;
}

.widget-tweeter li,
.widget-twitter li {
    line-height: 1.66;
    margin-bottom: 20px;
}

.widget-tweeter li:last-child,
.widget-twitter li:last-child {
    margin-bottom: 0px;
}

.widget-tweeter ul,
.widget-twitter ul {
    list-style: none;
    padding-left: 22px;
    margin-bottom: 0;
}

.widget-tweeter small,
.widget-twitter small {
    display: block;
    color: $color-dark !important;
    width: 100%;
    margin-top: 10px;
}

.widget-newsletter .input-group-prepend i {
    color: #fff !important;
}

/*Widget: Contact us*/
.widget-contact-us ul {}

.widget-gallery a>img {
    float: left;
    height: auto;
    width: 33.3333333%;
    padding: 3px;
}

.p-dropdown-content {
    .widget-myaccount {
        min-width: 220px;
    }
}

.widget-myaccount {
    min-width: 220px;
    text-align: center;

    ul>li,
    >li {
        display: block;

        &:first-child {
            label {
                margin-top: 0;
            }
        }

        label {
            color: $color-light;
            font-size: 11px;
            text-transform: uppercase;
            margin-top: 14px;
            margin-bottom: 0;
        }

        a {
            line-height: 26px;
            white-space: nowrap;
            display: block;
            padding: 2px 8px;

            i {
                margin-right: 6px;
            }
        }
    }
}

//widget Calendar (datetimepicker)
.bootstrap-datetimepicker-widget .datepicker {
    width: 100%;
}

//widget My cart
.p-dropdown-content {
    .widget-mycart {
        min-width: 246px;
    }
}

.widget-mycart {
    width: 100%;
    position: relative;

    .cart-item {
        margin-top: 8px;
        display: inline-table;
        width: 100%;

        .cart-image {
            width: 50px;
            height: 50px;
            float: left;
            overflow: hidden;
            border-radius: 4px;

            img {
                width: 100%;
            }
        }

        .cart-product-meta {
            float: left;
            padding-left: 20px;

            >a {
                font-weight: 500;
                display: block;
            }

            span {
                opacity: .7;
            }
        }

        .cart-item-remove {
            width: 20px;
            float: right;
            font-size: 12px;

            i {
                color: $color-body !important;
            }
        }
    }

    .cart-total {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 4px;
        margin: 10px 0;

        .cart-total-labels {
            text-align: left;

            span {
                margin-bottom: 2px;
                display: block;
                font-weight: 500;

                strong {
                    font-size: 16px;
                    font-weight: 600;
                }
            }
        }

        .cart-total-prices {
            text-align: right;

            span {
                margin-bottom: 2px;
                display: block;
                font-weight: 500;

                strong {
                    font-weight: 600;
                    font-size: 16px;
                }
            }
        }
    }

    .cart-buttons .btn {
        margin-bottom: 0;
    }
}

//widget My cart
.p-dropdown-content {
    .widget-notification {
        min-width: 246px;
    }
}

.widget-notification {
    width: 100%;
    position: relative;

    .notification-item {
        display: flex;
        align-items: flex-start;
        margin-top: 12px;
        width: 100%;
        position: relative;

        &.notification-new::before {
            content: " ";
            background-color: $background-danger;
            width: 10px;
            height: 10px;
            position: absolute;
            border-radius: 50%;
            right: 0;
            top: 5px;
        }

        .notification-image {
            width: 36px;
            height: 36px;
            border-radius: 100%;
            overflow: hidden;

            img {
                width: 100%;
            }
        }

        .notification-meta {
            flex: 1px;
            padding-left: 12px;

            >a {
                font-weight: 500;
                display: block;
            }

            span {
                opacity: .6;
                font-size: 11px;
            }
        }
    }
}

/*Widget Tabs*/
.widget .tabs-content {
    margin-bottom: 0;
    padding-bottom: 0;
}

.sidebar .widget .tabs li>a {
    /*font-size: 11px;*/
    padding: 10px;
}

.sidebar .widget .tabs .tabs-navigation li {
    float: left;
    display: inherit;
}

.widget .post-thumbnail-content a {
    font-size: 13px;
    line-height: 20px;
    display: block;
}

.sidebar .widget .post-thumbnail-list .post-thumbnail-entry>img {
    height: 48px;
    margin-right: 10px;
    width: 64px;
}

.sidebar .widget .post-thumbnail-list .post-thumbnail-entry img+.post-thumbnail-content {
    padding-left: 72px;
}

.sidebar .widget .post-thumbnail-entry .post-thumbnail-content .post-date,
.post-thumbnail-entry .post-thumbnail-content .post-category {
    font-size: 11px;
}

.sidebar .widget .post-thumbnail-entry:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
}

/*Dark*/
.dark {
    .widget {
        .widget-title,
        >h4 {
            color: $color-white;
        }
    }
}

@include breakpoint-lg(max) {
    .widget {
        float: left;
        width: 100%;
    }
}

`;