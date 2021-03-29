import React, { Component } from 'react';
import {token} from '../../config.js';
import $ from'jquery';


export default class Card extends Component {
    constructor(props){
        super(props);
        this.state={
            averageRate: 0
        }

    }
    componentDidMount(){
        if( this.props.am != "empty"){
            this.getRating(this.props.product.id)
        }
        
    }
    RatingStars(averageRate){
        var storage=[]
        for(var i=0;i<5;i++){
            if(averageRate>1){
                storage.push(1)
            }else if(averageRate>0){
                storage.push(averageRate)
            }else{
                storage.push(0)
            }
            averageRate--
        }
        var Stars=<div>
                {storage.map((e,i)=>{
                    if((e==1)){
                        return(<i className="fa fa-star" key={i}></i>)
                    }else {
                        return(
<i className="fa fa-star Colored-Star-rating" key={i}
style={{backgroundImage: "linear-gradient(90deg,#525252 "+Number(e*100)+"%, white "+Number(e*100)+"%)",
        BackgroundClip:'text',
        TextFillColor:'transparent',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        WebkitFillColor:'transparent'}}>
</i>)
                    }
                } )}
        </div>
        return Stars
    }

    getRating(id){
        $.ajax({
            url:'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta?product_id='+id,
            type:'GET',
            contentType:'application/json',
            headers:{"Authorization":token},
            success:(Meta)=>{
                // console.log(Meta)
                var CountReviews = Number(Meta.ratings[1]) + Number(Meta.ratings[2]) + Number(Meta.ratings[3]) + Number(Meta.ratings[4]) + Number(Meta.ratings[5])
                var sumrating = Number(Meta.ratings[1])*1 + Number(Meta.ratings[2])*2 + Number(Meta.ratings[3])*3 + Number(Meta.ratings[4])*4 + Number(Meta.ratings[5])*5
                this.setState({percentfive:(Meta.ratings[5]/CountReviews)*100,percentfour:(Meta.ratings[4]/CountReviews)*100,percentthree:(Meta.ratings[3]/CountReviews)*100,percenttwo:(Meta.ratings[2]/CountReviews)*100,percentone:(Meta.ratings[1]/CountReviews)*100})
                if(sumrating && CountReviews){
                    this.setState({averageRate:(sumrating/CountReviews).toFixed(1)})
                }
    
            }
        })
    }
    


    render() {
        
        if(this.props.product && this.props.am != "empty" ){
// console.log("======>",this.props.product);
            return (            
                <div className="card card-customize"  style={{width: "15rem", height: "22rem"}} >
                    
                {(this.props.am == 'related')? <button className="star-btn" data-toggle="modal" data-target="#modalCompare" style={{ cursor: "pointer"}} onClick={()=>this.props.changeCompare(this.props.product)}><i className="fa fa-star"></i></button> : <button className="close-btn close-back" onClick={()=>this.props.dedeleteFromBag(this.props.product.id)}><i className="fa fa-times-circle pos-close-btn" ></i></button> }
                
                <img   height='220px' src={(this.props.product.photo &&this.props.product.photo.includes('http')) ? this.props.product.photo : 'https://krys-krys-storage.omn.proximis.com/Imagestorage/images/2560/1600/5e77f26adbe02_img19.jpg'} alt="Card image cap" />

                <div className="card-body">
                    <p className="card-title">{this.props.product.category}</p>
                    <p className= {(this.props.product.name.length > 10) ? "card-text-little": "card-text"}>{this.props.product.name}</p>
                    <p className='price-card-related'>{'$'+this.props.product.default_price}</p>
                    <div className="star-rating">
                    {this.RatingStars(this.state.averageRate)}
                    
                    </div>
                </div>



    </div>
    
        
        
            )
        }else {return (
            <div className="card card-customize"  style={{width: "15rem", height: "22rem",backgroundColor:'grey'}} onClick={()=>this.props.getdatax('11007')}>
                        <span style={{fontSize:'200px',margin:'auto',color:'white'}}>+</span>
            </div>
       )}
    }
}
