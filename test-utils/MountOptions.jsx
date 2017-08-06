import PropTypes from 'prop-types';

export const MountOptions = {
    context: {
        router: {
            history: {
                createHref: (a, b) => {
                },
                push: () => {
                },
                replace: () => {
                }
            }
        }
    }, childContextTypes: {
        router: PropTypes.object
    }
};
