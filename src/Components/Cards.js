import React from 'react'
import './Cards.css';
import cardimg from "../images/cardimg.png";
export default function Cards() {
  return (
    <div>      
    <div className="taggedCard">
            <div className="tag-offer">% Offer Available</div>
            <img src={cardimg} alt="" />
            <h2>Olay</h2>
            <p className='paraone'>Olay White Radiance </p>
            <p className='paraone'>Creame </p>
            <p className='paratwo'>₹ <del>2500</del>
            <span className="off">(20% OFF)</span>
            </p>
            <p className='parathree'>₹ 2,000</p>

            <button className='cardbtn'>
                {" "} <a href="#" target="_blank">Shop Now</a>
            </button>
        </div>
    </div> 
  )
}
