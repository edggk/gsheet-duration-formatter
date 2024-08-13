export const TYPES_TO_SECONDS = {
    'minute': 60,
    'second': 1,
    'hour': 3600,
    'day': 86400,
    'week': 604800
};

export const DURATION_TYPES = ['week', 'day', 'hour', 'minute', 'second']
export const TYPE_SHORTHANDS = Object.keys(TYPES_TO_SECONDS)
    .reduce((acc, curr) => {
        acc[curr.charAt(0)] = curr;
        return acc;
    }, {});
