export const increment = (incrementBy) => {
    return {
        type: 'INCREMENT',
        payload: {
            incrementBy: incrementBy
        }
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

