import React from 'react';
import injectSheet from 'react-jss';
import { styles } from './styles.js';
import Star from '../Star';

const Stars = ({ classes, ...props }) => {
    return(
        <div className={classes.stars} onMouseLeave={props.onMouseLeave}>
            {props.stars.map(star => {
                const active = (props.selectIndex !== -1 && star.index <= props.selectIndex) || (props.selectIndexForce !== -1 && star.index <= props.selectIndexForce);
                return <Star
                            index={star.index}
                            readonly={props.readonly}
                            key={star.index}
                            active={active}
                            setActiveStar={props.setActiveStar}
                            onSelect={props.onSelect}
                        />
            })}
        </div>
    );
};

export default injectSheet(styles)(Stars);
