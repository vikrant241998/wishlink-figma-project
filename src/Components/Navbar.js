import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div>
        <div className="nav-container">
        <i className="fa-solid fa-arrow-left"></i>
        <div className="nav-box">
            <img src="./images/profile.png" alt="profile-image" />
            <h2>Maitreyi Dutta</h2>
            <img src="./images/verified.png" alt="verifi image" />

        </div>
        <i className="fa fa-search" aria-hidden="true"></i>
        </div>


    </div>
  )
}
