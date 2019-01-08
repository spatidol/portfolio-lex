import React from 'react';
import { Link } from 'react-router-dom';


const Web = () => (
  <div className='web'>
    <div className='project-row'>
      <Link className='project-img' to='/hubble'>
        <img alt='hubble' src='../img/hubble-cover.png' />
      </Link>
      <div className='project-desc'>
        <Link to='/hubble'><h1>landing page optimization : hubble contacts</h1></Link>
        <h2>Improving direct response flows & encouraging engagement with interactive content.</h2>
        <Link to='/hubble'><p>see more ></p></Link>
      </div>
    </div>
    <div className='project-row'>
      <Link className='project-img white' to='/ba'>
        <img alt='ba' src='../img/ba-cover.png' />
      </Link>
      <div className='project-desc'>
        <Link to='/ba'><h1>landing page optimization : blue apron</h1></Link>
        <h2>Optimizing plan selection & landing page iterations.</h2>
        <Link to='/ba'><p>see more ></p></Link>
      </div>
    </div>
    <div className='project-row'>
      <Link className='project-img' to='/lyft'>
        <img alt='lyft' className='lyft' src='../img/lyft-cover.png' />
      </Link>
      <div className='project-desc'>
        <Link to='/lyft'><h1>building city selection : lyft</h1></Link>
        <h2>A search feature that guided the user to major markets.</h2>
        <Link to='/lyft'><p>see more ></p></Link>
      </div>
    </div>
 </div>
);

export default Web;
