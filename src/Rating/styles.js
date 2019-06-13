import icon from '../icon';
export const styles = {
    rating: {
        'display': 'flex',
    },
    icon: {
        'cursor': 'pointer',
        'width': props => props.width,
        'height': props => props.height,
        'background-image': props => `url(${props.icon.length === 0 ? icon : props.icon})`,
        'background-repeat': 'no-repeat',
        'background-size': '100% 200%',
        'margin-left': 3,
        '&:first-child': {
            'margin-left': 0
        }
    },
    active: {
        'background-position': '0 100%'
    }
};
