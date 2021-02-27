import axios from "axios";
import { combineReducers } from "redux";

export const setAuthTokens = url => {
    return {
        type: 'AUTH_TOKENS',
        payload: url
    };
};

export const getRefreshToken = (clientID, clientSecret, authCode) => async dispatch => {
    try {
        const response = await axios.post("https://www.strava.com/api/v3/oauth/token", {
            params: {
                client_id: clientID,
                client_secret: clientSecret,
                code: authCode,
                grant_type: "authorization_code"
            }
        });
        dispatch({type: 'GET_REFRESH_TOKEN', payload: response})
    } catch (error) {
        console.log(error)
    }
}



