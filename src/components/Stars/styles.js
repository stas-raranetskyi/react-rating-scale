export const styles = {
    stars: {
        'display': 'flex',
    },
    star: {
        'cursor': 'pointer',
        'width': props => props.width,
        'height': props => props.height,
        'background-image': props => `url(${props.icon})`,
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
