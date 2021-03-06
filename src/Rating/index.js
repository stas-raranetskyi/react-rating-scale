import React from 'react';
import Template from './template';
import PropTypes from 'prop-types';
import { createItems } from '../helpers';

export default class Rating extends React.Component {

    constructor(props){
        super(props);
        const items = createItems(this.props.length);
        this.state = {
            selectIndex: 0,
            selectIndexForce: this.props.rating,
            items
        }
    }

    reset(){
        this.setState({
            selectIndex: 0
        });
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
            this.setState({
                selectIndex: index
            })
        }
    }

    render() {
        return <Template
                    {...this.props}
                    icon={this.props.icon}
                    items={this.state.items}
                    selectIndex={this.state.selectIndex}
                    selectIndexForce={this.state.selectIndexForce}
                    onMouseEnter={this.onMouseEnter.bind(this)}
                    onMouseLeave={this.onMouseLeave.bind(this)}
                    onSelect={this.onSelect.bind(this)}
            />
    }
}

Rating.propTypes = {
    rating: PropTypes.number,
    length: PropTypes.number,
    readonly: PropTypes.bool,
    onSelect: PropTypes.func,
    beforeSelect: PropTypes.func,
    icon: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    classNameRatingWrap: PropTypes.string,
    classNameRatingItem: PropTypes.string,
    classNameRatingItemActive: PropTypes.string,
}

Rating.defaultProps = {
    rating: 0,
    length: 10,
    readonly: false,
    onSelect: () => {},
    beforeSelect: () => true,
    icon: '',
    width: 20,
    height: 19,
    classNameRatingWrap: '',
    classNameRatingItem: '',
    classNameRatingItemActive: '',
}
