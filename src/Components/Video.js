import React, {useState} from 'react'
import './Video.css'
import Cover from "../images/Cover.jpg";
import VideoCard from './VideoCard';


export default function Video() {
    const [playbtn, setPlayBtn] = useState(false)

    let videoPress = () =>{
        setPlayBtn(false)
    }

  return (
    <div>
        <div className="video-comtainer">
        
        <video className='video-set' onClick={videoPress} controls poster={Cover}> 
        <source  className='video-set' controls  src="https://d3g01po1nkka75.cloudfront.net/Rashi160622.mp4" type="video/mp4"/> 
        </video>
        <h2>Shop My Closet</h2>
        </div>
    <VideoCard />
    </div>
  )
}
