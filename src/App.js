import React from 'react';
import './index.css';
import icon from './icons/melody_icon.png';
import search_icon from './icons/magnifying-glass-solid.svg'
import filter from './icons/image.png';
import bell from './icons/bell-solid.svg';
import arrow from './icons/down.svg';
import profile from './icons/profile_icon.png'

import Home from './Home';
import Leftbar from './Leftbar';

function App() {
  return (
    <div className="App">
      <div className="top">
      
      <img src={icon} alt="icon"></img>
      <div className="toptext">MELODY</div>
      
      <div className="search">
      <img src={search_icon} alt="icon"></img>
      <div className="searchtext"><input type="text" placeholder="Search music, artist, categories.." onMouseEnter={()=>{
        
      }}/></div>
      </div>
      
      <div className="filter">
        <img src={filter} alt="filter" />
        <div className="filtext">Filters</div>
      </div>
      
      <div className="bell">
      <img src={bell} alt="notifs" />
      </div>
      
      <div className="profile">
      <img src={arrow} alt="down" className="down" />
      <div className="name"><b>Elika</b><br></br>
      <span style={{
        color: 'rgb(2,2,84)',

      }}>Your profile</span>
      </div>
      <img src={profile} alt="profile_pic" className="profilepic" />
      </div>
      </div>
      <div className="full">
      < Leftbar/>
      <div className='main'>
      < Home/>
      </div>
      </div>
    </div>
  );
}

export default App;
