import React from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';

const Rating = ({ classes, ...props }) => {
    return(
        <div className={[classes.rating, props.classNameRatingWrap].join(' ')} onMouseLeave={props.onMouseLeave}>
            {props.items.map(item => {
                const active = (props.selectIndex > 0 && item.index <= props.selectIndex) || (props.selectIndexForce > 0 && item.index <= props.selectIndexForce);
                return (
                    <div
                        className={[classes.icon, props.classNameRatingItem, active ? `${classes.active} ${props.classNameRatingItemActive}` : ''].join(' ')}
                        onMouseEnter={() => props.onMouseEnter(item.index)}
                        onClick={() => props.onSelect(item.index)}
                        key={item.index}
                    ></div>
                )
            })}
        </div>
    );
};

export default injectSheet(styles)(Rating);
