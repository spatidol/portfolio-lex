import React from 'react';
import { Link } from 'react-router-dom';


const Web = () => (
  <div className='web'>
    <div className='project-row'>
     <Link to='/hubble'>
      <div className='project-img'>
        <img alt='hubble' src='../img/hubble-cover.png' />
      </div>
      <div className='project-desc'>
        <h1>landing page optimization : hubble contacts</h1>
        <h2>Improving direct response flows & encouraging engagement with interactive content.</h2>
        <p>see more ></p>
      </div>
     </Link>
    </div>
    <div className='project-row'>
     <Link to='/ba'>
      <div className='project-img white'>
        <img alt='ba' src='../img/ba-cover.png' />
      </div>
      <div className='project-desc'>
        <h1>landing page optimization : blue apron</h1>
        <h2>Optimizing plan selection & landing page iterations.</h2>
        <p>see more ></p>
      </div>
     </Link>
    </div>
    <div className='project-row'>
     <Link to='/lyft'>
      <div className='project-img'>
        <img alt='lyft' className='lyft' src='../img/lyft-cover.png' />
      </div>
      <div className='project-desc'>
        <h1>building city selection : lyft</h1>
        <h2>A search feature that guided the user to major markets.</h2>
        <p>see more ></p>
      </div>
     </Link>
    </div>
 </div>
);

export default Web;
