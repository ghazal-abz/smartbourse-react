import React, { Component } from 'react';
import Slider from '../../Components/Slider/Slider';
import { SignUpDiv } from './style'

class SignUp extends Component {
    render() {
        return (
            <React.Fragment>
                <Slider />
                <SignUpDiv>
                
                    <h3 class="text-uppercase">افتتاح حساب</h3>
                    <p></p>
                    <div class="m-t-30">
                        <form class="widget-contact-form rtl" action="/open-account/" role="form" method="post">
                            <input type="hidden" name="csrfmiddlewaretoken" value="ngCaUlCGhjFnUXZHa8cSB8oqAItKq3786vpTKeEstDxyqtmySidI57Rt7KFvfyGt" />
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="id_full_name">نام و نام خانوادگی</label>
                                    <input type="text" name="full_name" maxlength="100" aria-required="true" class="form-control required name" required="" placeholder="نام خود را وارد نمایید" id="id_full_name" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="id_email">شماره تماس</label>
                                    <input type="text" name="phone" maxlength="10" aria-required="true" class="form-control required name" required="" placeholder="شماره تماس خود را وارد نمایید" id="id_phone" />
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="id_email">کد ملی</label>
                                    <input type="text" name="national_code" maxlength="10" aria-required="true" class="form-control required name" required="" placeholder="کد ملی خود را وارد نمایید" id="id_national_code" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label for="id_from_where">میزان سرمایه فعال مورد نظر شما برای سرمایه گذاری در بورس</label>
                                    <select name="investment" aria-required="true" class="form-control required name" required="" id="id_investment">
                                        <option value="" selected="">---------</option>
                                        <option value="under 100 milion">زیر 100 میلیون تومان</option>
                                        <option value="between 100 to 500 milion">از 100 تا 500 میلیون تومان</option>
                                        <option value="between 500 milion to 1 miliard">از 500 میلیون تا یک میلیارد تومان</option>
                                        <option value="between 1 to 5 miliard">از 1 تا 5 میلیارد تومان</option>
                                        <option value="between 5 to 10 miliard">از 5 تا 10 میلیارد توامن</option>
                                        <option value="above 10 miliard">بیش از 10 میلیارد تومان</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                    <label for="id_subject">میزان آشنایی شما با بازار بورس چقدر است</label>
                                    <select name="familiarity" aria-required="true" class="form-control required name" required="" id="id_familiarity">
                                        <option value="" selected="">---------</option>
                                        <option value="low">کم</option>
                                        <option value="Moderate">متوسط</option>
                                        <option value="well">خوب</option>
                                        <option value="high">عالی</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group center">
                                    <button class="btn" type="submit" id="form-submit"><i class="fa fa-paper-plane" aria-hidden="true"></i>&nbsp;افتتاح حساب</button>
                                </div>
                            </div>
                        </form>
                    </div>
                
                </SignUpDiv>
            </React.Fragment>
        )
    }
}

export default SignUp;