import React from 'react';
import Template from './template';
import PropTypes from 'prop-types';
import icon from './img/icon.svg';

export default class Star extends React.Component {

    onMouseEnter(){
        if(this.props.readonly === false){
            this.props.setActiveStar(this.props.index);
        }
    }

    onSelect(){
        if(this.props.readonly === false){
            this.props.onSelect(this.props.index);
        }
    }

    render() {
        return <Template
                    {...this.props}
                    onMouseEnter={this.onMouseEnter.bind(this)}
                    onSelect={this.onSelect.bind(this)}
                />
    }
}

Star.propTypes = {
    index: PropTypes.number.isRequired,
    setActiveStar: PropTypes.func,
    onSelect: PropTypes.func,
    size: PropTypes.number,
    readonly: PropTypes.bool,
    active: PropTypes.bool,
    icon: PropTypes.string,
}

Star.defaultProps = {
    setActiveStar: () => {},
    onSelect: () => {},
    width: 20,
    height: 19,
    readonly: false,
    active: false,
    icon: icon,
}
