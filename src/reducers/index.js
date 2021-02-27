import { combineReducers } from 'redux'

const authTokenURLReducer = (authTokenURL = null, action) => {
    switch (action.type) {
        case 'SET_AUTH_TOKEN':
            return action.payload
        default:
            return authTokenURL
    }
}

const setRefreshTokenReducer = (refreshToken = null, action) => {
    switch (action.type) {
        case 'SET_REFRESH_TOKEN':
            return action.payload
        default:
            return refreshToken
    }
}

const setAccessTokenReducer = (accessToken = null, action) => {
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return action.payload
        default:
            return accessToken
    }
}

const setUserIDReducer = (userID=null, action) => {
    switch (action.type) {
        case 'SET_USER_ID':
            return action.payload
        default:
            return userID
    }
}

const setUserDataReducer = (userData=null, action) => {
    if(action.type === 'SET_USER_DATA'){
        return action.payload
    }
    return userData
}

export default combineReducers({
    authTokenURL: authTokenURLReducer,
    refreshToken: setRefreshTokenReducer,
    accessToken: setAccessTokenReducer,
    userID: setUserIDReducer,
    userData: setUserDataReducer
})


// switch (action.type) {
//     case 'SET_USER_DATA':
//         return action.payload
//     default: 
//         return userData