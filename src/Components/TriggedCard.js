import React from 'react'
import './TriggedCard.css';
import cardimg from "../images/cardimg.png";

export default function TriggedCard() {
  return (
    <div>
          <div className="T-container">
                <div className="T-heading">
                    <h1>Tagged Products (2)</h1>
                </div>
                 <div className="T-box">
                    <div className="T-card">
                        <img src={cardimg} alt="" />
                        <div className='T-offer'>% Offer Available</div>
                        <div className='T-olay'>OLAY</div>
                        <h2 className='T-para1'>Olay White Radiance</h2>
                        <h2 className='T-para2'>Creame</h2>

                        <span className="spanone">                        
                        <i className="fa fa-inr" aria-hidden="true"></i>
                        <del>2500</del> <span className='T-off'>(20% OFF)</span> 
                        </span>
                        <br />

                        <span className='spantwo'>
                        <i className="fa fa-inr" aria-hidden="true"></i>
                        <span className='T-off2'>2,000</span>
                        </span>
                        <br />
                        <button className='btn'> <a href="#"> Shop Now</a></button>

                    </div>
                </div>
            </div>
    </div>
  )
}
