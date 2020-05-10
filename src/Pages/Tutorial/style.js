import styled from 'styled-components';
import {  transform_time ,transition} from '../../Components/variables/mixin';
import {font_1 ,border_color,baseColor,title_color,white_color,btn_bg, gray1} from '../../Components/variables/variable'
import { ravi_light } from '../../Components/variables/Font';


export const TutorialDiv = styled.div`

    padding-top: 120px;
    padding-bottom: 120px;

.latest-blog-area {
    .area-heading {
        margin-bottom: 70px;
    }
}
.blog_area{

}

.single-blog {
    overflow: hidden;
    margin-bottom: 30px;
   
    &:hover {
        box-shadow: 0px 10px 20px 0px rgba(42, 34, 123, 0.1);
    }

    .thumb {
        overflow: hidden;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0;
            ${transform_time('.5s')};
        }
    }

    h4 {
        //   ${transform_time('.5s')};
        border-bottom: 1px solid #dfdfdf;
        padding-bottom: 34px;
        margin-bottom: 25px;
    }

    a {
        // color: $dip;
        font-size: 20px;
        font-weight: 600;

        &:hover {
            // // color: ${baseColor};
        }
    }

    .date {
        color: #666666;
        text-align: left;
        display: inline-block;
        font-size: 13px;
        font-weight: 300;
    }

    .tag {
        // color: ${baseColor};
        text-align: left;
        display: inline-block;
        float: left;
        font-size: 13px;
        font-weight: 300;
        margin-right: 22px;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            width: 1px;
            height: 10px;
            background: #acacac;
            right: -12px;
            top: 7px;

        }

        @media(max-width:1199px) {
            margin-right: 8px;

            &:after {
                display: none;
            }
        }
    }

    .likes {
        margin-right: 16px;
    }

    @media(max-width:800px) {
        margin-bottom: 30px;
    }

    .single-blog-content {
        padding: 30px;

        .meta-bottom {
            p {
                font-size: 13px;
                font-weight: 300;
            }

            i {
                color: ${border_color};
                font-size: 13px;
                margin-right: 7px;
            }
        }

        @media(max-width:1199px) {
            padding: 15px;
        }
    }

    &:hover {
        .thumb {
            &:after {
                opacity: .7;
                ${transform_time('.5s')};
            }
        }
    }

    @media(max-width:1199px) {
        h4 {
            transition: all 300ms linear 0s;
            border-bottom: 1px solid #dfdfdf;
            padding-bottom: 14px;
            margin-bottom: 12px;

            a {
                font-size: 18px;
            }
        }
    }

}

.full_image.single-blog {
    position: relative;

    .single-blog-content {
        position: absolute;
        left: 35px;
        bottom: 0;
        opacity: 0;
        visibility: hidden;
        ${transform_time('.5s')};

        .meta-bottom {
            p {
                // color: ${white_color};
            }
        }

        @media (min-width: 992px) {
            bottom: 100px;
        }
    }

    h4 {
        ${transform_time('.5s')};
        border-bottom: none;
        padding-bottom: 5px;
    }

    a {
        // color: ${white_color};
        font-size: 20px;
        font-weight: 600;

        &:hover {
            // color: ${baseColor};
        }
    }

    .date {
        color: #fff;
    }

    &:hover {
        .single-blog-content {
            opacity: 1;
            visibility: visible;
            ${transform_time('.5s')};
        }
    }

}

/* End Blog Area css
============================================================================================ */



/* Latest Blog Area css
============================================================================================ */
.latest_blog_area {}

.latest_blog_inner {}

.l_blog_item {
    .l_blog_img {}

    .l_blog_text {
        .date {
            margin-top: 24px;
            margin-bottom: 15px;

            a {
                // color: ${ravi_light};
                font-size: 12px;
            }
        }

        h4 {
            font-size: 18px;
            // color: ${title_color};
            border-bottom: 1px solid #eeeeee;
            margin-bottom: 0px;
            padding-bottom: 20px;
            ${transform_time('.5s')};

            &:hover {
                // // color: ${baseColor};
            }
        }

        p {
            margin-bottom: 0px;
            padding-top: 20px;
        }
    }
}

/* End Latest Blog Area css
============================================================================================ */


/* Causes Area css
============================================================================================ */
.causes_area {}

.causes_slider {
    .owl-dots {
        text-align: center;
        margin-top: 80px;

        .owl-dot {
            height: 14px;
            width: 14px;
            background: #eeeeee;
            display: inline-block;
            margin-right: 7px;

            &:last-child {
                margin-right: 0px;
            }

            &.active {
                // background: ${baseColor};
            }
        }
    }
}

.causes_item {
    background: #fff;

    .causes_img {
        position: relative;

        .c_parcent {
            position: absolute;
            bottom: 0px;
            width: 100%;
            left: 0px;
            height: 3px;
            background: rgba(255, 255, 255, .5);

            span {
                width: 70%;
                height: 3px;
                // background: ${title_color};
                position: absolute;
                left: 0px;
                bottom: 0px;

                &:before {
                    content: "75%";
                    position: absolute;
                    right: -10px;
                    bottom: 0px;
                    // background: ${title_color}; 
                    color: #fff;
                    padding: 0px 5px;
                }
            }
        }
    }

    .causes_text {
        padding: 30px 35px 40px 30px;

        h4 {
            // color: ${title_color};
            // font-family: ${ravi_light};
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            cursor: pointer;

            &:hover {
                // // color: ${title_color};
            }
        }

        p {
            font-size: 14px;
            line-height: 24px;
            // color: ${ravi_light};
            font-weight: 300;
            margin-bottom: 0px;
        }
    }

    .causes_bottom {
        a {
            width: 50%;
            border: 1px solid;
            text-align: center;
            float: left;
            line-height: 50px;
            // background: ${title_color};
            color: #fff;
            // font-family: ${ravi_light};
            font-size: 14px;
            font-weight: 500;

            &+a {
                border-color: #eeeeee;
                background: #fff;
                font-size: 14px;
                // color: ${title_color};
            }
        }
    }
}

/* End Causes Area css
============================================================================================ */



/*================= latest_blog_area css =============*/
.latest_blog_area {
    background: #f9f9ff;
}

.single-recent-blog-post {
    margin-bottom: 30px;

    .thumb {
        overflow: hidden;

        img {
            transition: all 0.7s linear;
        }
    }

    .details {
        padding-top: 30px;

        .sec_h4 {
            line-height: 24px;
            padding: 10px 0px 13px;
            transition: all 0.3s linear;

            &:hover {
                // color: ${ravi_light};
            }
        }
    }

    .date {
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
    }

    &:hover {
        img {
            transform: scale(1.23) rotate(10deg);
        }
    }
}

.tags {
    .tag_btn {
        font-size: 12px;
        font-weight: 500;
        line-height: 20px;
        border: 1px solid #eeeeee;
        display: inline-block;
        padding: 1px 18px;
        text-align: center;

        // color: ${title_color};
        &:before {
            // background: ${title_color};
        }

        &+.tag_btn {
            margin-left: 2px;
        }
    }
}

/*========= blog_categorie_area css ===========*/
.blog_categorie_area {
    padding-top: 30px;
    padding-bottom: 30px;
    // background: ${gray1};

    @media(min-width: 900px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    @media(min-width: 1100px) {
        padding-top: 120px;
        padding-bottom: 120px;
    }
}

.categories_post {
    position: relative;
    text-align: center;
    cursor: pointer;

    img {
        max-width: 100%;
    }

    .categories_details {
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        bottom: 20px;
        background: rgba(34, 34, 34, 0.75);
        color: #fff;
        transition: all 0.3s linear;
        display: flex;
        align-items: center;
        justify-content: center;

        h5 {
            margin-bottom: 0px;
            font-size: 18px;
            line-height: 26px;
            text-transform: uppercase;
            color: #fff;
            position: relative;
            //          &:before{
            //              content: "";
            //              height: 1px;
            //              width: 100%;
            //              background: #fff;
            //              position: absolute;
            //              bottom: 0px;
            //              left: 0px;
            //          }
        }

        p {
            font-weight: 300;
            font-size: 14px;
            line-height: 26px;
            margin-bottom: 0px;
        }

        .border_line {
            margin: 10px 0px;
            background: #fff;
            width: 100%;
            height: 1px;
        }
    }

    &:hover {
        .categories_details {
            background: rgba(222, 99, 32, 0.85);
        }
    }
}



/*============ blog_left_sidebar css ==============*/
.blog_area {
    // background: ${gray1};
}

.blog_left_sidebar {}

.blog_item {
    margin-bottom: 50px;
    &:hover {
           cursor: pointer;
           h2 {
            color:${baseColor}
        }

        }
      
}

.blog_details {
    padding: 30px 0 20px 10px;
    box-shadow: 0px 10px 20px 0px rgba(221, 221, 221, 0.3);

    @media(min-width: 768px) {
        padding: 40px 25px 20px 25px;
    }

    p {
        margin-bottom: 25px;
        height: 75px;
        overflow: hidden;
    }

    a {
        color: ${font_1};

        &:hover {
            color: ${btn_bg};
        }
    }

    h2 {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 8px;

        @media(min-width: 768px) {
            font-size: 24px;
            margin-bottom: 15px;
        }
    }
}

.blog-info-link {
    list-style: none !important;
 
        width:100% !important;
        padding:0px!important;
        margin:0px!important;


        li {
        list-style: none!important;
        float: right;
        font-size: 14px;

        a {
            color: #999999;
        }

        i,
        span {
            font-size: 13px;
            margin-right: 5px;
        }

        &::after {
            content: "|";
            padding-left: 10px;
            padding-right: 10px;
        }

        &:last-child::after {
            display: none;
        }
    }



    &::after {
        content: "";
        display: block;
        clear: both;
        display: table;
    }
}

.blog_item_img {
    position: relative;
    img{
        height:200px;
        width:320px;
    }

    .blog_item_date {
        position: absolute;
        bottom: -10px;
        left: 10px;
        display: block;
        color: ${white_color};
        background-color: #615CFD;
        padding: 8px 15px;
        border-radius: 5px;
        &:hover, :hover{
            cursor: pointer;            

                }
        @media(min-width: 768px) {
            bottom: -20px;
            left: 40px;
            padding: 5px 15px;
        }

        h3 {
            font-size: 22px;
            font-weight: 600;
            color: ${white_color};
            margin-bottom: 0;
            line-height: 20px;

            @media(min-width: 768px) {
                font-size: 26px;
            }
        }

        p {
            font-size: 12px;
            margin-bottom: 0;
            color: ${white_color};

            @media(min-width: 768px) {
                font-size: 12px;
            }
        }
    }
}




.blog_right_sidebar {

    // border: 1px solid #eeeeee;
    // background: #fafaff;
    // padding: 30px;
    .widget_title {
        font-size: 20px;
        margin-bottom: 40px;
        // color: ${title_color};

        &::after {
            content: "";
            display: block;
            padding-top: 15px;
            border-bottom: 1px solid #f0e9ff;
        }
    }

    .single_sidebar_widget {
        background: #fbf9ff;
        padding: 30px;
        margin-bottom: 30px;
        .btn_1{
            margin-top: 0px;
            background: #fff;
            color: #131313;
            display: inline-block;
            padding: 14px 44px;
            font-family: ${ravi_light};
            font-size: 16px;
            font-weight: 400;
            border: 0;
            border: 1px solid #615CFD;
            // width: 180px;
            text-align: center;
            color: #615CFD !important;
            text-transform: uppercase;
            cursor: pointer;
            &:hover{
                background: #615CFD;
                color: #fff !important;
                border: 1px solid #615CFD;
                ${transform_time('.5s')};
            }
            &:focus{
                outline: none;
            }
            &.large-width{
                width: 220px;
            }

        }
    }


    .search_widget {

        .form-control {
            height: 50px;
            border-color: #f0e9ff;
            font-size: 13px;
            color: #999999;
            padding-left: 20px;
            border-radius: 0;
            border-right: 0;

            &::placeholder {
                color: #999999;
            }

            &:focus {
                border-color: #f0e9ff;
                outline: 0;
                box-shadow: none;
            }
        }

        .input-group {

            button {
                background: ${white_color};
                border-left: 0;
                border: 1px solid #f0e9ff;
                padding: 4px 15px;
                border-left: 0;

                i,
                span {
                    font-size: 14px;
                    color: #999999;
                }
            }
        }

    }

    .newsletter_widget {

        .form-control {
            height: 50px;
            border-color: #f0e9ff;
            font-size: 13px;
            color: #999999;
            padding-left: 20px;
            border-radius: 0;
            // border-right: 0;

            &::placeholder {
                color: #999999;
            }

            &:focus {
                border-color: #f0e9ff;
                outline: 0;
                box-shadow: none;
            }
        }

        .input-group {

            button {
                background: ${white_color};
                border-left: 0;
                border: 1px solid #f0e9ff;
                padding: 4px 15px;
                border-left: 0;

                i,
                span {
                    font-size: 14px;
                    color: #999999;
                }
            }
        }

    }


    .post_category_widget {
        .cat-list {
            list-style:none;
            li {
                border-bottom: 1px solid #f0e9ff;
                transition: all 0.3s ease 0s;
                padding-bottom: 12px;

                &:last-child {
                    border-bottom: 0;
                }

                a {
                    font-size: 14px;
                    line-height: 20px;
                    color: #888888;

                    p {
                        margin-bottom: 0px;
                    }
                }

                &+li {
                    padding-top: 15px;
                }

                &:hover, :hover{
            background: -webkit-linear-gradient( 131deg, #615CFD 0%, #615CFD 99%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-decoration: none;
            ${transform_time('.5s')};
        }
            }
        }
    }

    .popular_post_widget {
        .post_item {
            .media-body {
                justify-content: center;
                align-self: center;
                padding-right: 20px;

                h3 {
                    font-size: 16px;
                    line-height: 20px;
                    margin-bottom: 6px;
                    transition: all 0.3s linear;
                    color: ${font_1};

                }
                &:hover{
                    background: -webkit-linear-gradient( 131deg, #615CFD 0%, #615CFD 99%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-decoration: none;
                    ${transform_time('.5s')};
                    ${transition(.6)};

                }

                a {

                    // color: ${baseColor};
                    &:hover {
                        color: ${baseColor};
                        ${transform_time('.5s')};
                    }

                }

                p {
                    font-size: 14px;
                    line-height: 21px;
                    margin-bottom: 0px;
                }
            }

            &+.post_item {
                margin-top: 20px;
            }
        }
    }

    .tag_cloud_widget {
        ul {
            li {
                display: inline-block;
                
                a {
                    display: inline-block;
                    border: 1px solid #eeeeee;
                    background: ${baseColor};
                    padding: 4px 20px;
                    margin-bottom: 8px;
                    margin-right: 3px;
                    transition: all 0.3s ease 0s;
                    color: #888888;
                    font-size: 13px;

                    &:hover {
                        background: ${btn_bg};
                        color: #fff !important;
                        -webkit-text-fill-color: ${baseColor};
                        text-decoration: none;
                        -webkit-transition: 0.5s;
                        transition: 0.5s;
                    }
                }
            }
        }
    }

    .instagram_feeds {

        .instagram_row {
            padding:0;
            list-style:none;
            display: flex;
            margin-right: -6px;
            margin-left: -6px;


            li {
                width: 33.33%;
                float: left;
                padding-right: 6px;
                padding-left: 6px;
                margin-bottom: 15px;
            }
        }
    }







    // .author_widget{
    //     text-align: center;
    //     h4{
    //         font-size: 18px;
    //         line-height: 20px;
    //         // color: ${title_color};
    //         margin-bottom: 5px;
    //         margin-top: 30px;
    //     }
    //     p{
    //         margin-bottom: 0px;
    //     }
    //     .social_icon{
    //         padding: 7px 0px 15px;
    //         a{
    //             font-size: 14px;
    //             // color: ${title_color};
    //             transition: all 0.2s linear;
    //             & + a{
    //                 margin-left: 20px;
    //             }
    //             &:hover{
    //                 // color: ${title_color};
    //             }
    //         }
    //     }
    // }


    // .newsletter_widget{
    //     text-align: center;
    //     p{

    //     }
    //     .form-group{
    //         margin-bottom: 8px;
    //     }
    //     .input-group-prepend {
    //         margin-right: -1px;
    //     }
    //     .input-group-text {
    //         background: #fff;
    //         border-radius: 0px;
    //         vertical-align: top;
    //         font-size: 12px;
    //         line-height: 36px;
    //         padding: 0px 0px 0px 15px;
    //         border: 1px solid #eeeeee;
    //         border-right: 0px;

    //         i{
    //           color: #cccccc;
    //         }
    //     }
    //     .form-control{
    //         font-size: 12px;
    //         line-height: 24px;
    //         color: #cccccc;
    //         border: 1px solid #eeeeee;
    //         border-left: 0px;
    //         border-radius: 0px;
    //         @include placeholder{
    //             color: #cccccc;
    //         }
    //         &:focus{
    //             outline: none;
    //             box-shadow: none;
    //         }
    //     }
    //     .bbtns{
    //         background: ${title_color};
    //         color: #fff;
    //         font-size: 12px;
    //         line-height: 38px;
    //         display: inline-block;
    //         font-weight: 500;
    //         padding: 0px 24px 0px 24px;
    //         border-radius: 0;
    //     }
    //     .text-bottom{
    //         font-size: 12px;
    //     }
    // }

    .br {
        width: 100%;
        height: 1px;
        background: rgb(238, 238, 238);
        margin: 30px 0px;
    }
}


// .page-link {
//     background: transparent;
//     font-weight: 400;
// }

// .blog-pagination .page-item.active .page-link {
//     background-// color: ${title_color};
//     border-color: transparent;
//     color:#fff;
// }


.blog-pagination {
    margin-top: 80px;
}

.blog-pagination .page-link {
    font-size: 14px;
    position: relative;
    display: block;
    padding: 0;
    text-align: center;
    // padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 45px;
    width: 45px;
    height: 45px;
    border-radius: 0 !important;
    color: #8a8a8a;
    border: 1px solid #f0e9ff;
    margin-right: 10px;


    i,
    span {
        font-size: 13px;
    }

    &:hover {
        // background-color: ${baseColor};
        // color: ${white_color};
    }
}

.blog-pagination .page-item.active {
    .page-link {
        background-color: #fbf9ff;
        border-color: #f0e9ff;
        color: #888888;
    }
}

.blog-pagination .page-item:last-child .page-link {
    margin-right: 0;
}

// .blog-pagination .page-link .lnr {
//     font-weight: 600;
// }

// .blog-pagination .page-item:last-child .page-link,
// .blog-pagination .page-item:first-child .page-link {
//     border-radius: 0;
// }

// .blog-pagination .page-link:hover {
//     color: #fff;
//     text-decoration: none;
//     background-// color: ${title_color};
//     border-color: #eee;
// }



/*============ Start Blog Single Styles  =============*/

.single-post-area {
    .blog_details {
        box-shadow: none;
        padding: 0;
    }

    .social-links {
        padding-top: 10px;

        li {
            display: inline-block;
            margin-bottom: 10px;

            a {
                color: #cccccc;
                padding: 7px;
                font-size: 14px;
                transition: all 0.2s linear;

                &:hover {
                    // color: ${title_color};
                }
            }
        }
    }

    .blog_details {
        padding-top: 26px;

        p {
            margin-bottom: 20px;
            font-size: 15px;
        }

        h2 {
            // color: ${title_color};
        }
    }

    .quote-wrapper {
        background: rgba(130, 139, 178, 0.1);
        padding: 15px;
        line-height: 1.733;
        color: #888888;
        font-style: italic;
        margin-top: 25px;
        margin-bottom: 25px;

        @media(min-width: 768px) {
            padding: 30px;
        }
    }

    .quotes {
        background: ${white_color};
        padding: 15px 15px 15px 20px;
        border-left: 2px solid;

        @media(min-width: 768px) {
            padding: 25px 25px 25px 30px;
        }
    }

    .arrow {
        position: absolute;

        .lnr {
            font-size: 20px;
            font-weight: 600;
        }
    }

    .thumb {
        .overlay-bg {
            background: rgba(#000, .8);
        }
    }

    .navigation-top {
        padding-top: 15px;
        border-top: 1px solid #f0e9ff;

        p {
            margin-bottom: 0;
        }

        .like-info {
            font-size: 14px;

            i,
            span {
                font-size: 16px;
                margin-right: 5px;
            }
        }

        .comment-count {
            font-size: 14px;

            i,
            span {
                font-size: 16px;
                margin-right: 5px;
            }
        }

        .social-icons {

            li {
                display: inline-block;
                margin-right: 15px;

                &:last-child {
                    margin: 0;
                }

                i,
                span {
                    font-size: 14px;
                    color: #999999;
                }

                &:hover {

                    i,
                    span {
                        // // color: ${baseColor};
                    }
                }
            }
        }
    }


    .blog-author {
        padding: 40px 30px;
        background: #fbf9ff;
        margin-top: 50px;

        @media(max-width: 600px) {
            padding: 20px 8px;
        }

        img {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            margin-right: 30px;

            @media(max-width: 600px) {
                margin-right: 15px;
                width: 45px;
                height: 45px;
            }
        }

        a {
            display: inline-block;

            // color: ${title_color};
            &:hover {
                color: ${btn_bg};
            }
        }

        p {
            margin-bottom: 0;
            font-size: 15px;
        }

        h4 {
            font-size: 16px;
        }
    }



    .navigation-area {
        border-bottom: 1px solid #eee;
        padding-bottom: 30px;
        margin-top: 55px;

        p {
            margin-bottom: 0px;
        }

        h4 {
            font-size: 18px;
            line-height: 25px;
            // color: ${title_color};
        }

        .nav-left {
            text-align: left;

            .thumb {
                margin-right: 20px;
                background: #000;

                img {
                    ${transform_time('.5s')};
                }
            }

            .lnr {
                margin-left: 20px;
                opacity: 0;
                ${transform_time('.5s')};
            }

            &:hover {
                .lnr {
                    opacity: 1;
                }

                .thumb {
                    img {
                        opacity: .5;
                    }
                }
            }

            @media(max-width:767px) {
                margin-bottom: 30px;
            }
        }

        .nav-right {
            text-align: right;

            .thumb {
                margin-left: 20px;
                background: #000;

                img {
                    ${transform_time('.5s')};
                }
            }

            .lnr {
                margin-right: 20px;
                opacity: 0;
                ${transform_time('.5s')};
            }

            &:hover {
                .lnr {
                    opacity: 1;
                }

                .thumb {
                    img {
                        opacity: .5;
                    }
                }
            }
        }
    }

    .sidebar-widgets {
        @media(max-width: 991px) {
            padding-bottom: 0px;
        }
    }
}

.comments-area {
    background: transparent;
    // border: 1px solid #eee;
    border-top: 1px solid #eee;
    padding: 45px 0;
    margin-top: 50px;

    @media(max-width: 414px) {
        padding: 50px 8px;
    }

    h4 {
        // text-align: center;
        margin-bottom: 35px;
        // color: ${title_color};
        font-size: 18px;
    }

    h5 {
        font-size: 16px;
        margin-bottom: 0px;
    }

    a {
        // color: ${title_color};
    }

    .comment-list {
        padding-bottom: 48px;

        &:last-child {
            padding-bottom: 0px;
        }

        &.left-padding {
            padding-left: 25px;
        }

        @media(max-width:413px) {
            .single-comment {
                h5 {
                    font-size: 12px;
                }

                .date {
                    font-size: 11px;
                }

                .comment {
                    font-size: 10px;
                }
            }
        }
    }

    .thumb {
        margin-right: 20px;

        img {
            width: 70px;
            border-radius: 50%;
        }
    }

    .date {
        font-size: 14px;
        color: #999999;
        margin-bottom: 0;
        margin-left: 20px;
    }

    .comment {
        margin-bottom: 10px;
        color: #777777;
        font-size: 15px;
    }

    .btn-reply {
        background-color: transparent;
        color: #888888;
        // border:1px solid #eee;
        padding: 5px 18px;
        font-size: 14px;
        display: block;
        font-weight: 400;
        //  @include transform_time(.5s);
        // &:hover {
        //     background-// color: ${title_color};
        //     color: #fff;
        //     font-weight: 700;
        // }
    }
}

.comment-form {
    // background:#fafaff;
    // text-align: center;
    border-top: 1px solid #eee;
    padding-top: 45px;
    margin-top: 50px;
    margin-bottom: 20px;

    .form-group {
        margin-bottom: 30px;
    }

    h4 {
        // text-align: center;
        margin-bottom: 40px;
        font-size: 18px;
        line-height: 22px;
        // color: ${title_color};
    }

    .name {
        padding-left: 0px;

        @media(max-width: 767px) {
            padding-right: 0px;
            margin-bottom: 1rem;
        }
    }

    .email {
        padding-right: 0px;

        @media(max-width: 991px) {
            padding-left: 0px;
        }
    }

    .form-control {
        border: 1px solid #f0e9ff;
        border-radius: 5px;
        height: 48px;
        padding-left: 18px;
        font-size: 13px;
        background: transparent;

        &:focus {
            outline: 0;
            box-shadow: none;
        }

        &::placeholder {
            font-weight: 300;
            color: #999999;
        }

        &::placeholder {
            color: #777777;
        }
    }

    textarea {
        padding-top: 18px;
        border-radius: 12px;
        height: 100% !important;
    }

    ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        font-size: 13px;
        color: #777;
    }

    ::-moz-placeholder {
        /* Firefox 19+ */
        font-size: 13px;
        color: #777;
    }

    :-ms-input-placeholder {
        /* IE 10+ */
        font-size: 13px;
        color: #777;
    }

    :-moz-placeholder {
        /* Firefox 18- */
        font-size: 13px;
        color: #777;
    }
}



/*============ End Blog Single Styles  =============*/

`;
