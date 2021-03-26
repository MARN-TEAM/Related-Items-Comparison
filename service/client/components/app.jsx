import React from 'react';
import Related from './related.jsx';
import Card from './Card.jsx';
import Outfit from './Outfit.jsx';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bag:[11003,11004,11005]
        }
    }

    render(){
        return(
            <div>
                
                <Related />
                
                <Outfit data={this.state.bag} />

            </div>
        )
    }
}

export default App;