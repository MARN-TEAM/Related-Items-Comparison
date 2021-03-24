import React, { Component } from 'react';
import Card from './Card.jsx';

export default class Related extends Component {
    constructor(props){
    super(props);
    this.state={

    }
}
    render() {
        return (
            <div className="related-card">
            <p className='title-cards'>RELATED PRODUCTS</p>
                <Card />
                    </div>
        )
    }
}
