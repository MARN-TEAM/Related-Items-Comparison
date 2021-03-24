import React from 'react';
import Related from './related.jsx';
import Card from './Card.jsx';
import Outfit from './Outfit.jsx';


class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                
                <Related />
                
                <Outfit />

            </div>
        )
    }
}

export default App;