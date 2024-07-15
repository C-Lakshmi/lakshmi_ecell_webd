import {useState, useEffect} from "react";
import cloud from "./down/soundcloud.svg";

import audio1 from "./audio/Enchanted.mp3";
import song2 from "./right/enchanted.png"

const Down = (props) => {
    const song_reqd=props.song;
    const [music,setMusic]=useState(
        {Name: "Enchanted", img: song2, singer:"Taylor Swift", audio:audio1, link:"https://open.spotify.com/track/04S1pkp1VaIqjg8zZqknR5?si=8c8NhipNS8uvdxfxegH00Q", id:"2"}
   
    );
    
    useEffect(() => {

    setMusic(song_reqd);
    },[song_reqd]);
    
    console.log(music.link);
    return (
        <div className="Down">
            <div className="music">
            <img src={music.img} alt="song_img" />
            <div className="text"><div style={{display: "flex"}}>{music.Name}<img src={cloud} alt="soundwaves" id="waves"/></div>
            <div className="artist">{music.singer}</div>
            </div>
            <audio src={music.audio} controls></audio>
            <a href="#" id="heart-blue"></a>
            <a href="#" id="headphones"></a>
            <a href={music.link} target="_blank" id="sportify"></a>
            <a href="#" id="file"></a>
            <a href="#" id="music_icon"></a>
            </div>
        </div>
     );
}
 
export default Down;