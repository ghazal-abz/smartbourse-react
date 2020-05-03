import React, { Component } from 'react';
import {TutorialDiv } from './style';
import Banner from '../../Components/Banner/Banner';

class Tutorial extends Component {
    render() {
        return (
            <TutorialDiv>
             <Banner />
            </TutorialDiv>
        )
    }
}
export default Tutorial;