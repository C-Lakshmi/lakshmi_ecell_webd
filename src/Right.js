import { useState } from "react";
import img1 from "./right/walker.png"
import img2 from "./right/taylor.png"
import img3 from "./right/atif.png"

import song1 from "./right/asitwas.jpg"
import song2 from "./right/enchanted.png"
import song3 from "./right/pachtaoge.jpg"
import song4 from "./right/dil.jpg"

import audio1 from "./audio/As-It-Was.mp3";
import audio2 from "./audio/Enchanted.mp3";
import audio3 from "./audio/Pachtaoge.mp3";
import audio4 from "./audio/Dil.mp3";

const Right = (props) => {
    const [topSingers,setTopSingers]=useState([
        {Name:"Alan Walker", img:img1, id:"1"},
        {Name: "Taylor Swift", img: img2, id:"2"},
        {Name: "Atif Aslam", img:img3, id:"3"}
    ]);
    const [songs,setSongs]=useState([
        {Name:"As It Was", img:song1, singer:"Harry Styles", audio:audio1, id:"1"},
        {Name: "Enchanted", img: song2, singer:"Taylor Swift", audio:audio2, id:"2"},
        {Name: "Pachtaoge", img:song3, singer:"Arijit Singh", audio:audio3, id:"3"},
        {Name:"Dil", img:song4, singer:"Shreya Ghoshal", audio:audio4, id:"4"}
    ]);
    const passId=(song)=>{
        props.setSong(song);
        }
    
    return ( 
        <div className="Right">
           <div className="singers">
            <div className="head">favourite artist</div>
            {topSingers.map((singer)=>(
             <div className="singer">
             <img src={singer.img} alt="icon"></img>
             <div className="text">{singer.Name}</div>
             <button style={{fontSize: "1.1vw"}}>Subscribe</button>
             </div>
            ))}
           </div>
           <div className="songs">
           <div className="head">Recently Played</div>
           {songs.map((song)=>(
            <div className="song" onClick={()=>{
                passId(song);
            }}>
            <img src={song.img} alt="song" />
            <div className="text">{song.Name}
            <div className="artist">{song.singer}</div>
            </div>
            <a href="#"></a>
            </div>
           ))}
           </div>
        </div>
     );
}
 
export default Right;