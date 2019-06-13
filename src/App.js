import React, { Component } from 'react';
import Stars from './Stars';
import './styles.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="title">
                    React rating stars
                </div>
                <div className="subtitle">
                    Editable
                </div>
                <Stars />
                <div className="subtitle">
                    Non-Editable
                </div>
                <Stars readonly={true} rating={7}/>
            </div>
        );
    }
}

export default App;
