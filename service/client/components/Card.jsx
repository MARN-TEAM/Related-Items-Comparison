import React, { Component } from 'react';


export default class Card extends Component {
    constructor(props){
        super(props);
        this.state={

        }

    }
    handleCompare(){
        alert('sex')
    }

    render() {
        if(this.props.product){

            return (            
                <div className="card card-customize"  style={{width: "18.5rem", height: "27rem", cursor: "pointer"}} onClick={()=>this.handleCompare()}>
                    
                   {(this.props.am == 'related')? <button className="star-btn"><i className="star outline icon"></i></button> : <button className="close-btn"><i className="times circle outline icon"></i></button> } 
                <img className="card-img-top"  height='255px' src={this.props.product.photo} alt="Card image cap" />
                
                <div className="card-body">
                    <p className="card-title">{this.props.product.category}</p>
                    <p className="card-text">{this.props.product.name}</p>
                    <p className='price-card-related'>{'$'+this.props.product.default_price}</p>
                    <div className="star-rating">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star Colored-Star-rating-empty"></span>
                    <span className="fa fa-star Colored-Star-rating-empty"></span>
                    </div>
                </div>
                
    </div>
    
        
        
            )
        }else {return (<div></div>)}
    }
}
