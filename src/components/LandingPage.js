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
          <Carousel autoPlay infiniteLoop emulateTouch showArrows={false} showIndicators={false}
             showStatus={false} showThumbs={false} transitionTime={1000} useKeyboardArrows={true} >
              <div>
                  <div className='legend' style={ legendHack }>
                    <h1 style={{ fontSize: '50px', fontFamily: 'Rock Salt, sans-serif', textShadow: '2px 2px 4px #000000' }}> Trings</h1>
                    <h4 style={{ fontSize: '20px', fontFamily: 'Rock Salt, sans-serif', textShadow: '2px 2px 4px #000000' }}> Unlock the gems in your city </h4>
                    <Link to='/city_gems/all'><button style={button}>Get Started</button></Link>
                   </div>
                  <img src="https://images.unsplash.com/photo-1511306404404-ad607bd7c601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="nature"/>
              </div>
              <div>
                <div className='legend' style={legendHack}>
                    <h1 style={{ fontSize: '50px', fontFamily: 'Rock Salt, sans-serif', textShadow: '2px 2px 4px #000000' }}> Trings</h1>
                    <h4 style={{ fontSize: '20px', fontFamily: 'Rock Salt, sans-serif', textShadow: '2px 2px 4px #000000' }}> Unlock the gems in your city </h4>
                    <Link to='/city_gems/all'><button style={button}>Explore</button></Link>
                 </div>
                  <img src="https://images.unsplash.com/photo-1543746379-7f4f6228a6da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="art exhibit" />
              </div>
              <div>
              <div className='legend' style={legendHack}>
                  <h1 style={{ fontSize: '50px', fontFamily: 'Rock Salt, sans-serif', textShadow: '2px 2px 4px #000000' }}> Trings</h1>
                  <h4 style={{ fontSize: '20px', fontFamily: 'Rock Salt, sans-serif', textShadow: '2px 2px 4px #000000' }}> Unlock the gems in your city </h4>
                  <Link to='/city_gems/all'><button style={button}>Engage</button></Link>
               </div>
                  <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="party" />
              </div>
              <div>
                  <div className='legend' style={legendHack}>
                    <h1 style={{ fontSize: '50px', fontFamily: 'Rock Salt, sans-serif', textShadow: '2px 2px 4px #000000' }}> Trings</h1>
                    <h4 style={{ fontSize: '20px', fontFamily: 'Rock Salt, sans-serif', textShadow: '2px 2px 4px #000000' }}> Unlock the gems in your city </h4>
                    <Link to='/city_gems/all'><button style={button}>Discover</button></Link>
                   </div>
                  <img src="https://images.unsplash.com/photo-1543788235-ccce98118c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="nature"/>
              </div>

          </Carousel>
        );
    }
}
