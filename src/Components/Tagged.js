import React from 'react'
import './Tagged.css';
import Cards from "./Cards";

export default function Tagged({ productCount, productname }) {
    return (
        <>
          {/* <div className="taggedcontainer">
            <div className="head1">{productname}</div>
            <div className="cardcontainer">
              {[...Array(productCount)].map((e, i) => ( */}
                <Cards />
               {/* ))}
             </div>
           </div> */}
        </>
      );
    }