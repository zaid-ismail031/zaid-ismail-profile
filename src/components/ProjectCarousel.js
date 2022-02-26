import React, { Component } from 'react';
import broforce from '../pictures/broforce.jpg';
import carrental from '../pictures/carrental.jpg';
import stocktrading from '../pictures/stocktrading.jpg';
import twitterclone from '../pictures/twitterclone.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default class ProjectCarousel extends Component {
    render() {
        return (
            <div className="App">
                <Carousel>
                <div>
                    <img src={broforce} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={carrental} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={stocktrading} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={twitterclone} />
                    <p className="legend">Legend 4</p>
                </div>
                </Carousel>

            </div>
        )
    }
}