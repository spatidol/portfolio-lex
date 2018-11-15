import React from 'react';
import { BaCarousel } from './Carousel';
import { Link } from 'react-router-dom';

const Ba = () => (
  <div className='ba'>
    <div className='hero'></div>
    <div className='content'>
      <div className='container'>
      	<div className='nav'>
          <Link to='/hubble'> hubble </Link> //
          <Link to='/ba' className='selected'> blue apron </Link> // 
          <Link to='/lyft'> lyft </Link>
        </div>
        <h1>Blue Apron</h1>
        <p>Some examples from landing page redesign and optimized direct response flows for partner Blue Apron. <br/>How do you remove the <span>friction from plan selection</span> with a meal kit? How do you highlight certain meals without increasing drop-off? Do you show the <span>full menu before signup?</span> These were some of the questions we asked while designing for Blue Apron.</p>
        <div className='lp-image'>
          <img src='../img/blue-apron.png' />
        </div>
        <h2>Re-imagining Plan Select</h2>
        <p><span>Hypothesis : </span> Users were dropping off at different points in the funnel because plan selection came after signup / it was not top of mind <span>what</span> you were getting while selecting your plan.</p>
        <p><span>One solution : </span> A new plan select that allowed users to see plans before signing up as well as how it works modules and a meal gallery, to remind users of what they were getting/signing up for. Generally saw <span>increased conversions </span>on iterations where these changes were implemented.</p>
        <div className='mobile-image'>

          <BaCarousel />
        </div>
      </div>
    </div>
  </div>
);

export default Ba;
