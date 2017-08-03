import React from 'react';


const Web = () => (
 <div className='web'>
   <div className='as-block'><a href='http://artschool-usa.com/' target="_blank"><img src="./images/artsc.png" alt='artschool' className='as'></img></a></div>
   <div className='description float-left desc-as'><b>artschool</b> <br /> design // development <br /> a lifestyle brand & clothing line created by an art student <br /> html | css | javascript </div>
   <div className='description float-left br'><b>brunch</b> <br /> design // development <br /> for your basic brunch fix <br /> application that returns all brunch spots given a location search<br /> javascript | react | express | google api | html | css</div>
   <div className='br-block'><div className='line'></div><a href='https://brunchfix.herokuapp.com/' target="_blank"><img src="./images/brunch.png" alt='brunch' className='brunch'></img></a></div>
 </div>
);

export default Web;
