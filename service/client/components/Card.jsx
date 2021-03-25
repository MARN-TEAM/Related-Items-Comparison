import React, { Component } from 'react';

{/* <button className="close-btn"><i className="times circle outline icon"></i></button> */}

export default class Card extends Component {
    constructor(props){
        super(props);
    }
    render() {
        if(this.props.product){

            return (            
                <div className="card card-customize"  style={{width: "18.5rem", height: "27rem"}}>
                    
                    <button className="star-btn"><i className="star outline icon"></i></button>
                <img className="card-img-top"  height='255px' src="https://www.mercerienanou.fr/7191-large_default/tissu-stof-sevilla-fil-a-fil-bleu-gris-tres-clair.jpg" alt="Card image cap" />
                
                <div className="card-body">
                    <p className="card-title">{this.props.product.category}</p>
                    <p className="card-text">{this.props.product.description}</p>
                    <p className='price-card-related'>{'$'+this.props.product.default_price}</p>
                </div>
    </div>
    
        
        
            )
        }else {return (<div></div>)}
    }
}
