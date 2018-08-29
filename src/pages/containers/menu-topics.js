import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import lupa from '../../images/lupa.png'

function MenuTopics(props){
  return(
    <div className='container-menu'>
      <ul className="topic-list hidden-xs">
        <li>
          <Link to='/topics'>FEATURED</Link>
        </li>
        <li>
          <Link to='/topics'>MEDITATION</Link>
        </li>
        <li>
          <Link to='/topics'>LIFESTYLE</Link>
        </li>
        <li>
          <Link to='/topics'>TRAVEL</Link>
        </li>
        <li>
          <Link to='/topics'>MINDFULNESS</Link>
        </li>
        <li>
          <Link to='/topics'>SPIRITUAL</Link>
        </li>
        <li>
          <img src={lupa} />
        </li>
      </ul>
    </div>
  )
}

export default MenuTopics;
