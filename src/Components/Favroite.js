import React from 'react'
import './Favroite.css';
import dress from "../images/dress.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";


export default function Favroite() {
  return (
    <div>
        <div className="fav-container">
            <div className="header-box">
            <div className="header">More from my favourites</div>
            <div className="para">Shop all my posts specially curated for you</div>
            </div>
            <div className="row">
                <div className="column">
                    <img className="one" src={img1} alt="" />
                    <img className="two" src={dress} alt="" />
                    <img className="three" src={img2} alt="" />
                    <img className="four" src={img3} alt="" />
                </div>

                <div className="column">
                    <img className="five" src={dress} alt="" />
                    <img className="six" src={img1} alt="" />
                    <img className="seven" src={img1} alt="" />
                    <img className="eight" src={img3} alt="" />
                </div>
            </div>

            <button className="fav-button"><a href="#">See All Products</a> </button>
            <div className="fav-para">Powered by WishLink</div>
        </div>
    </div>
  )
}
