import React from 'react';
import Template from './template';
import PropTypes from 'prop-types';
import { createStars } from '../helpers';

export default class Stars extends React.Component {

    constructor(props){
        super(props);
        const stars = createStars(this.props.countStars);
        this.state = {
            selectIndex: 0,
            selectIndexForce: this.props.rating,
            stars
        }
    }

    reset(){
        this.setState({
            selectIndex: 0
        });
    }

    setActiveStar(index = 0){
        this.setState({
            selectIndex: index
        })
    }

    onSelect(index){
        if((typeof this.props.beforeSelect === 'function' && this.props.beforeSelect() !== true) || this.props.readonly === true){
            return;
        }

        if(index === this.state.selectIndexForce){
            this.setState({
                selectIndexForce: 0
            });
        }
        else{
            this.setState({
                selectIndexForce: index
            });
        }

        if(typeof this.props.onSelect === 'function'){
            this.props.onSelect(index);
        }
    }

    onMouseLeave(){
        this.reset();
    }

    onMouseEnter(index){
        if(this.props.readonly === false){
            this.setActiveStar(index);
        }
    }

    render() {
        console.log(this.state.selectIndex);
        console.log(this.state.selectIndexForce);
        return <Template
                    {...this.props}
                    icon={this.props.icon}
                    stars={this.state.stars}
                    selectIndex={this.state.selectIndex}
                    selectIndexForce={this.state.selectIndexForce}
                    onMouseEnter={this.onMouseEnter.bind(this)}
                    onMouseLeave={this.onMouseLeave.bind(this)}
                    onSelect={this.onSelect.bind(this)}
            />
    }
}

Stars.propTypes = {
    rating: PropTypes.number,
    countStars: PropTypes.number,
    readonly: PropTypes.bool,
    onSelect: PropTypes.func,
    beforeSelect: PropTypes.func,
    icon: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    classNameStarsWrap: PropTypes.string,
    classNameStarItem: PropTypes.string,
}

Stars.defaultProps = {
    rating: 0,
    countStars: 10,
    readonly: false,
    onSelect: () => {},
    beforeSelect: () => true,
    icon: '',
    width: 20,
    height: 19,
    classNameStarsWrap: '',
    classNameStarItem: '',
}
