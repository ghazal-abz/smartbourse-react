import React, { Component } from 'react';
import Slider from '../../Components/Slider/Slider';
import { Firstdiv } from './style'
import { ArrowSVG } from './style'
// import Arrow from '../../Components/arrow/Arrow';
import { Accordion } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


  var arRr = document.getElementsByClassName('arrowte');
class FirstPB extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {

        
        

        //   this.state = {
        //       arrowup : false,
        //   }

        //   arRr.onClick =>
        //     this.setState = {

        //         arrowup:false,
        //     }
            
        

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
                                <ArrowSVG>
                               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" id="Arroww" className=" svg-inline--fa fa-chevron-up fa-w-14 arrowte" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>  
                                </ArrowSVG>
                      </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                                
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                های وب
                                <ArrowSVG>
                               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" id="Arroww" className=" svg-inline--fa fa-chevron-up fa-w-14 arrowte" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>  
                                </ArrowSVG>
                             </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                پتروشیمی ماهشهر
                                <ArrowSVG>
                               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" id="Arroww" className=" svg-inline--fa fa-chevron-up fa-w-14 arrowte" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>  
                                </ArrowSVG>
                             </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                               صنایع آذر آب
                               <ArrowSVG>
                               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" id="Arroww" className=" svg-inline--fa fa-chevron-up fa-w-14 arrowte" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>  
                                </ArrowSVG>
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




// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length;) {
//     coll[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     })
// }




export default FirstPB;