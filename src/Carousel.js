import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
const HubbCarousel = () =>  (
    <Carousel showThumbs={false} showStatus={false} emulateTouch={true} showArrows={false} centerMode={true} centerSlidePercentage={50} useKeyboardArrows={true}>
        <div>
            <img src="../img/mobile-mocks/hub-quiz-0.png" />
        </div>
        <div>
            <img src="../img/mobile-mocks/hub-quiz-1.png" />
        </div>
    </Carousel> 
);

const HubCarousel = () =>  (
    <Carousel showThumbs={false} showStatus={false} emulateTouch={true} showArrows={false} centerMode={true} centerSlidePercentage={50} useKeyboardArrows={true}>
        <div>
            <img src="../img/mobile-mocks/hub-0.png" />
        </div>
        <div>
            <img src="../img/mobile-mocks/hub-1.png" />
        </div>
        <div>
            <img src="../img/mobile-mocks/hub-2.png" />
        </div>
        <div>
            <img src="../img/mobile-mocks/hub-3.png" />
        </div>
        <div>
            <img src="../img/mobile-mocks/hub-4.png" />
        </div>
    </Carousel> 
);

const BaCarousel = () =>  (
    <Carousel showThumbs={false} showStatus={false} emulateTouch={true} showArrows={false} centerMode={true} centerSlidePercentage={50} useKeyboardArrows={true}>
        <div>
            <img src="../img/mobile-mocks/ba-1.png" />
        </div>
        <div>
            <img src="../img/mobile-mocks/ba-2.png" />
        </div>
        <div>
            <img src="../img/mobile-mocks/ba-3.png" />
        </div>
    </Carousel> 
);
 
export { HubCarousel, HubbCarousel, BaCarousel };