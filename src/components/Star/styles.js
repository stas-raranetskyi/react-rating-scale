export const styles = {
    star: {
        'cursor': 'pointer',
        'width': props => props.width,
        'height': props => props.height,
        'background-image': props => `url(${props.icon})`,
        'background-repeat': 'no-repeat',
        'background-size': '100% 200%',
    },
    active: {
        'background-position': '0 100%'
    }
};
