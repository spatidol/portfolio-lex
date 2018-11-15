import React from 'react';
import { HubCarousel, HubbCarousel } from './Carousel';
import { Link } from 'react-router-dom';

const Hubble = () => (
  <div className='hubble'>
    <div className='content'>
      <div className='container'>
        <div className='nav'>
          <Link to='/hubble' className='selected'> hubble </Link> //
          <Link to='/ba'> blue apron </Link> // 
          <Link to='/lyft'> lyft </Link>
        </div>
        <h1>Hubble Contacts</h1>
        <p>Various landing page redesign and optimization for Hubble. Specific examples include improvements to direct response and checkout flows. Constantly iterating + hypothesizing based on data from users' interaction with the pages.</p>
        <p><span>One problem : </span> Data showed a drop-off at the doctor step in the checkout flow</p>
        <p><span>Hypothesis : </span> People either couldn't find their doctors or weren't expecting to have to enter/know that information (most traffic on mobile)</p>
        <p><span>Solution : </span> Bringing part of the lower funnel into a DR flow could help draw users in earlier, while also providing more information upfront, potentially prepping/weeding out users</p>
        <div className='lp-image'>
          <img src='../img/hubble-b.png' />
        </div>
        <div className='mobile-image'>
          <HubCarousel />
        </div>
        <h2>Increasing Engagement</h2>
        <p>More engaging pages (quizzes, games) tend to yield higher CRs with our audiences, and there is a constant need for new & fresh ideas. <span>Always the challenge : </span> increase conversions without lowering ltvs.</p>
        <p>We found a happy medium with quizzes that were interactive but also informative. Provide the 'fun' while still educating audiences on the product + eye health.</p>
        <div className='mobile-image'>
          <HubbCarousel />
        </div>
      </div>
    </div>
  </div>
);

export default Hubble;
