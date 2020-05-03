import React, { Component } from 'react';
import {TutorialDiv } from './style';
import Banner from '../../Components/Banner/Banner';

class Tutorial extends Component {
    render() {
        return (
            <React.Fragment>
            <Banner />
            <TutorialDiv>
                 <section class="blog_area section-padding">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-4">
                                <div class="blog_right_sidebar">
                                    <aside class="single_sidebar_widget search_widget">
                                        <form action="#">
                                            <div class="form-group">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control" placeholder='دنبال چه چیزی هستید ...'
                                                        onfocus="this.placeholder = ''"
                                                        onblur="this.placeholder = 'دنبال چه چیزی هستید ...'" />
                                                    <div class="input-group-append">
                                                        <button class="btn" type="button"><i class="ti-search"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                                type="submit">جست وجو</button>
                                        </form>
                                    </aside>

                                    <aside class="single_sidebar_widget post_category_widget">
                                        <h4 class="widget_title">دسته بندی مقالات</h4>
                                        <ul class="list cat-list">
                                            <li>
                                                <a href="#" class="d-flex">
                                                    <p>بورس جهانی</p>
                                                    <p>(۱۲)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="d-flex">
                                                    <p>خبر سهام</p>
                                                    <p>(۱۶)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="d-flex">
                                                    <p>الگوریتم برتر</p>
                                                    <p>(۱۰)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="d-flex">
                                                    <p>محصولات</p>
                                                    <p>(۲)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="d-flex">
                                                    <p>خرید و فروش</p>
                                                    <p>(۱۰)</p>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="d-flex">
                                                    <p>بورس ایران</p>
                                                    <p>(۱۰)</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </aside>

                                    <aside class="single_sidebar_widget popular_post_widget">
                                        <h3 class="widget_title">محصولات اخیر</h3>
                                        <div class="media post_item">
                                            <img src="img/post/post_1.png" alt="post" />
                                            <div class="media-body">
                                                <a href="single-blog.html">
                                                    <h3>بازار سهام با بهره گرفتن از دانش روز و ابزار نوین</h3>
                                                </a>
                                                <p> ۱۲ فروردین ۱۳۹۹ </p>
                                            </div>
                                        </div>
                                        <div class="media post_item">
                                            <img src="img/post/post_2.png" alt="post" />
                                            <div class="media-body">
                                                <a href="single-blog.html">
                                                    <h3>بازار سهام با بهره گرفتن از دانش روز و ابزار نوین</h3>
                                                </a>
                                                <p>5 ساعت پیش</p>
                                            </div>
                                        </div>
                                        <div class="media post_item">
                                            <img src="img/post/post_3.png" alt="post" />
                                            <div class="media-body">
                                                <a href="single-blog.html">
                                                    <h3> در شبکه های اجتماعی تلگرام و اینستاگرام دنبال میکند طوری</h3>
                                                </a>
                                                <p>2 ساعت پیش</p>
                                            </div>
                                        </div>
                                        <div class="media post_item">
                                            <img src="img/post/post_4.png" alt="post" />
                                            <div class="media-body">
                                                <a href="single-blog.html">
                                                    <h3> در شبکه های اجتماعی تلگرام و اینستاگرام دنبال میکند طوری</h3>
                                                </a>
                                                <p>1 ساعت پیش</p>
                                            </div>
                                        </div>
                                    </aside>
                                    {/* <aside class="single_sidebar_widget tag_cloud_widget">
                                        <h4 class="widget_title">Tag Clouds</h4>
                                        <ul class="list">
                                            <li>
                                                <a href="#">project</a>
                                            </li>
                                            <li>
                                                <a href="#">love</a>
                                            </li>
                                            <li>
                                                <a href="#">technology</a>
                                            </li>
                                            <li>
                                                <a href="#">travel</a>
                                            </li>
                                            <li>
                                                <a href="#">restaurant</a>
                                            </li>
                                            <li>
                                                <a href="#">life style</a>
                                            </li>
                                            <li>
                                                <a href="#">design</a>
                                            </li>
                                            <li>
                                                <a href="#">illustration</a>
                                            </li>
                                        </ul>
                                    </aside> */}


                                    <aside class="single_sidebar_widget instagram_feeds">
                                        <h4 class="widget_title">پست های اخیر اینستاگرام</h4>
                                        <ul class="instagram_row flex-wrap">
                                            <li>
                                                <a href="#">
                                                    <img class="img-fluid" src="img/post/post_5.png" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="img-fluid" src="img/post/post_6.png" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="img-fluid" src="img/post/post_7.png" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="img-fluid" src="img/post/post_8.png" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="img-fluid" src="img/post/post_9.png" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img class="img-fluid" src="img/post/post_10.png" alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </aside>


                                    <aside class="single_sidebar_widget newsletter_widget">
                                        <h4 class="widget_title">با ما در تماس باشید</h4>

                                        <form action="#">
                                            <div class="form-group">
                                                <input type="email" class="form-control" onfocus="this.placeholder = ''"
                                                    onblur="this.placeholder = 'Enter email'" placeholder='شماره تماس خود را وارد کنید' required />
                                            </div>
                                            <button class="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                                                type="submit">ارسال</button>
                                        </form>
                                    </aside>
                                </div>
                            </div>                     
                            <div class="col-lg-8 mb-5 mb-lg-0">
                                <div class="col-lg-12">
                                    <div class="col-lg-6" style={{float:"right"}}>
                                        <div class="blog_left_sidebar">
                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="img/gallery/4.png" alt="" />
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>فروردین</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="single-blog.html">
                                                    <h2>مقاله سهام در بازار جهانی</h2>
                                                </a>
                                                <p> تلاش ما رسیدن به راهکارهای هوشمندانه جهت بالا بردن بازدهی معاملات در بازار سهام با بهره گرفتن از دانش روز و ابزار نوین میباشد</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-angle-left"></i> بیشتر بدانید ...</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="img/gallery/5.png" alt="" />
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>فروردین</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="single-blog.html">
                                                    <h2>مقاله سهام در بازار جهانی</h2>
                                                </a>
                                                <p> تلاش ما رسیدن به راهکارهای هوشمندانه جهت بالا بردن بازدهی معاملات در بازار سهام با بهره گرفتن از دانش روز و ابزار نوین میباشد</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-angle-left"></i> بیشتر بدانید ...</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="img/gallery/3.png" alt="" />
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>فروردین</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="single-blog.html">
                                                    <h2>مقاله سهام در بازار جهانی</h2>
                                                </a>
                                                <p> تلاش ما رسیدن به راهکارهای هوشمندانه جهت بالا بردن بازدهی معاملات در بازار سهام با بهره گرفتن از دانش روز و ابزار نوین میباشد</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-angle-left"></i> بیشتر بدانید ...</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="img/gallery/4.png" alt="" />
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>فروردین</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="single-blog.html">
                                                    <h2>مقاله سهام در بازار جهانی</h2>
                                                </a>
                                                <p> تلاش ما رسیدن به راهکارهای هوشمندانه جهت بالا بردن بازدهی معاملات در بازار سهام با بهره گرفتن از دانش روز و ابزار نوین میباشد</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-angle-left"></i> بیشتر بدانید ...</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="img/gallery/5.png" alt="" />
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>فروردین</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="single-blog.html">
                                                    <h2>مقاله سهام در بازار جهانی</h2>
                                                </a>
                                                <p> تلاش ما رسیدن به راهکارهای هوشمندانه جهت بالا بردن بازدهی معاملات در بازار سهام با بهره گرفتن از دانش روز و ابزار نوین میباشد</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-angle-left"></i> بیشتر بدانید ...</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                    </div>
                            
                                    </div>
                                    <div class="col-lg-6" style={{float:"right"}}>
                                        <div class="blog_left_sidebar">
                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="img/gallery/3.png" alt="" />
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>فروردین</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="single-blog.html">
                                                    <h2>مقاله سهام در بازار جهانی</h2>
                                                </a>
                                                <p> تلاش ما رسیدن به راهکارهای هوشمندانه جهت بالا بردن بازدهی معاملات در بازار سهام با بهره گرفتن از دانش روز و ابزار نوین میباشد</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-angle-left"></i> بیشتر بدانید ...</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="img/gallery/5.png" alt="" />
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>فروردین</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="single-blog.html">
                                                    <h2>مقاله سهام در بازار جهانی</h2>
                                                </a>
                                                <p> تلاش ما رسیدن به راهکارهای هوشمندانه جهت بالا بردن بازدهی معاملات در بازار سهام با بهره گرفتن از دانش روز و ابزار نوین میباشد</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-angle-left"></i> بیشتر بدانید ...</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="img/gallery/4.png" alt="" />
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>فروردین</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="single-blog.html">
                                                    <h2>مقاله سهام در بازار جهانی</h2>
                                                </a>
                                                <p> تلاش ما رسیدن به راهکارهای هوشمندانه جهت بالا بردن بازدهی معاملات در بازار سهام با بهره گرفتن از دانش روز و ابزار نوین میباشد</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-angle-left"></i> بیشتر بدانید ...</a></li>
                                                </ul>
                                            </div>
                                        </article>

                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="img/gallery/5.png" alt="" />
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>فروردین</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="single-blog.html">
                                                    <h2>مقاله سهام در بازار جهانی</h2>
                                                </a>
                                                <p> تلاش ما رسیدن به راهکارهای هوشمندانه جهت بالا بردن بازدهی معاملات در بازار سهام با بهره گرفتن از دانش روز و ابزار نوین میباشد</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-angle-left"></i> بیشتر بدانید ...</a></li>
                                                </ul>
                                            </div>
                                        </article>


                                        <article class="blog_item">
                                            <div class="blog_item_img">
                                                <img class="card-img rounded-0" src="img/gallery/3.png" alt="" />
                                                <a href="#" class="blog_item_date">
                                                    <h3>15</h3>
                                                    <p>فروردین</p>
                                                </a>
                                            </div>

                                            <div class="blog_details">
                                                <a class="d-inline-block" href="single-blog.html">
                                                    <h2>مقاله سهام در بازار جهانی</h2>
                                                </a>
                                                <p> تلاش ما رسیدن به راهکارهای هوشمندانه جهت بالا بردن بازدهی معاملات در بازار سهام با بهره گرفتن از دانش روز و ابزار نوین میباشد</p>
                                                <ul class="blog-info-link">
                                                    <li><a href="#"><i class="fa fa-angle-left"></i> بیشتر بدانید ...</a></li>
                                                </ul>
                                            </div>
                                        </article>
                                </div>
                                {/* <nav class="blog-pagination justify-content-center d-flex">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a href="#" class="page-link" aria-label="Previous">
                                                    <i class="ti-angle-left"></i>
                                                </a>
                                            </li>
                                            <li class="page-item">
                                                <a href="#" class="page-link">1</a>
                                            </li>
                                            <li class="page-item active">
                                                <a href="#" class="page-link">2</a>
                                            </li>
                                            <li class="page-item">
                                                <a href="#" class="page-link" aria-label="Next">
                                                    <i class="ti-angle-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav> */}
                                    </div>

                                </div>
                            </div>
                        
                        </div>
                    </div>
                </section>
            </TutorialDiv>
            </React.Fragment>
        )
    }
}
export default Tutorial;