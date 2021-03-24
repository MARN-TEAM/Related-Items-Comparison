import React, { Component } from 'react';

{/* <button className="close-btn"><i className="times circle outline icon"></i></button> */}

export default class Card extends Component {
    render() {
        return (            
            <div className="card card-customize"  style={{width: "18.5rem", height: "27rem"}}>
                <button className="star-btn"><i class="star outline icon"></i></button>
            <img className="card-img-top"  height='255px' src="https://www.invaluable.com/blog/wp-content/uploads/2018/05/Louis-Vuitton-Bags-Purses-Hero.jpg" alt="Card image cap" />
            
            <div className="card-body">
                <p className="card-title">CATEGORY</p>
                <p className="card-text">Product Name & sdffdfdfdffdfffddffdescription</p>
                <p className='price-card-related'>$150</p>
            </div>
    </div>
    
    
        )
    }
}
