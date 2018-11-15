import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

var array = ['print_024.jpg', 'print_020.jpg', 'print_040.jpg', 'print_036.jpg', 'print_028.jpg', 'print_014.jpg', 'print_018.jpg', 'print_035.jpg', 'print_021.jpg', 'print_027.jpg', 'print_034.jpg', 'print_029.jpg', 'print_016.jpg', 'print_017.jpg', 'print_015.jpg', 'print_031.jpg', 'print_023.jpg', 'print_039.jpg', 'print_037.jpg', 'print_030.jpg', 'print_033.jpg' ]


// const Graphic = () => (
//  <div className='graphic'>

//   {array.map((pic, idx) => <div key={idx} className ='square'><img alt='graphic' src={`http://res.cloudinary.com/dmwi5lxjc/image/upload/v1501777338/${pic}`}></img></div>)}
//  </div>
// );

const Graphic = () =>  (
    <Carousel className='graphics' showThumbs={true} showStatus={false} emulateTouch={true} showArrows={false} useKeyboardArrows={true} showIndicators={false}>
        {array.map((pic, idx) => <div key={idx} className ='square'><img alt='graphic' src={`http://res.cloudinary.com/dmwi5lxjc/image/upload/v1501777338/${pic}`}></img></div>)}
    </Carousel> 
);

export default Graphic;
