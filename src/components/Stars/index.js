import React from 'react';
import Template from './template';
import PropTypes from 'prop-types';
import { createStars } from '../../helpers';

export default class Stars extends React.Component {

    constructor(props){
        super(props);
        const stars = createStars(this.props.countStars);
        this.state = {
            selectIndex: -1,
            selectIndexForce: -1,
            stars
        }
    }

    reset(){
        this.setState({
            selectIndex: -1
        });
    }

    setActiveStar(index = -1){
        this.setState({
            selectIndex: index
        })
    }

    onSelect(index){
        if(typeof this.props.beforeSelect !== 'function' || this.props.beforeSelect() !== true || this.props.readonly === true){
            return;
        }

        if(index === this.state.selectIndexForce){
            this.setState({
                selectIndexForce: -1
            });
            return;
        }

        this.setState({
            selectIndexForce: index
        });

        if(typeof this.props.onSelect === 'function'){
            this.props.onSelect();
        }
    }

    onMouseLeave(){
        this.reset();
    }

    render() {
        return <Template
                    {...this.props}
                    stars={this.state.stars}
                    selectIndex={this.state.selectIndex}
                    selectIndexForce={this.state.selectIndexForce}
                    setActiveStar={this.setActiveStar.bind(this)}
                    onMouseLeave={this.onMouseLeave.bind(this)}
                    onSelect={this.onSelect.bind(this)}
            />
    }
}

Stars.propTypes = {
    countStars: PropTypes.number,
    readonly: PropTypes.bool,
    onSelect: PropTypes.func,
    beforeSelect: PropTypes.func,
}

Stars.defaultProps = {
    countStars: 10,
    readonly: false,
    onSelect: () => {},
    beforeSelect: () => true,
}
