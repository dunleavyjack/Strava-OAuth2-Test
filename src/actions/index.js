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

// export const getRefreshToken = (clientID, clientSecret, authCode) => async dispatch => {
//     try {
//         const response = await axios.post("https://www.strava.com/api/v3/oauth/token", {
//             params: {
//                 client_id: clientID,
//                 client_secret: clientSecret,
//                 code: authCode,
//                 grant_type: "authorization_code"
//             }
//         });
//         dispatch({type: 'GET_REFRESH_TOKEN', payload: response})
//     } catch (error) {
//         console.log(error)
//     }
// }

