import React, { Component } from 'react';
import Slider from '../../Components/Slider/Slider';
import { Firstdiv } from './style'
import Arrow from '../../Components/arrow/Arrow';
import { Accordion } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


class FirstPB extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (

            <React.Fragment>
                <Slider />
                <Firstdiv>
                    <h1>عرضه اولیه چیست؟</h1>
                    <p>عرضه اولیه به سهام هایی گفته میشود که برای اولین بار در بورس و فرابورص به صورت عمومه عرضه شده و در دسترس مردم برای خرید قرار گرفته است.</p>
                    <h2>لیست عرضه اولیه های آتی</h2>


                    <Accordion >
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                شستا
                                <Arrow />
                      </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                                
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                های وب
                                <Arrow />
                             </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                پتروشیمی ماهشهر
                                <Arrow />
                             </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                               صنایع آذر آب
                               <Arrow />
                             </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>


                </Firstdiv>



            </React.Fragment>
        );
    }
}




var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length;) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
}




export default FirstPB;