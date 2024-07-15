import sun from './images/sun-solid.svg';
import cloud from './images/cloud-solid.svg'
import { useState} from 'react';
import img3 from './images/guitar.png'
import img2 from './images/boy.jpg'
import img1 from './images/girl1.jpg'

import song2 from "./right/enchanted.png"
import audio2 from "./audio/Enchanted.mp3";

import Right from './Right';
import Down from './Down';

const Home = () => {
    const [cards,setCards]=useState([
        {title:"guitar",content:"50 Tracks", img: img1, id:"1", color: "magenta"},
        {title:"Party vibes",content:"25 Tracks", img: img2, id: "2", color:"white"},
        {title:"good times",content:"20 Tracks", img: img3, id: "3", color:"rgb(147, 183, 205)"}
    ]);
    const [newsong,setSong]=useState({Name: "Enchanted", img: song2, singer:"Taylor Swift", audio:audio2, link:"https://open.spotify.com/track/04S1pkp1VaIqjg8zZqknR5?si=8c8NhipNS8uvdxfxegH00Q", id:"2"});
    return ( 
        <div className="page">
        <div className="full">
        <div className="Home">
        <div className="box">
        <div className="greet">Hello, Elika !</div>
        <div className="text">Welcome home ! The air quality is<br></br>good & fresh</div>
        <div className="weather">
           <div style={{
            display: "flex"
           }}><img src={sun} alt="sun" className="sun" /><div style={{paddingTop: "0.3vw",paddingLeft: "0.1vw",fontSize:"1.2vw"}}>+25 C°</div></div>
           <div style={{
            display: "flex"
           }}><img src={cloud} alt="cloud" className="sun" /><div style={{paddingTop: "0.3vw",paddingLeft: "0.1vw",fontSize:"1.2vw"}}>Fuzzy Cloudy Weather</div></div></div>
        </div>
        <div className='discover'>Discover</div>
        <div className="cards">{
        cards.map((card)=>(
        <div className="card" key={card.id} style={{
            backgroundImage: `url(${card.img})`,
            color: `${card.color}`
        }}>
         <div className='title'>{card.title}</div> 
         <div className="text">{card.content}</div>  
        </div>
        ))}
        </div>
        </div>
        < Right setSong={setSong}/>
        </div>
        < Down song={newsong}/>
        </div>
     );
}
 
export default Home;