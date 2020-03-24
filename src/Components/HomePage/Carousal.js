import React, { useEffect } from 'react'
import M from 'materialize-css';
// import * from '../../resources/images/1.jpg'

export default function Carousel() {

    useEffect(()=>{
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {
                fullWidth: true,
                indicators: true
              });
          });
    })

    return (
        <div className="carouselTop">
            <div className="carousel carousel-slider center"id="caoruselelem">
                <div className="carousel-fixed-item center">
                <a className="btn waves-effect white grey-text darken-text-2 carouselButton" >See Demo</a>
                </div>
                    {/* first */}
                    <div className="carousel-item red white-text carousel1" href="#one!">
                        <img  className="responsive-img" src={require('../../resources/images/1.jpg')} />
                        <h2>First Panel</h2>
                        <p className="white-text">This is your first panel</p>
                    </div>

                    {/* second */}
                    <div className="carousel-item amber white-text" href="#two!">
                        <img src={require('../../resources/images/1.jpg')}/>
                        <h2>Second Panel</h2>
                        <p className="white-text">This is your second panel</p>
                    </div>

                    {/* third */}
                    <div className="carousel-item green white-text" href="#three!">
                        <img src={require('../../resources/images/1.jpg')}/>
                        <h2>Third Panel</h2>
                        <p className="white-text">This is your third panel</p>
                    </div>
                
                </div>
        </div>
    )
}
