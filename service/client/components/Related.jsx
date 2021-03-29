import React, { Component } from 'react';
import Card from './Card.jsx';
import {token} from '../../config.js';
import $, { ajax } from 'jquery';
import Carousel from 'react-elastic-carousel';


export default class Related extends Component {
    constructor(props){
    super(props);
    this.state={
        products: [],
        Id_product:"11007",
        thisproduct_data:{},
        tocompare:{}
    }
    this.changeTocompare = this.changeTocompare.bind(this)
}


changeTocompare(prod){
    this.setState({tocompare:prod})
}
componentDidMount(){
    $.ajax({
        url:'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/'+this.state.Id_product+'/related',
        type: 'GET',
        contentType:'application/json',
        headers: {"Authorization":token},
        success:(data)=>{
            // console.log(data);
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
            // console.log("related dataaaaaaa",data);
            
            $.ajax({  
                url:'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/'+ID+'/styles',
                type: 'GET',
                contentType:'application/json',
                headers: {"Authorization":token},
                success:(photos)=>{
                    // console.log(photos)
                    data.photo = photos.results[0].photos[0].thumbnail_url
                    // console.log("styles*********",data);
                    var prod = this.state.products
                    prod.push(data)
                    this.setState({thisproduct_data:data})
                    this.setState({products: prod})
                    document.getElementsByClassName('rec-arrow-left')[0].click()
                }
            })
            
        }
    })
}


    render() {
         console.log('xxx',this.state.products)
        return (
            <div className="related-card container">
                
            <p className='title-cards'>RELATED PRODUCTS</p>
            <div className="carosel-right-fade">
            <Carousel itemsToShow={3.5} pagination={false}>
                
                {this.state.products.map((el, i)=>  <div  key={i} ><Card product={el}  photo={this.state.style} AddToBag={this.props.AddToBag} changeCompare={this.changeTocompare} am={'related'} /></div>)}
                
                
                
           </Carousel>
           </div>


{(this.state.thisproduct_data && this.state.tocompare) ? <div className="modal fade" id="modalCompare" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
  <div className="modal-dialog" role="document">
    <div className="modal-content" style={{width:'100%'}}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel" style={{marginLeft:'40%'}}>Comparing</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="container">
  <div className="row">
    <div className="col-sm">
    <div className="row">
                <img src={(this.state.tocompare.photo &&this.state.tocompare.photo.includes('http')) ? this.state.tocompare.photo : 'https://krys-krys-storage.omn.proximis.com/Imagestorage/images/2560/1600/5e77f26adbe02_img19.jpg'} width="150px" height="150px" border="0.5px black solid"/> 
                    </div>
    <div className="row" >
    {this.state.tocompare.category}
                    </div>
                    <div className="row">
                    {this.state.tocompare.name}
                    </div>
                    <div className="row">
                    {this.state.tocompare.default_price}$
                    </div>
    </div>
    <div className="col-sm infoRelatedProduct">
    <div className="row">
                        <h3>Photo</h3>
                    </div>
    <div className="row">
                        <h3>Category</h3>
                    </div>
                    <div className="row">
                        <h3>Name</h3>
                    </div>
                    <div className="row">
                        <h3>Price</h3>
                    </div>
    </div>
    <div className="col-sm">
    <div className="row">
                <img src={(this.state.thisproduct_data.photo &&this.state.thisproduct_data.photo.includes('http')) ? this.state.thisproduct_data.photo : 'https://krys-krys-storage.omn.proximis.com/Imagestorage/images/2560/1600/5e77f26adbe02_img19.jpg'} width="150px" height="150px" /> 
                    </div>
    <div className="row">
                {this.state.thisproduct_data.category}
                    </div>
                    <div className="row">
                    {this.state.thisproduct_data.name}
                    </div>
                    <div className="row">
                    {this.state.thisproduct_data.default_price}$
                    </div>
        </div>
    </div>
</div>
</div>
    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

    </div>
    </div>
</div>
</div>   : ''}

                    </div>
        )
    }
}












