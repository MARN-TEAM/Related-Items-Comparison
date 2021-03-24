import React, { Component } from 'react';
import Card from './Card.jsx';

export default class Outfit extends Component {
    render() {
        return (
            <div className="outfit-card">
                <p className='title-cards'>OUTFIT PRODUCTS</p>
                <Card />
            </div>
        )
    }
}
