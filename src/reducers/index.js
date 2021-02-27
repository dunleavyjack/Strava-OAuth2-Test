import { combineReducers } from 'redux'

const authTokenURLReducer = (authTokenURL = null, action) => {
    if (action.type === 'AUTH_TOKENS') {
        return action.payload
    }
    return authTokenURL
}

const refreshTokenReducer = (refreshToken = null, action) => {
    if (action.type === 'GET_REFRESH_TOKEN') {
        return action.payload
    }
    return refreshToken
}



export default combineReducers({
    authTokenURL: authTokenURLReducer,
    refreshToken: refreshTokenReducer 
})