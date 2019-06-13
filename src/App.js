import React, { Component } from 'react';
import Rating from './Rating';
import './styles.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="title">
                    React rating scale
                </div>
                <div className="subtitle">
                    Editable
                </div>
                <Rating />
                <div className="subtitle">
                    Non-Editable
                </div>
                <Rating readonly={true} rating={7}/>
            </div>
        );
    }
}

export default App;
