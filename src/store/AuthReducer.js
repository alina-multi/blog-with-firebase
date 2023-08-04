const AuthReducer = (state , action) => {
    switch (action.type) {
        case 'LOGIN':
        return {
            currentUser: action.payload,
        };
        case 'LOGOUT':
        return {
            currentUser: null,
        };
        case 'UPDATE_PROFILE':
        return state  = {
            currentUser: {
                ...state.currentUser,
                ...action.payload,
            }

        };
        default:
        return state;
    }
    }

    export default AuthReducer;