import React from 'react';
import Player from './Player';
import { Link } from 'react-router-dom';

const Lyft = () => (
  <div className='lyft'>
    <div className='hero'></div>
    <div className='content'>
      <div className='container'>
      	<div className='nav'>
          <Link to='/hubble'> hubble </Link> //
          <Link to='/ba'> blue apron </Link> // 
          <Link to='/lyft' className='selected'> lyft </Link>
        </div>
        <h1>Lyft : Why drive lyft</h1>
        <p><span>Business problem : </span>The need to sign up more drivers in so-called 'major markets'</p>
        <p><span>Proposed solution : </span> A signup form that suggested 'major markets' based on user input </p>
        <p>Using google api + a database that mapped zips to their corresponding market this feature was able to suggest 1-2 major markets that were closest to the city the user was searching. Hypothesized that this was a <span>low friction solution </span>which would encourage major market selection without discouraging those not interested.</p>
        <div className='mobile-image player'>
        	<Player />
        </div>
      </div>
    </div>
  </div>
);

export default Lyft;
