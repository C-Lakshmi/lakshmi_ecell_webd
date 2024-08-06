import React from 'react';
import {one, two, three, four, five, six, seven, eight, nine} from './left_icons';
import { useState } from 'react';
const Leftbar = () => {
    const [menu, setMenu]=useState([
        {img: one, title: 'Home'},
        {img: two, title: 'Short'},
        {img: three, title: 'Library'},
        {img: four, title: 'Categories'},
        {img: five, title: 'Subscriptions'}
    ]);
    const [playlist,setPlaylist]=useState([
        {img: six, title: 'Create new'},
        {img: seven, title: 'Relax'},
        {img: seven, title: 'Motivation'}
    ]);
    const [end,setEnd]=useState([
        {img: eight, title: 'Help center'},
        {img: nine, title: 'Settings'},
    ]);
    return ( 
        <div className="left">
         <div className="menu">
          <div className="head" id="menutop">Menu</div>
          {menu.map((bar)=>(
           <div className="bar">
           <a href="#"><img src={bar.img} alt="icon"></img></a>
           <div className="text">{bar.title}</div>
           </div>
          ))}
         </div>
         <div className="menu">
         <div className="head">Playlist</div>
          {playlist.map((bar)=>(
           <div className="bar">
           <img src={bar.img} alt="icon"></img>
           <div className="text">{bar.title}</div>
           <br></br>
           </div>
          ))}
         </div>
         <div className="menu">
         <div className="head"></div>
          {end.map((bar)=>(
           <div className="bar">
           <img src={bar.img} alt="icon"></img>
           <div className="text">{bar.title}</div>
           </div>
          ))}
         </div>
         </div>
     );
}
 
export default Leftbar;