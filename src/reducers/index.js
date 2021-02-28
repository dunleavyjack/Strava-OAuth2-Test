import { combineReducers } from 'redux'

const setReturnTokenReducer = (tokens=null, action) => {
    switch (action.type) {
        case 'SET_RETURN_TOKENS':
            return action.payload
        default:
            return tokens
    }
}

const setUserDataReducer = (user=null, action) => {
    if(action.type === 'SET_USER_DATA'){
        return action.payload
    }
    return user
}

export default combineReducers({
    returnTokens: setReturnTokenReducer,
    user: setUserDataReducer
})