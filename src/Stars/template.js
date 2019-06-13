import React from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';

const Stars = ({ classes, ...props }) => {
    return(
        <div className={[classes.stars, props.classNameStarsWrap].join(' ')} onMouseLeave={props.onMouseLeave}>
            {props.stars.map(star => {
                const active = (props.selectIndex > 0 && star.index <= props.selectIndex) || (props.selectIndexForce > 0 && star.index <= props.selectIndexForce);
                return (
                    <div
                        className={[classes.star, props.classNameStarItem, active ? classes.active : ''].join(' ')}
                        onMouseEnter={() => props.onMouseEnter(star.index)}
                        onClick={() => props.onSelect(star.index)}
                        key={star.index}
                    ></div>
                )
            })}
        </div>
    );
};

export default injectSheet(styles)(Stars);
