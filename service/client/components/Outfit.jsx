import React, { Component } from 'react';
import Card from './Card.jsx';
import {token} from '../../config.js'
import $ from 'jquery'

export default class Outfit extends Component {
  constructor(props) {
    super(props);
    this.state={
      outfit:[]

    }
  }
  componentDidMount(){
    for(var i=0; i < this.props.data.length ; i++){
        this.getOutfit(this.props.data[i])
    }
  }

  getOutfit(ID){
    console.log(ID);
    $.ajax({
        url:'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/'+ID,
        type: 'GET',
        contentType:'application/json',
        headers: {"Authorization":token},
        success:(data)=>{
            console.log("related dataaaaaaa",data);

            $.ajax({  
                url:'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/'+ID+'/styles',
                type: 'GET',
                contentType:'application/json',
                headers: {"Authorization":token},
                success:(photos)=>{
                    console.log(photos)
                    data.photo = photos.results[0].photos[0].thumbnail_url
                    console.log("stylesggg",data);
                    var prod = this.state.outfit
                    prod.push(data)
                    this.setState({outfit: prod})
                    
                }
            })
            
        }
    })
}
    render() {
        return (
            <div className="outfit-card">
                <p className='title-cards'>OUTFIT PRODUCTS</p>
                <div className="container">
  <div className="carousel slide multi-item-carousel" id="theCarousel1" data-interval="false">
    <div className="carousel-inner row w-100 mx-auto">
    {this.state.outfit.map((el, i)=>  <div className={(i == 0) ? "carousel-item col-md-3 active" : "carousel-item col-md-3 "} key={i}><Card product={el}  photo={this.state.style} am={'outfit'}/></div>)}
  
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
