import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class LandingPage extends Component {
    render() {
        return (
          <Carousel autoPlay infiniteLoop emulateTouch showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} transitionTime={1000} >
              <div>
                  <img src="https://images.unsplash.com/photo-1511306404404-ad607bd7c601?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
              </div>
              <div>
                  <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
              </div>
              <div>
                  <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
              </div>
          </Carousel>
        );
    }
}
