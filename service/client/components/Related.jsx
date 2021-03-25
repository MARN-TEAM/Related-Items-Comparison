import React, { Component } from 'react';
import Card from './Card.jsx';
import {token} from '../../config.js';
import $, { ajax } from 'jquery';

export default class Related extends Component {
    constructor(props){
    super(props);
    this.state={
        products: []
    }
}
componentDidMount(){
    $.ajax({
        url:'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11003/related',
        type: 'GET',
        contentType:'application/json',
        headers: {"Authorization":token},
        success:(data)=>{
            console.log(data);
            for(var i=0; i<data.length; i++){
                this.getRelated(data[i])
            }
        }

    })
}
getRelated(ID){
    $.ajax({
        url:'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/'+ID,
        type: 'GET',
        contentType:'application/json',
        headers: {"Authorization":token},
        success:(data)=>{
            console.log(data);
            var prod = this.state.products
            prod.push(data)
            this.setState({products: prod})
        }

    })
}

styles(){
    $/ajax({  url:'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11009/styles',
    type: 'GET',
    contentType:'application/json',
    headers: {"Authorization":token},
    success:(data)=>{
        console.log("style*********",data);
        
    }
})
}
    render() {
        console.log(this.state.products)
        return (
            <div className="related-card">
            <p className='title-cards'>RELATED PRODUCTS</p>
            <div className="carousel slide multi-item-carousel" id="theCarousel" data-interval="false">
    <div className="carousel-inner row w-100 mx-auto">

    {this.state.products.map((el, i)=>  <div className={(i == 0)?"carousel-item col-md-3 active" : "carousel-item col-md-3 "} key={i}><Card product={el}  /></div>)}
    </div>
    <a className="carousel-control-prev" href="#theCarousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#theCarousel" role="button" data-slide="next" style={{color: "black"}}>
    <span className="carousel-control-next-icon" style={{color: "black"}} aria-hidden="true"></span>
    <span className="sr-only" style={{color: "black"}}>Next</span>
    </a>
</div>
                    </div>
        )
    }
}
