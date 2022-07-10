import React from 'react'
import './Cards.css';
import cardimg from "../images/cardimg.png";
export default function Cards() {
  return (
    <div>
       {/* <div className="Card-box">
            <img src={cardimg} alt="" />
        </div>
        <p className="olay">OLAY</p>
        <p className="paraone">Olay With Radiance</p>
        <p className="paraone">Creame</p>
        <p className="paratwo">₹ <del>1000</del> 
        <span className='c-off'>(20% OFF)</span></p>
        <p className="parathree">₹ 2,000</p>
      <div className="cardbtn"><a href="#">Shop Now</a></div>
       */}


    <div className="taggedCard">
            <div className="tag-offer">% Offer Available</div>
            <img src={cardimg} alt="" />
            <h2>Olay</h2>
            <p className='paraone'>Olay White Radiance </p>
            <p className='paraone'>Creame </p>
            <p className='paratwo'>₹ <del>2500</del>
            <span className="off">(20% OFF)</span>
            </p>
            <button className='cardbtn'>
                {" "} <a href="#" target="_blank">Shop Now</a>
            </button>
        </div>
    </div> 
  )
}
