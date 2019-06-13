import React from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';

const Star = ({ classes, ...props }) => {
    return(
        <div
            className={[classes.star, props.active ? classes.active : ''].join(' ')}
            onMouseEnter={props.onMouseEnter}
            onClick={props.onSelect}
        ></div>
    );
};

export default injectSheet(styles)(Star);
