import React from 'react';
import Related from './related.jsx';
import Card from './Card.jsx';
import Outfit from './Outfit.jsx';
import {token} from '../../config.js'
import $, { ajax } from 'jquery';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bag:[]
        }
        this.AddToBag = this.AddToBag.bind(this)
        this.deleteFromBag = this.deleteFromBag.bind(this)
        this.getdatax = this.getdatax.bind(this)
    }
    AddToBag(data){
        console.log(data)
        var bagx = this.state.bag
        bagx.unshift(data)
        this.setState({bag: bagx}, ()=>{console.log('baaaaaaaaaag',this.state.bag);})
    }
    deleteFromBag(id){
        var bagx = this.state.bag
        for(var i=0; i<bagx.length; i++){
            if(bagx[i].id === id){
                console.log("Deleeeeeeeete",bagx, bagx[i]);
                bagx.splice(i,1) 
            }
        }
        this.setState({bag:bagx})
    }
    getdatax(ID){
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
                        var prod = this.state.bag
                        prod.push(data)
                        this.setState({bag: prod})
                    }
                })
                
            }
        })
    }

    

    render(){
        return(
            <div>
                
                <Related AddToBag={this.AddToBag} />
                
                <Outfit bag={this.state.bag} deleteFromBag={this.deleteFromBag} getdatax={this.getdatax} />
               
           
            </div>
        )
    }
}

export default App;