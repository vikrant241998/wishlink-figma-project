import React from "react";
import "./VideoCard.css";
export default function VideoCard() {
  return (
    <div>
      <div className="scrolling">
      
        <div className="box-container">
        <div className="card-container">
      <img src="./images/card-1.png" alt="" />
      <div className="card-text">
        <p className='one'>Trace</p>
        <p className='two'> &nbsp;Long red slit dress</p>
        <span className='three'> &nbsp;<i className="fa fa-inr" aria-hidden="true"></i>1,600</span> 
        <span className='four'> <del> <i className="fa fa-inr" aria-hidden="true"></i>2000</del></span> &nbsp;
        <span className='five'>(20% OFF)</span>        
      </div>
      <button className='cardBtn'><a href="https://home.wishlink.com/" target="_blank">Shop</a></button>
    </div>


    <div className="card-container">
      <img src="./images/card-1.png" alt="" />
      <div className="card-text">
        <p className='one'>Trace</p>
        <p className='two'> &nbsp;Long red slit dress</p>
        <span className='three'> &nbsp;<i className="fa fa-inr" aria-hidden="true"></i>1,600</span> 
        <span className='four'> <del> <i className="fa fa-inr" aria-hidden="true"></i>2000</del></span> &nbsp;
        <span className='five'>(20% OFF)</span>        
      </div>
      <button className='cardBtn'><a href="https://home.wishlink.com/" target="_blank">Shop</a></button>
    </div>

        </div>
      </div>
   
      
      
    </div>
  );
}
