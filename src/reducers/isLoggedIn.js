const isLoggedInReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            console.log('User just signed in, setting isLoggedIn state to true');
            return !state;
        default:
            return state;
    }
};
export default isLoggedInReducer;