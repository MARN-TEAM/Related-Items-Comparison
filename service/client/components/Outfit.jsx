import React, { Component } from 'react';
import Card from './Card.jsx';

export default class Outfit extends Component {
    render() {
        return (
            <div className="outfit-card">
                <p className='title-cards'>OUTFIT PRODUCTS</p>
                <div className="container">
  <div className="carousel slide multi-item-carousel" id="theCarousel1" data-interval="false">
    <div className="carousel-inner row w-100 mx-auto">
      <div className="carousel-item active col-md-3">
        <Card />
      </div>
      <div className="carousel-item col-md-3">
       <Card />
      </div>
      <div className="carousel-item col-md-3">
        <img src="https://via.placeholder.com/300/9c27b0/000000?text=3" className=" d-block"/>
      </div>
      <div className="carousel-item col-md-3">
        <img src="https://via.placeholder.com/300/673ab7/000000?text=4" className=" d-block"/>
      </div>
      <div className="carousel-item col-md-3">
        <img src="https://via.placeholder.com/300/4caf50/000000?text=5" className=" d-block"/>
      </div>
      <div className="carousel-item col-md-3">
        <img src="https://via.placeholder.com/300/8bc34a/000000?text=6" className=" d-block"/>
      </div>
      <div className="carousel-item col-md-4">
        <img src="https://via.placeholder.com/300/ffffff/000000?text=7" className=" d-block"/>
      </div>
      <div className="carousel-item col-md-4">
        <img src="https://via.placeholder.com/300/000000/ffffff?text=8" className=" d-block"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#theCarousel1" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#theCarousel1" role="button" data-slide="next">
      <span className="carousel-control-next-icon"  aria-hidden="true"></span>
      <span className="sr-only" >Next</span>
    </a>
  </div>
</div>
            </div>
        )
    }
}
