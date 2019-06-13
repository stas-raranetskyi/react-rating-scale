import React, { Component } from 'react';

export const Context = React.createContext();

export default class StarsProvider extends Component {

    constructor(){
        super();
        this.state = {
            redaonly: false
        }
    }

    render(){
        return(
            <Context.Provider
                value={{
                    state: this.state,
                    setDataComment: this.setDataComment.bind(this)
                }}
            >
                {this.props.children}
            </Context.Provider>
        )
    }
}
