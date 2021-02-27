export const setAuthTokens = url => {
    return {
        type: 'SET_AUTH_TOKENS',
        payload: url
    };
};

export const setRefreshToken = token => {
    return {
        type: 'SET_REFRESH_TOKEN',
        payload: token
    }
}

export const setAccessToken = token => {
    return {
        type: 'SET_ACCESS_TOKEN',
        payload: token
    }
}

export const setUserID = id => {
    return {
        type: 'SET_USER_ID',
        payload: id
    }
}

export const setUserData = data => {
    return {
        type: 'SET_USER_DATA',
        payload: data
    }
}

