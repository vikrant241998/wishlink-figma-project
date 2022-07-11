import React from 'react'
import './CompleteMyLook.css';
import MylookCard from "./MylookCard"

export default function CompleteMyLook({ productCount, productname }) {
  return (
    <>    
        <div className="MylookContainer">
            <div className="heading">{productname}</div>
            <div className="MylookBox">
              {[...Array(productCount)].map((e, i) => (
                <MylookCard />
               ))}
             </div>
           </div>           
    </>
  )
}
