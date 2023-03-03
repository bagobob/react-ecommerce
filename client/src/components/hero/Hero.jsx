import React from 'react';
import './hero.styles.scss';

function Hero(props) {
    return (
       <section className="hero is-info is-large hero-image">
           <div className="hero-body">
               <h1 className="hero-title">
                   Bags reimagined for modern life.
               </h1>
               <div className="shop-now-btn">
                   <button className="button is-black" id="shop-now">
                      SHOP NOW
                   </button>
               </div>
           </div>
       </section>
    );
}

export default Hero;