import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const legendHack= {
  background: 'none',
  position: 'absolute',
  bottom: '20px',
  top: '250px',
  fontFamily: 'Rock Salt, sans-serif'
}

const button= {
  border: 'none',
  background: '#FFD800',
  borderRadius: '30px',
  textTransform: 'uppercase',
  boxSizing: 'borderBox',
  padding: '15px 40px',
  fontWeight: '400',
  fontSize: '13px',
  cursor: 'pointer'
}

export default class LandingPage extends Component {
    render() {
        return (
          <Carousel autoPlay infiniteLoop emulateTouch showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} transitionTime={1000} >
              <div>
                  <div className='legend' style={legendHack}>
                    <h1 style={{fontSize: '50px', fontFamily: 'Rock Salt, sans-serif'}}> Trings</h1>
                    <h4 style={{fontSize: '20px', fontFamily: 'Rock Salt, sans-serif'}}> Unlock the gems in your city </h4>
                    <Link to='/city_gems'><button style={button}>Get Started</button></Link>
                   </div>
                  <img src="https://images.unsplash.com/photo-1511306404404-ad607bd7c601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="nature"/>
              </div>
              <div>
                <div className='legend' style={legendHack}>
                    <h1 style={{fontSize: '50px', fontFamily: 'Rock Salt, sans-serif'}}> Trings</h1>
                    <h4 style={{fontSize: '20px', fontFamily: 'Rock Salt, sans-serif'}}> Unlock the gems in your city </h4>
                    <button style={button}>Explore!</button>
                 </div>
                  <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="club" />
              </div>
              <div>
              <div className='legend' style={legendHack}>
                  <h1 style={{fontSize: '50px', fontFamily: 'Rock Salt, sans-serif'}}> Trings</h1>
                  <h4 style={{fontSize: '20px', fontFamily: 'Rock Salt, sans-serif'}}> Unlock the gems in your city </h4>
                  <button style={button}>Engage</button>
               </div>
                  <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="party" />
              </div>
          </Carousel>
        );
    }
}
