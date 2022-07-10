import React, {useState} from 'react'
import './Video.css'
import cover from "../images/cover.png";
import VideoCard from './VideoCard';


export default function Video() {
  const [showbutton, setshowbutton] = useState(true);
    const [playbtn, setPlayBtn] = useState(false)

    const favButtonPress = () => {
      setPlayBtn(true);
      var video = document.getElementsByTagName("video")[0];
      video.play();
      setshowbutton(false);
    };

    let videoPress = () =>{
        setPlayBtn(false)
    }

  return (
    <div>
        <div className="video-comtainer">
        
        <video className='video-set' onClick={videoPress} controls poster={cover}> 
        <source  className='video-set' controls  src="https://d3g01po1nkka75.cloudfront.net/Rashi160622.mp4" type="video/mp4"/> 
        </video>

        {showbutton ? (
          <> 
          
            <i onClick={favButtonPress} className="fa-solid fa-play"></i>
            <h2>Shop My Closet</h2>{" "} 
          
          
          </>  ) : ( <VideoCard/>)}
            
            {
              showbutton ? "" : (<h3>&#x21e6; &nbsp;&nbsp; Shop My Closet</h3>)
            }
        </div>
    </div>
  )
}