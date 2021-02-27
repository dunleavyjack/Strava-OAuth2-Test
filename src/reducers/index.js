import { combineReducers } from 'redux'

const authTokenURLReducer = (authTokenURL = null, action) => {
    if (action.type === 'AUTH_TOKENS') {
        return action.payload
    }
    return authTokenURL
}


export default combineReducers({
    authTokenURL: authTokenURLReducer
})