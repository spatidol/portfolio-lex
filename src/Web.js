import React from 'react';
import { Link } from 'react-router-dom';
import Hubble from './Hubble';
import Lyft from './Lyft';
import Ba from './Ba';


const Web = () => (
  <div className='web'>
    <div className='project-row'>
     <Link to='/hubble' component={Hubble}>
      <div className='project-img'>
        <img src='../img/hubble-cover.png' />
      </div>
      <div className='project-desc'>
        <h1>landing page optimization : hubble contacts</h1>
        <h2>Improving direct response flows & ecouraging engagement with interactive content.</h2>
        <p>see more ></p>
      </div>
     </Link>
    </div>
    <div className='project-row'>
     <Link to='/ba' component={Ba}>
      <div className='project-img white'>
        <img src='../img/ba-cover.png' />
      </div>
      <div className='project-desc'>
        <h1>landing page optimization : blue apron</h1>
        <h2>Optimizing plan selection & landing page iterations.</h2>
        <p>see more ></p>
      </div>
     </Link>
    </div>
    <div className='project-row'>
     <Link to='/lyft' component={Lyft}>
      <div className='project-img'>
        <img className='lyft' src='../img/lyft-cover.png' />
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
