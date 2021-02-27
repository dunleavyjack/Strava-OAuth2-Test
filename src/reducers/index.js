import { combineReducers } from 'redux'

const authTokenURLReducer = (authTokenURL = null, action) => {
    switch (action.type) {
        case 'SET_AUTH_TOKEN':
            return action.payload
        default:
            return authTokenURL
    }
}

const getRefreshTokenReducer = (refreshToken = null, action) => {
    switch (action.type) {
        case 'SET_REFRESH_TOKEN':
            return action.payload
        default:
            return refreshToken
    }
}

const getAccessTokenReducer = (accessToken = null, action) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return action.payload
        default:
            return accessToken
    }
}

const getUserIDReducer = (userID=null, action) => {
    switch (action.type) {
        case 'SET_USER_ID':
            return action.payload
        default:
            return userID
    }
}

export default combineReducers({
    authTokenURL: authTokenURLReducer,
    refreshToken: getRefreshTokenReducer,
    accessToken: getAccessTokenReducer,
    userID: getUserIDReducer
})