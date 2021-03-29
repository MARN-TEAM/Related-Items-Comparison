import React, { Component } from 'react';
import Card from './Card.jsx';
import {token} from '../../config.js'
import $ from 'jquery'
import Carousel from 'react-elastic-carousel';

export default class Outfit extends Component {
  constructor(props) {
    super(props);
    this.state={
      outfit:[]

    }
  }

  componentDidMount(){
    // console.log('aaaa',this.props.data)
    // this.setState({outfit:this.props.data})
    // for(var i=0; i < this.props.data.length ; i++){
    //     this.getOutfit(this.props.data[i])
    // }
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
                    console.log('prod',prod)
                }
            })
            
        }
    })
}
    render() {
        return (
            <div className="outfit-card">
              {console.log('=======>',this.props.bag)}
                <p className='title-cards1'>OUTFIT PRODUCTS</p>
                <Carousel itemsToShow={3.5} pagination={false}>
                  
                  <Card am={'empty'} getdatax={this.props.getdatax} /> 
                  
                  
    {this.props.bag.map((el, i)=>  <div key={i}>  <Card product={el}  dedeleteFromBag={this.props.deleteFromBag} am={'outfit'}/></div>)}
  
</Carousel>

</div>

        )
    }
}
