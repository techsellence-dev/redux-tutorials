const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = action.payload.incrementBy;
            return state + incrementBy;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;